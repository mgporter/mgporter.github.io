import createEl from './createElement';

export default function navContent() {

    const container = createEl('div', null, null, 'nav-content');

    const p1 = createEl('p', "Welcome to my project showcase!");
    const p2 = createEl('p', "I currently have projects uploaded in Javascript (Vanilla, React) and Java.");
    container.append(p1, p2);

    return container;
}