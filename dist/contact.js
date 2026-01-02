import { Navigation } from './components/nav.js';
import { Footer } from './components/footer.js';
class ContactPage {
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
            title.textContent = 'Contact Us';
            const form = this.createContactForm();
            content.appendChild(title);
            content.appendChild(form);
        }
    }
    createContactForm() {
        const form = document.createElement('form');
        form.className = 'contact-form';
        const fields = [
            { label: 'Name', type: 'text', id: 'name' },
            { label: 'Email', type: 'email', id: 'email' },
            { label: 'Message', type: 'textarea', id: 'message' }
        ];
        fields.forEach(field => {
            const group = document.createElement('div');
            group.className = 'form-group';
            const label = document.createElement('label');
            label.htmlFor = field.id;
            label.textContent = field.label;
            let input;
            if (field.type === 'textarea') {
                input = document.createElement('textarea');
                input.rows = 5;
            }
            else {
                input = document.createElement('input');
                input.type = field.type;
            }
            input.id = field.id;
            input.name = field.id;
            input.required = true;
            group.appendChild(label);
            group.appendChild(input);
            form.appendChild(group);
        });
        const button = document.createElement('button');
        button.type = 'submit';
        button.textContent = 'Send Message';
        form.appendChild(button);
        form.addEventListener('submit', (e) => this.handleSubmit(e));
        return form;
    }
    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = {
            name: form.elements.namedItem('name').value,
            email: form.elements.namedItem('email').value,
            message: form.elements.namedItem('message').value
        };
        console.log('Form submitted:', formData);
        alert(`Thank you, ${formData.name}! Your message has been received.`);
        form.reset();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new ContactPage();
});
