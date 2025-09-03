// Simple Cases Renderer with Working Pagination
class CasesRenderer {
    constructor() {
        this.currentPage = 1;
        this.casesPerPage = 6;
        this.init();
    }

    init() {
        this.renderCases();
        this.setupEventListeners();
    }

    renderCases() {
        const allCases = CASES_DATA.getAllCases();
        console.log('Total cases:', allCases.length);
        
        // 分页处理
        const startIndex = (this.currentPage - 1) * this.casesPerPage;
        const endIndex = startIndex + this.casesPerPage;
        const casesForCurrentPage = allCases.slice(startIndex, endIndex);
        
        console.log('Current page:', this.currentPage, 'Cases on page:', casesForCurrentPage.length);

        // 渲染案例内容
        const container = document.querySelector('.col-lg-8');
        if (!container) return;

        // 找到或创建案例容器
        let casesContainer = container.querySelector('.cases-container');
        if (!casesContainer) {
            casesContainer = document.createElement('div');
            casesContainer.className = 'cases-container';
            container.insertBefore(casesContainer, container.querySelector('.labPagination'));
        }

        // 清空并重新渲染
        casesContainer.innerHTML = '';
        casesForCurrentPage.forEach(caseStudy => {
            const caseHTML = this.createCaseCard(caseStudy);
            casesContainer.innerHTML += caseHTML;
        });

        // 更新分页
        this.updatePagination(allCases.length);
    }

    createCaseCard(caseStudy) {
        const dateInfo = caseStudy.date ? CASES_DATA.formatDate(caseStudy.date) : null;
        const team = caseStudy.team || caseStudy.subtitle || 'AIDAC Team';
        const year = caseStudy.date ? caseStudy.date.split('-')[0] : '2024';
        
        return `
            <div class="caseCard" data-case-id="${caseStudy.id}">
                <div class="caseThumb">
                    <img src="${caseStudy.images[0]}" alt="${caseStudy.title}"/>
                </div>
                <div class="caseContent">
                    <div class="caseMeta">
                        <span class="caseTeam"><i class="fa fa-user"></i>${team}</span>
                        <span class="caseYear"><i class="fa fa-calendar"></i>${year}</span>
                    </div>
                    <h3 class="caseTitle"><a href="case-single.html?id=${caseStudy.id}">${caseStudy.title}</a></h3>
                    <p class="caseSubtitle">${caseStudy.subtitle}</p>
                    <div class="caseFooter">
                        <a href="case-single.html?id=${caseStudy.id}" class="readMoreBtn">Read More<i class="fa fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        `;
    }

    updatePagination(totalCases) {
        const totalPages = Math.ceil(totalCases / this.casesPerPage);
        const paginationContainer = document.querySelector('.labPagination');
        
        console.log('Updating pagination:', {
            totalCases: totalCases,
            totalPages: totalPages,
            currentPage: this.currentPage,
            container: paginationContainer
        });
        
        if (!paginationContainer) {
            console.error('Pagination container not found!');
            return;
        }

        let html = '';
        
        // 上一页
        if (this.currentPage > 1) {
            html += `<a href="#" class="prv" data-page="${this.currentPage - 1}"><i class="fa fa-angle-left"></i></a>`;
        }

        // 页码
        for (let i = 1; i <= totalPages; i++) {
            if (i === this.currentPage) {
                html += `<span class="current">${i}</span>`;
            } else {
                html += `<a href="#" data-page="${i}">${i}</a>`;
            }
        }

        // 下一页
        if (this.currentPage < totalPages) {
            html += `<a href="#" class="nxt" data-page="${this.currentPage + 1}"><i class="fa fa-angle-right"></i></a>`;
        }

        paginationContainer.innerHTML = html;
        console.log('Pagination HTML:', html);
    }

    setupEventListeners() {
        // 分页点击事件
        document.addEventListener('click', (e) => {
            if (e.target.closest('.labPagination a')) {
                e.preventDefault();
                const page = parseInt(e.target.closest('a').dataset.page);
                console.log('Pagination clicked! Page:', page);
                this.goToPage(page);
            }
        });
    }

    goToPage(page) {
        console.log('Going to page:', page);
        this.currentPage = page;
        this.renderCases();
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing CasesRenderer...');
    new CasesRenderer();
});
