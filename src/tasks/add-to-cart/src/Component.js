export default class Component {
    #isMounted = false;

    mount(el) {
        if (!this.#isMounted) {
            const container = el || document.body;
            container.appendChild(this.render());
        }
    }
}
