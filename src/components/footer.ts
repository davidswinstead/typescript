export class Footer {
  private element: HTMLElement;

  constructor() {
    this.element = this.createFooter();
  }

  private createFooter(): HTMLElement {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const currentYear = new Date().getFullYear();
    const text = document.createElement('p');
    text.textContent = `© ${currentYear} My TypeScript Website. All rights reserved.`;

    const links = document.createElement('div');
    links.className = 'footer-links';
    
    const socialLinks = ['Twitter', 'GitHub', 'LinkedIn'];
    socialLinks.forEach(social => {
      const link = document.createElement('a');
      link.href = '#';
      link.textContent = social;
      links.appendChild(link);
    });

    footer.appendChild(text);
    footer.appendChild(links);
    return footer;
  }

  public render(container: HTMLElement): void {
    container.appendChild(this.element);
  }
}
