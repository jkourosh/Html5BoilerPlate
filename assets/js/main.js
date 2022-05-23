const SelectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`${element} not found`);
    
}

