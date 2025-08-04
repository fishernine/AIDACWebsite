// Unified Content Management System
class UnifiedAdmin {
    constructor() {
        this.init();
    }

    init() {
        this.loadAllContent();
        this.setupEventListeners();
        this.updateStatistics();
        this.loadContactSubmissions();
        this.initializeTabs();
    }

    // 设置事件监听器
    setupEventListeners() {
        // Research Form
        const researchForm = document.getElementById('researchForm');
        if (researchForm) {
            researchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleResearchSubmit();
            });
        }

        // Events Form
        const eventsForm = document.getElementById('eventsForm');
        if (eventsForm) {
            eventsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleEventsSubmit();
            });
        }

        // Cases Form
        const casesForm = document.getElementById('casesForm');
        if (casesForm) {
            casesForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleCasesSubmit();
            });
        }
    }

    // 初始化标签页
    initializeTabs() {
        // 确保Bootstrap标签页正常工作
        const tabButtons = document.querySelectorAll('[data-bs-toggle="tab"]');
        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const target = button.getAttribute('data-bs-target');
                const targetTab = document.querySelector(target);
                
                if (targetTab) {
                    // 隐藏所有标签页
                    document.querySelectorAll('.tab-pane').forEach(tab => {
                        tab.classList.remove('show', 'active');
                    });
                    
                    // 移除所有按钮的active类
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        link.setAttribute('aria-selected', 'false');
                    });
                    
                    // 显示目标标签页
                    targetTab.classList.add('show', 'active');
                    
                    // 激活当前按钮
                    button.classList.add('active');
                    button.setAttribute('aria-selected', 'true');
                }
            });
        });
    }

    // 加载所有内容
    loadAllContent() {
        this.loadResearchPapers();
        this.loadEvents();
        this.loadCaseStudies();
    }

    // ==================== RESEARCH PAPERS ====================

    // 处理研究论文提交
    handleResearchSubmit() {
        const formData = this.getResearchFormData();
        
        if (!this.validateResearchForm(formData)) {
            return;
        }

        // 添加新论文
        const newPaper = {
            id: researchPapers.length + 1,
            ...formData
        };

        researchPapers.push(newPaper);
        
        // 重新加载数据
        this.loadResearchPapers();
        this.updateStatistics();
        
        // 显示成功消息
        this.showAlert('researchAlert', 'Research paper added successfully!', 'success');
        
        // 重置表单
        this.resetResearchForm();
    }

    // 获取研究论文表单数据
    getResearchFormData() {
        return {
            title: document.getElementById('researchTitle').value,
            author: document.getElementById('researchAuthor').value,
            category: document.getElementById('researchCategory').value,
            journal: document.getElementById('researchJournal').value,
            year: parseInt(document.getElementById('researchYear').value),
            citations: parseInt(document.getElementById('researchCitations').value) || 0,
            image: document.getElementById('researchImage').value || "../assets/images/research/1.jpg",
            abstract: document.getElementById('researchAbstract').value,
            tags: document.getElementById('researchTags').value.split(',').map(tag => tag.trim()).filter(tag => tag),
            officialLink: document.getElementById('researchOfficialLink').value || null
        };
    }

    // 验证研究论文表单
    validateResearchForm(data) {
        if (!data.title || !data.author || !data.category || !data.journal || !data.year) {
            this.showAlert('researchAlert', 'Please fill in all required fields.', 'danger');
            return false;
        }
        
        if (data.year < 2000 || data.year > 2030) {
            this.showAlert('researchAlert', 'Please enter a valid year between 2000 and 2030.', 'danger');
            return false;
        }
        
        return true;
    }

    // 加载研究论文列表
    loadResearchPapers() {
        const container = document.getElementById('researchList');
        if (!container) return;

        let html = '';
        
        if (researchPapers.length === 0) {
            html = '<p>No research papers found.</p>';
        } else {
            researchPapers.forEach(paper => {
                html += this.createResearchItem(paper);
            });
        }
        
        container.innerHTML = html;
    }

    // 创建研究论文项
    createResearchItem(paper) {
        const hasOfficialLink = paper.officialLink ? 'Yes' : 'No';
        return `
            <div class="content-item" data-id="${paper.id}">
                <div class="content-title">${paper.title}</div>
                <div class="content-meta">
                    <strong>Author:</strong> ${paper.author} | 
                    <strong>Category:</strong> ${paper.category} | 
                    <strong>Year:</strong> ${paper.year} | 
                    <strong>Citations:</strong> ${paper.citations} |
                    <strong>Official Link:</strong> ${hasOfficialLink}
                </div>
                <div class="content-actions">
                    <button class="btn-primary btn-sm" onclick="editResearchPaper(${paper.id})">Edit</button>
                    <button class="btn-secondary btn-sm" onclick="deleteResearchPaper(${paper.id})">Delete</button>
                </div>
            </div>
        `;
    }

    // ==================== EVENTS ====================

    // 处理事件提交
    handleEventsSubmit() {
        const formData = this.getEventsFormData();
        
        if (!this.validateEventsForm(formData)) {
            return;
        }

        // 添加新事件
        const newEvent = {
            id: EVENTS_DATA.getAllEvents().length + 1,
            ...formData
        };

        EVENTS_DATA.addEvent(newEvent);
        
        // 重新加载数据
        this.loadEvents();
        this.updateStatistics();
        
        // 显示成功消息
        this.showAlert('eventsAlert', 'Event added successfully!', 'success');
        
        // 重置表单
        this.resetEventsForm();
    }

    // 获取事件表单数据
    getEventsFormData() {
        return {
            title: document.getElementById('eventTitle').value,
            date: document.getElementById('eventDate').value,
            location: document.getElementById('eventLocation').value,
            type: document.getElementById('eventType').value,
            attendees: document.getElementById('eventAttendees').value || "50+ Attendees",
            image: document.getElementById('eventImage').value || "../assets/images/news/1.png",
            description: document.getElementById('eventDescription').value,
            tags: document.getElementById('eventTags').value.split(',').map(tag => tag.trim()).filter(tag => tag),
            fullDescription: document.getElementById('eventDescription').value,
            registrationUrl: "#",
            organizer: "AIDAC",
            contactEmail: "contact@aidac.ac.uk",
            venue: document.getElementById('eventLocation').value,
            duration: "1 day"
        };
    }

    // 验证事件表单
    validateEventsForm(data) {
        if (!data.title || !data.date || !data.location || !data.type) {
            this.showAlert('eventsAlert', 'Please fill in all required fields.', 'danger');
            return false;
        }
        
        return true;
    }

    // 加载事件列表
    loadEvents() {
        const container = document.getElementById('eventsList');
        if (!container) return;

        const events = EVENTS_DATA.getAllEvents();
        let html = '';
        
        if (events.length === 0) {
            html = '<p>No events found.</p>';
        } else {
            events.forEach(event => {
                html += this.createEventItem(event);
            });
        }
        
        container.innerHTML = html;
    }

    // 创建事件项
    createEventItem(event) {
        return `
            <div class="content-item" data-id="${event.id}">
                <div class="content-title">${event.title}</div>
                <div class="content-meta">
                    <strong>Date:</strong> ${event.date} | 
                    <strong>Location:</strong> ${event.location} | 
                    <strong>Type:</strong> ${event.type} | 
                    <strong>Attendees:</strong> ${event.attendees}
                </div>
                <div class="content-actions">
                    <button class="btn-primary btn-sm" onclick="editEvent(${event.id})">Edit</button>
                    <button class="btn-secondary btn-sm" onclick="deleteEvent(${event.id})">Delete</button>
                </div>
            </div>
        `;
    }

    // ==================== CASE STUDIES ====================

    // 处理案例研究提交
    handleCasesSubmit() {
        const formData = this.getCasesFormData();
        
        if (!this.validateCasesForm(formData)) {
            return;
        }

        // 添加新案例
        const newCase = {
            id: CASES_DATA.getAllCases().length + 1,
            ...formData
        };

        CASES_DATA.addCase(newCase);
        
        // 重新加载数据
        this.loadCaseStudies();
        this.updateStatistics();
        
        // 显示成功消息
        this.showAlert('casesAlert', 'Case study added successfully!', 'success');
        
        // 重置表单
        this.resetCasesForm();
    }

    // 获取案例研究表单数据
    getCasesFormData() {
        return {
            title: document.getElementById('caseTitle').value,
            category: document.getElementById('caseCategory').value,
            subtitle: document.getElementById('caseSubtitle').value,
            date: document.getElementById('caseDate').value,
            team: document.getElementById('caseTeam').value,
            content: document.getElementById('caseContent').value,
            tags: document.getElementById('caseTags').value.split(',').map(tag => tag.trim()).filter(tag => tag),
            images: ["../assets/images/gallery/11.jpg", "../assets/images/gallery/12.jpg", "../assets/images/gallery/13.jpg"],
            meta: [
                { label: "Project Type", value: "Research & Development" },
                { label: "Technology", value: "AI Optimization" },
                { label: "Start Date", value: new Date(document.getElementById('caseDate').value).toLocaleDateString() },
                { label: "Duration", value: "6 months" }
            ]
        };
    }

    // 验证案例研究表单
    validateCasesForm(data) {
        if (!data.title || !data.category || !data.subtitle || !data.date || !data.team) {
            this.showAlert('casesAlert', 'Please fill in all required fields.', 'danger');
            return false;
        }
        
        return true;
    }

    // 加载案例研究列表
    loadCaseStudies() {
        const container = document.getElementById('casesList');
        if (!container) return;

        const cases = CASES_DATA.getAllCases();
        let html = '';
        
        if (cases.length === 0) {
            html = '<p>No case studies found.</p>';
        } else {
            cases.forEach(caseStudy => {
                html += this.createCaseItem(caseStudy);
            });
        }
        
        container.innerHTML = html;
    }

    // 创建案例研究项
    createCaseItem(caseStudy) {
        return `
            <div class="content-item" data-id="${caseStudy.id}">
                <div class="content-title">${caseStudy.title}</div>
                <div class="content-meta">
                    <strong>Category:</strong> ${caseStudy.category} | 
                    <strong>Date:</strong> ${caseStudy.date} | 
                    <strong>Team:</strong> ${caseStudy.team}
                </div>
                <div class="content-actions">
                    <button class="btn-primary btn-sm" onclick="editCaseStudy(${caseStudy.id})">Edit</button>
                    <button class="btn-secondary btn-sm" onclick="deleteCaseStudy(${caseStudy.id})">Delete</button>
                </div>
            </div>
        `;
    }

    // ==================== STATISTICS ====================

    // 更新统计信息
    updateStatistics() {
        const container = document.getElementById('statsContent');
        if (!container) return;

        const researchCount = researchPapers.length;
        const eventsCount = EVENTS_DATA.getAllEvents().length;
        const casesCount = CASES_DATA.getAllCases().length;
        const totalContent = researchCount + eventsCount + casesCount;

        container.innerHTML = `
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">${totalContent}</div>
                    <div class="stat-label">Total Content Items</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${researchCount}</div>
                    <div class="stat-label">Research Papers</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${eventsCount}</div>
                    <div class="stat-label">Events</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${casesCount}</div>
                    <div class="stat-label">Case Studies</div>
                </div>
            </div>
        `;
    }

    // ==================== CONTACT SUBMISSIONS ====================
    loadContactSubmissions() {
        if (window.contactFormHandler) {
            const contacts = window.contactFormHandler.getAllContacts();
            this.renderContactSubmissions(contacts);
        }
    }

    renderContactSubmissions(contacts) {
        const container = document.getElementById('contactSubmissionsList');
        if (!container) return;

        if (contacts.length === 0) {
            container.innerHTML = '<p>No contact submissions found.</p>';
            return;
        }

        // Sort by submission date (newest first)
        const sortedContacts = contacts.sort((a, b) => 
            new Date(b.submittedAt) - new Date(a.submittedAt)
        );

        let html = '';
        sortedContacts.forEach(contact => {
            const date = new Date(contact.submittedAt).toLocaleDateString();
            const time = new Date(contact.submittedAt).toLocaleTimeString();
            
            html += `
                <div class="contact-submission-item" style="border: 1px solid #ddd; padding: 15px; margin-bottom: 15px; border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <div>
                            <strong>${contact.firstName} ${contact.lastName}</strong>
                            <br><small>${date} at ${time}</small>
                        </div>
                        <div>
                            <span style="background: #fc3329; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px;">${contact.subject}</span>
                            <span style="background: ${contact.status === 'new' ? '#ffc107' : contact.status === 'reviewed' ? '#17a2b8' : '#28a745'}; color: ${contact.status === 'new' ? '#333' : 'white'}; padding: 2px 8px; border-radius: 12px; font-size: 12px; margin-left: 5px;">${contact.status}</span>
                        </div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <strong>Email:</strong> ${contact.email}<br>
                        ${contact.phone ? `<strong>Phone:</strong> ${contact.email}<br>` : ''}
                        ${contact.organization ? `<strong>Organization:</strong> ${contact.organization}<br>` : ''}
                        ${contact.position ? `<strong>Position:</strong> ${contact.position}<br>` : ''}
                        ${contact.newsletter ? `<strong>Newsletter:</strong> Subscribed<br>` : ''}
                    </div>
                    <div style="background: #f8f9fa; padding: 10px; border-radius: 4px; margin-bottom: 10px;">
                        <strong>Message:</strong><br>
                        ${contact.message}
                    </div>
                    <div style="display: flex; gap: 10px;">
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
        });

        container.innerHTML = html;
    }

    // ==================== UTILITY FUNCTIONS ====================

    // 显示警告消息
    showAlert(containerId, message, type) {
        const alertContainer = document.getElementById(containerId);
        if (!alertContainer) return;

        alertContainer.innerHTML = `
            <div class="alert alert-${type}">
                ${message}
            </div>
        `;

        // 3秒后自动隐藏
        setTimeout(() => {
            alertContainer.innerHTML = '';
        }, 3000);
    }

    // 重置研究论文表单
    resetResearchForm() {
        document.getElementById('researchForm').reset();
    }

    // 重置事件表单
    resetEventsForm() {
        document.getElementById('eventsForm').reset();
    }

    // 重置案例研究表单
    resetCasesForm() {
        document.getElementById('casesForm').reset();
    }

    // 导出所有数据
    exportAllData() {
        const allData = {
            research: researchPapers,
            events: EVENTS_DATA.getAllEvents(),
            cases: CASES_DATA.getAllCases(),
            exportDate: new Date().toISOString()
        };

        const dataStr = JSON.stringify(allData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'aidac-content-data.json';
        link.click();
        
        URL.revokeObjectURL(url);
    }

    // 导入所有数据
    importAllData() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const importedData = JSON.parse(event.target.result);
                        
                        if (importedData.research) {
                            researchPapers.length = 0;
                            researchPapers.push(...importedData.research);
                        }
                        
                        if (importedData.events) {
                            EVENTS_DATA.events.length = 0;
                            EVENTS_DATA.events.push(...importedData.events);
                        }
                        
                        if (importedData.cases) {
                            CASES_DATA.cases.length = 0;
                            CASES_DATA.cases.push(...importedData.cases);
                        }
                        
                        this.loadAllContent();
                        this.updateStatistics();
                        this.showAlert('statsContent', 'Data imported successfully!', 'success');
                        
                    } catch (error) {
                        this.showAlert('statsContent', 'Error importing data: ' + error.message, 'danger');
                    }
                };
                reader.readAsText(file);
            }
        };
        
        input.click();
    }
}

// ==================== GLOBAL FUNCTIONS ====================

// Research Paper Functions
function editResearchPaper(id) {
    const paper = researchPapers.find(p => p.id === id);
    if (!paper) return;

    document.getElementById('researchTitle').value = paper.title;
    document.getElementById('researchAuthor').value = paper.author;
    document.getElementById('researchCategory').value = paper.category;
    document.getElementById('researchJournal').value = paper.journal;
    document.getElementById('researchYear').value = paper.year;
    document.getElementById('researchCitations').value = paper.citations;
    document.getElementById('researchImage').value = paper.image;
    document.getElementById('researchAbstract').value = paper.abstract;
    document.getElementById('researchTags').value = paper.tags.join(', ');
    document.getElementById('researchOfficialLink').value = paper.officialLink || '';

    // 更改按钮文本
    const submitBtn = document.querySelector('#researchForm button[type="submit"]');
    submitBtn.textContent = 'Update Research Paper';
    submitBtn.onclick = () => updateResearchPaper(id);
}

function updateResearchPaper(id) {
    const formData = unifiedAdmin.getResearchFormData();
    
    if (!unifiedAdmin.validateResearchForm(formData)) {
        return;
    }

    const index = researchPapers.findIndex(p => p.id === id);
    if (index !== -1) {
        researchPapers[index] = { ...researchPapers[index], ...formData };
        
        unifiedAdmin.loadResearchPapers();
        unifiedAdmin.updateStatistics();
        unifiedAdmin.showAlert('researchAlert', 'Research paper updated successfully!', 'success');
        unifiedAdmin.resetResearchForm();
        
        // 恢复按钮文本
        const submitBtn = document.querySelector('#researchForm button[type="submit"]');
        submitBtn.textContent = 'Add Research Paper';
        submitBtn.onclick = null;
    }
}

function deleteResearchPaper(id) {
    if (confirm('Are you sure you want to delete this research paper?')) {
        const index = researchPapers.findIndex(p => p.id === id);
        if (index !== -1) {
            researchPapers.splice(index, 1);
            
            unifiedAdmin.loadResearchPapers();
            unifiedAdmin.updateStatistics();
            unifiedAdmin.showAlert('researchAlert', 'Research paper deleted successfully!', 'success');
        }
    }
}

// Event Functions
function editEvent(id) {
    const event = EVENTS_DATA.getEventById(id);
    if (!event) return;

    document.getElementById('eventTitle').value = event.title;
    document.getElementById('eventDate').value = event.date;
    document.getElementById('eventLocation').value = event.location;
    document.getElementById('eventType').value = event.type;
    document.getElementById('eventAttendees').value = event.attendees;
    document.getElementById('eventImage').value = event.image;
    document.getElementById('eventDescription').value = event.description;
    document.getElementById('eventTags').value = event.tags.join(', ');

    // 更改按钮文本
    const submitBtn = document.querySelector('#eventsForm button[type="submit"]');
    submitBtn.textContent = 'Update Event';
    submitBtn.onclick = () => updateEvent(id);
}

function updateEvent(id) {
    const formData = unifiedAdmin.getEventsFormData();
    
    if (!unifiedAdmin.validateEventsForm(formData)) {
        return;
    }

    const updatedEvent = EVENTS_DATA.updateEvent(id, formData);
    if (updatedEvent) {
        unifiedAdmin.loadEvents();
        unifiedAdmin.updateStatistics();
        unifiedAdmin.showAlert('eventsAlert', 'Event updated successfully!', 'success');
        unifiedAdmin.resetEventsForm();
        
        // 恢复按钮文本
        const submitBtn = document.querySelector('#eventsForm button[type="submit"]');
        submitBtn.textContent = 'Add Event';
        submitBtn.onclick = null;
    }
}

function deleteEvent(id) {
    if (confirm('Are you sure you want to delete this event?')) {
        const deletedEvent = EVENTS_DATA.deleteEvent(id);
        if (deletedEvent) {
            unifiedAdmin.loadEvents();
            unifiedAdmin.updateStatistics();
            unifiedAdmin.showAlert('eventsAlert', 'Event deleted successfully!', 'success');
        }
    }
}

// Case Study Functions
function editCaseStudy(id) {
    const caseStudy = CASES_DATA.getCaseById(id);
    if (!caseStudy) return;

    document.getElementById('caseTitle').value = caseStudy.title;
    document.getElementById('caseCategory').value = caseStudy.category;
    document.getElementById('caseSubtitle').value = caseStudy.subtitle;
    document.getElementById('caseDate').value = caseStudy.date;
    document.getElementById('caseTeam').value = caseStudy.team;
    document.getElementById('caseContent').value = caseStudy.content;
    document.getElementById('caseTags').value = caseStudy.tags.join(', ');

    // 更改按钮文本
    const submitBtn = document.querySelector('#casesForm button[type="submit"]');
    submitBtn.textContent = 'Update Case Study';
    submitBtn.onclick = () => updateCaseStudy(id);
}

function updateCaseStudy(id) {
    const formData = unifiedAdmin.getCasesFormData();
    
    if (!unifiedAdmin.validateCasesForm(formData)) {
        return;
    }

    const updatedCase = CASES_DATA.updateCase(id, formData);
    if (updatedCase) {
        unifiedAdmin.loadCaseStudies();
        unifiedAdmin.updateStatistics();
        unifiedAdmin.showAlert('casesAlert', 'Case study updated successfully!', 'success');
        unifiedAdmin.resetCasesForm();
        
        // 恢复按钮文本
        const submitBtn = document.querySelector('#casesForm button[type="submit"]');
        submitBtn.textContent = 'Add Case Study';
        submitBtn.onclick = null;
    }
}

function deleteCaseStudy(id) {
    if (confirm('Are you sure you want to delete this case study?')) {
        const deletedCase = CASES_DATA.deleteCase(id);
        if (deletedCase) {
            unifiedAdmin.loadCaseStudies();
            unifiedAdmin.updateStatistics();
            unifiedAdmin.showAlert('casesAlert', 'Case study deleted successfully!', 'success');
        }
    }
}

// Global Functions
function resetResearchForm() {
    unifiedAdmin.resetResearchForm();
}

function resetEventsForm() {
    unifiedAdmin.resetEventsForm();
}

function resetCasesForm() {
    unifiedAdmin.resetCasesForm();
}

function exportAllData() {
    unifiedAdmin.exportAllData();
}

function importAllData() {
    unifiedAdmin.importAllData();
}

// Contact Management Functions
function applyContactFilters() {
    if (window.contactFormHandler) {
        const statusFilter = document.getElementById('contactStatusFilter').value;
        const subjectFilter = document.getElementById('contactSubjectFilter').value;
        const searchFilter = document.getElementById('contactSearchFilter').value;
        
        let contacts = window.contactFormHandler.getAllContacts();
        
        // Apply filters
        if (statusFilter) {
            contacts = contacts.filter(contact => contact.status === statusFilter);
        }
        
        if (subjectFilter) {
            contacts = contacts.filter(contact => contact.subject === subjectFilter);
        }
        
        if (searchFilter) {
            const searchTerm = searchFilter.toLowerCase();
            contacts = contacts.filter(contact => {
                const searchableText = `
                    ${contact.firstName} ${contact.lastName} 
                    ${contact.email} 
                    ${contact.organization || ''} 
                    ${contact.position || ''} 
                    ${contact.message}
                `.toLowerCase();
                return searchableText.includes(searchTerm);
            });
        }
        
        if (unifiedAdmin) {
            unifiedAdmin.renderContactSubmissions(contacts);
        }
    }
}

function updateContactStatus(id, status) {
    if (window.contactFormHandler) {
        const success = window.contactFormHandler.updateContactStatus(id, status);
        if (success && unifiedAdmin) {
            unifiedAdmin.loadContactSubmissions();
            unifiedAdmin.showAlert('contactSubmissionsList', `Contact status updated to ${status}`, 'success');
        }
    }
}

function deleteContact(id) {
    if (confirm('Are you sure you want to delete this contact submission?')) {
        if (window.contactFormHandler) {
            const success = window.contactFormHandler.deleteContact(id);
            if (success && unifiedAdmin) {
                unifiedAdmin.loadContactSubmissions();
                unifiedAdmin.showAlert('contactSubmissionsList', 'Contact submission deleted', 'success');
            }
        }
    }
}

// 初始化统一管理系统
let unifiedAdmin;
document.addEventListener('DOMContentLoaded', function() {
    unifiedAdmin = new UnifiedAdmin();
}); 