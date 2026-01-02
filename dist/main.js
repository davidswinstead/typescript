import { Navigation } from './components/nav.js';
import { Footer } from './components/footer.js';
class HomePage {
    constructor() {
        this.nav = new Navigation();
        this.footer = new Footer();
        this.init();
    }
    init() {
        // Render navigation
        const navContainer = document.getElementById('nav-container');
        if (navContainer) {
            this.nav.render(navContainer);
        }
        // Add page content
        this.renderContent();
        // Render footer
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            this.footer.render(footerContainer);
        }
    }
    renderContent() {
        const content = document.getElementById('content');
        if (content) {
            const title = document.createElement('h1');
            title.textContent = 'Welcome to My TypeScript Website';
            const description = document.createElement('p');
            description.textContent = 'This is a simple website built with TypeScript, demonstrating shared components and multiple pages.';
            const features = document.createElement('div');
            features.className = 'features';
            const featureList = [
                { title: 'TypeScript Powered', desc: 'Built entirely with TypeScript for type safety' },
                { title: 'Component-Based', desc: 'Reusable navigation and footer components' },
                { title: 'No Framework', desc: 'Pure TypeScript without heavy frameworks' }
            ];
            featureList.forEach(feature => {
                const card = document.createElement('div');
                card.className = 'feature-card';
                const cardTitle = document.createElement('h3');
                cardTitle.textContent = feature.title;
                const cardDesc = document.createElement('p');
                cardDesc.textContent = feature.desc;
                card.appendChild(cardTitle);
                card.appendChild(cardDesc);
                features.appendChild(card);
            });
            content.appendChild(title);
            content.appendChild(description);
            content.appendChild(features);
        }
    }
}
// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HomePage();
});
