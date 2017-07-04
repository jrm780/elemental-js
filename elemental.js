export default {

    /**
     * Search the document for an element with a particular CSS selector
     * @param {string} selector - the CSS selector to match against
     * @return {HTMLElement} the first element that matches
     */
    el: function (selector) {
        return document.querySelector(selector)
    },

    /**
     * Create a new element
     * @param {string} tag - the type/tag of the element to create
     * @param {Object} attributes - {"key": "value", ...} attributes the
     *          element has after creation
     * @param {HTMLElement[]|string[]} children - elements to append to the
     *          new element as children. Strings are automatically converted
     *          to Text nodes
     * @return {HTMLElement} the newly constructed element
     */
    h: function (tag, attributes, children) {
        const el = document.createElement(tag)
        for (const prop in attributes) {
            el.setAttribute(prop, attributes[prop])
        }
        append(el, children)
        return el
    },

    /**
     * Append elements to another element as children
     * @param {HTMLElement} el - the parent element
     * @param {HTMLElement[]|string[]} children - elements to append to el
     *          as children. Strings are automatically converted
     *          to Text nodes
     */
    append: function (el, children) {
        append(el, children)
    },

    /**
     * Search the document for an element with a particular CSS selector and 
     * delete all of its child elements
     * @param {string} selector - the CSS selector to match against
     * @return the first element that matches
     */
    clear: function (selector) {
        const el = this.el(selector)
        return clearElement(el)
    },

    /**
     * Delete all of the supplied element's child elements
     * @param {HTMLElement} el - the parent element
     * @return el
     */
    clearElement: function (el) {
        return clearElement(el)
    },
}

function append(el, children) {
    for (var i = 0; i < children.length; ++i) {
        if (typeof children[i] === 'string' || typeof children[i] === 'number') {
            el.appendChild(document.createTextNode(children[i]))
        } else {
            el.appendChild(children[i])
        }
    }
}

function clearElement(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
    return el
}
