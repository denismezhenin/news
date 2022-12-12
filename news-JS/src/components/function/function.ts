function tsQuerySelector(parent: Element | Document, selector: string): Element {
    const element = parent.querySelector(selector);
    if (!element) {
        throw new Error('No such element');
    }
    return element;
}

export default tsQuerySelector;
