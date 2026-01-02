import { Navigation } from './components/nav.js';
import { Footer } from './components/footer.js';
class AboutPage {
    constructor() {
        this.nav = new Navigation();
        this.footer = new Footer();
        this.init();
    }
    init() {
        const navContainer = document.getElementById('nav-container');
        if (navContainer) {
            this.nav.render(navContainer);
        }
        this.renderContent();
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            this.footer.render(footerContainer);
        }
    }
    renderContent() {
        const content = document.getElementById('content');
        if (content) {
            const title = document.createElement('h1');
            title.textContent = 'About This Project';
            const intro = document.createElement('p');
            intro.textContent = 'This website demonstrates how to use TypeScript in the browser without Node.js.';
            const section = document.createElement('div');
            section.className = 'about-section';
            const subtitle = document.createElement('h2');
            subtitle.textContent = 'What You\'ll Learn';
            const list = document.createElement('ul');
            const topics = [
                'Creating TypeScript classes and components',
                'Type safety in browser-based applications',
                'DOM manipulation with TypeScript',
                'Sharing components across multiple pages',
                'Compiling TypeScript to JavaScript'
            ];
            topics.forEach(topic => {
                const li = document.createElement('li');
                li.textContent = topic;
                list.appendChild(li);
            });
            section.appendChild(subtitle);
            section.appendChild(list);
            content.appendChild(title);
            content.appendChild(intro);
            content.appendChild(section);
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new AboutPage();
});
