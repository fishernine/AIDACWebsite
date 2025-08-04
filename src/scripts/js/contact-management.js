// Contact Management System
class ContactManagement {
    constructor() {
        this.contacts = [];
        this.filteredContacts = [];
        this.currentFilters = {
            status: '',
            subject: '',
            search: ''
        };
        this.init();
    }

    init() {
        this.loadContacts();
        this.updateStats();
        this.renderContacts();
        this.setupEventListeners();
    }

    loadContacts() {
        if (window.contactFormHandler) {
            this.contacts = window.contactFormHandler.getAllContacts();
            this.filteredContacts = [...this.contacts];
        }
    }

    updateStats() {
        const stats = getContactStats();
        if (!stats) return;

        const statsGrid = document.getElementById('statsGrid');
        if (!statsGrid) return;

        statsGrid.innerHTML = `
            <div class="stat-item">
                <div class="stat-number">${stats.total}</div>
                <div class="stat-label">Total Submissions</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">${stats.byStatus.new || 0}</div>
                <div class="stat-label">New Messages</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">${stats.byStatus.reviewed || 0}</div>
                <div class="stat-label">Reviewed</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">${stats.byStatus.replied || 0}</div>
                <div class="stat-label">Replied</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">${stats.newsletterSubscribers}</div>
                <div class="stat-label">Newsletter Subscribers</div>
            </div>
        `;
    }

    renderContacts() {
        const contactList = document.getElementById('contactList');
        if (!contactList) return;

        if (this.filteredContacts.length === 0) {
            contactList.innerHTML = `
                <div class="no-contacts">
                    <i class="fa fa-inbox" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
                    <h3>No contact submissions found</h3>
                    <p>Contact form submissions will appear here once users submit the form.</p>
                </div>
            `;
            return;
        }

        // Sort by submission date (newest first)
        const sortedContacts = this.filteredContacts.sort((a, b) => 
            new Date(b.submittedAt) - new Date(a.submittedAt)
        );

        let html = '';
        sortedContacts.forEach(contact => {
            html += this.createContactItem(contact);
        });

        contactList.innerHTML = html;
    }

    createContactItem(contact) {
        const date = new Date(contact.submittedAt).toLocaleDateString();
        const time = new Date(contact.submittedAt).toLocaleTimeString();
        
        return `
            <div class="contact-item" data-id="${contact.id}">
                <div class="contact-header">
                    <div>
                        <div class="contact-name">${contact.firstName} ${contact.lastName}</div>
                        <div class="contact-date">${date} at ${time}</div>
                    </div>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <span class="contact-subject">${contact.subject}</span>
                        <span class="contact-status status-${contact.status}">${contact.status}</span>
                    </div>
                </div>
                
                <div class="contact-details">
                    <p><strong>Email:</strong> ${contact.email}</p>
                    ${contact.phone ? `<p><strong>Phone:</strong> ${contact.phone}</p>` : ''}
                    ${contact.organization ? `<p><strong>Organization:</strong> ${contact.organization}</p>` : ''}
                    ${contact.position ? `<p><strong>Position:</strong> ${contact.position}</p>` : ''}
                    ${contact.newsletter ? `<p><strong>Newsletter:</strong> Subscribed</p>` : ''}
                </div>
                
                <div class="contact-message">
                    <strong>Message:</strong><br>
                    ${contact.message}
                </div>
                
                <div class="contact-actions">
                    <button class="btn btn-primary btn-sm" onclick="updateContactStatus('${contact.id}', 'reviewed')">
                        <i class="fa fa-eye"></i> Mark as Reviewed
                    </button>
                    <button class="btn btn-success btn-sm" onclick="updateContactStatus('${contact.id}', 'replied')">
                        <i class="fa fa-reply"></i> Mark as Replied
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteContact('${contact.id}')">
                        <i class="fa fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        // Status filter
        const statusFilter = document.getElementById('statusFilter');
        if (statusFilter) {
            statusFilter.addEventListener('change', (e) => {
                this.currentFilters.status = e.target.value;
                this.applyFilters();
            });
        }

        // Subject filter
        const subjectFilter = document.getElementById('subjectFilter');
        if (subjectFilter) {
            subjectFilter.addEventListener('change', (e) => {
                this.currentFilters.subject = e.target.value;
                this.applyFilters();
            });
        }

        // Search filter
        const searchFilter = document.getElementById('searchFilter');
        if (searchFilter) {
            searchFilter.addEventListener('input', (e) => {
                this.currentFilters.search = e.target.value;
                this.applyFilters();
            });
        }
    }

    applyFilters() {
        this.filteredContacts = this.contacts.filter(contact => {
            // Status filter
            if (this.currentFilters.status && contact.status !== this.currentFilters.status) {
                return false;
            }

            // Subject filter
            if (this.currentFilters.subject && contact.subject !== this.currentFilters.subject) {
                return false;
            }

            // Search filter
            if (this.currentFilters.search) {
                const searchTerm = this.currentFilters.search.toLowerCase();
                const searchableText = `
                    ${contact.firstName} ${contact.lastName} 
                    ${contact.email} 
                    ${contact.organization || ''} 
                    ${contact.position || ''} 
                    ${contact.message}
                `.toLowerCase();
                
                if (!searchableText.includes(searchTerm)) {
                    return false;
                }
            }

            return true;
        });

        this.renderContacts();
    }

    updateContactStatus(id, status) {
        if (window.contactFormHandler) {
            const success = window.contactFormHandler.updateContactStatus(id, status);
            if (success) {
                this.loadContacts();
                this.updateStats();
                this.applyFilters();
                this.showMessage(`Contact status updated to ${status}`, 'success');
            }
        }
    }

    deleteContact(id) {
        if (confirm('Are you sure you want to delete this contact submission?')) {
            if (window.contactFormHandler) {
                const success = window.contactFormHandler.deleteContact(id);
                if (success) {
                    this.loadContacts();
                    this.updateStats();
                    this.applyFilters();
                    this.showMessage('Contact submission deleted', 'success');
                }
            }
        }
    }

    showMessage(message, type) {
        // Create a temporary message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `alert alert-${type}`;
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '20px';
        messageDiv.style.right = '20px';
        messageDiv.style.zIndex = '9999';
        messageDiv.style.minWidth = '300px';
        messageDiv.textContent = message;
        
        document.body.appendChild(messageDiv);
        
        // Remove after 3 seconds
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 3000);
    }
}

// Global functions
function applyFilters() {
    if (window.contactManagement) {
        window.contactManagement.applyFilters();
    }
}

function updateContactStatus(id, status) {
    if (window.contactManagement) {
        window.contactManagement.updateContactStatus(id, status);
    }
}

function deleteContact(id) {
    if (window.contactManagement) {
        window.contactManagement.deleteContact(id);
    }
}

// Initialize contact management
document.addEventListener('DOMContentLoaded', function() {
    // Wait for contact form handler to be available
    setTimeout(() => {
        window.contactManagement = new ContactManagement();
    }, 1000);
}); 