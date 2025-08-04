// Contact Form Handler
class ContactFormHandler {
    constructor() {
        this.contacts = this.loadContacts();
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit();
            });
        }
    }

    handleFormSubmit() {
        const formData = this.getFormData();
        
        if (!this.validateForm(formData)) {
            return;
        }

        // 添加新联系信息
        const newContact = {
            id: this.generateId(),
            ...formData,
            submittedAt: new Date().toISOString(),
            status: 'new'
        };

        this.contacts.push(newContact);
        this.saveContacts();
        
        // 显示成功消息
        this.showMessage('Thank you for your message! We will get back to you soon.', 'success');
        
        // 重置表单
        this.resetForm();
    }

    getFormData() {
        return {
            firstName: document.getElementById('firstName').value.trim(),
            lastName: document.getElementById('lastName').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            organization: document.getElementById('organization').value.trim(),
            position: document.getElementById('position').value.trim(),
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value.trim(),
            newsletter: document.getElementById('newsletter').checked
        };
    }

    validateForm(data) {
        // 检查必填字段
        if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
            this.showMessage('Please fill in all required fields.', 'danger');
            return false;
        }

        // 验证邮箱格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            this.showMessage('Please enter a valid email address.', 'danger');
            return false;
        }

        // 验证消息长度
        if (data.message.length < 10) {
            this.showMessage('Please provide a more detailed message (at least 10 characters).', 'danger');
            return false;
        }

        return true;
    }

    showMessage(message, type) {
        const messageDiv = document.getElementById('formMessage');
        if (messageDiv) {
            messageDiv.className = `alert alert-${type}`;
            messageDiv.textContent = message;
            messageDiv.style.display = 'block';
            
            // 5秒后自动隐藏
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }
    }

    resetForm() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.reset();
        }
    }

    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    loadContacts() {
        const stored = localStorage.getItem('aidac_contacts');
        return stored ? JSON.parse(stored) : [];
    }

    saveContacts() {
        localStorage.setItem('aidac_contacts', JSON.stringify(this.contacts));
    }

    // 获取所有联系信息
    getAllContacts() {
        return this.contacts;
    }

    // 按状态筛选联系信息
    getContactsByStatus(status) {
        return this.contacts.filter(contact => contact.status === status);
    }

    // 按主题筛选联系信息
    getContactsBySubject(subject) {
        return this.contacts.filter(contact => contact.subject === subject);
    }

    // 更新联系信息状态
    updateContactStatus(id, status) {
        const contact = this.contacts.find(c => c.id === id);
        if (contact) {
            contact.status = status;
            contact.updatedAt = new Date().toISOString();
            this.saveContacts();
            return true;
        }
        return false;
    }

    // 删除联系信息
    deleteContact(id) {
        const index = this.contacts.findIndex(c => c.id === id);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            this.saveContacts();
            return true;
        }
        return false;
    }

    // 导出联系信息
    exportContacts() {
        const dataStr = JSON.stringify(this.contacts, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `aidac-contacts-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
    }

    // 获取统计信息
    getStats() {
        const total = this.contacts.length;
        const byStatus = {};
        const bySubject = {};
        
        this.contacts.forEach(contact => {
            // 按状态统计
            byStatus[contact.status] = (byStatus[contact.status] || 0) + 1;
            
            // 按主题统计
            bySubject[contact.subject] = (bySubject[contact.subject] || 0) + 1;
        });

        return {
            total,
            byStatus,
            bySubject,
            newsletterSubscribers: this.contacts.filter(c => c.newsletter).length
        };
    }
}

// 全局函数
function exportContactData() {
    if (window.contactFormHandler) {
        window.contactFormHandler.exportContacts();
    }
}

function getContactStats() {
    if (window.contactFormHandler) {
        return window.contactFormHandler.getStats();
    }
    return null;
}

// 初始化联系表单处理器
document.addEventListener('DOMContentLoaded', function() {
    window.contactFormHandler = new ContactFormHandler();
}); 