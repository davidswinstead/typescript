export class Navigation {
    constructor() {
        this.element = this.createNav();
    }
    createNav() {
        const nav = document.createElement('nav');
        nav.className = 'navbar';
        const navList = document.createElement('ul');
        navList.className = 'nav-list';
        const pages = [
            { name: 'Home', url: 'index.html' },
            { name: 'About', url: 'about.html' },
            { name: 'Contact', url: 'contact.html' }
        ];
        pages.forEach(page => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = page.url;
            a.textContent = page.name;
            // Highlight current page
            if (window.location.pathname.endsWith(page.url) ||
                (window.location.pathname.endsWith('/') && page.url === 'index.html')) {
                a.className = 'active';
            }
            li.appendChild(a);
            navList.appendChild(li);
        });
        nav.appendChild(navList);
        return nav;
    }
    render(container) {
        container.appendChild(this.element);
    }
}
