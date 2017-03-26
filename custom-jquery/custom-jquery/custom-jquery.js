window.$ = function (selector) {
    var elements = document.querySelectorAll(selector);

    elements.hide = function () {
        for (var index = 0; index < elements.length; index++) {
            var el = elements[index];
            el.style.display = 'none';
        }
        return elements;
    };

    elements.addClass = function (className) {
        for (var index = 0; index < elements.length; index++) {
            var el = elements[index];
            var cName = typeof className == 'function' ? className(Number(index), el.className) : className;
            if (cName) {
                cName.split(' ').forEach(function (name) {
                    if (el.classList) {
                        el.classList.add(name);
                    } else {
                        el.className += ' ' + name;
                    }
                });
            }
        }
        return elements;
    };

    elements.append = function (child) {
        for (var index = 0; index < elements.length; index++) {
            var el = elements[index];
            if (typeof child == 'string') {
                el.innerHTML += child;
            } else {
                el.appendChild(child.cloneNode(true));
            }
        }
        return elements;
    };

    elements.html = function (val) {
        for (var index = 0; index < elements.length; index++) {
            var el = elements[index];
            if (typeof val != 'undefined') {
                el.innerHTML = val;
            } else {
                return el.innerHTML;
            }
        }
    };

    elements.attr = function (attribute, val) {
        for (var index = 0; index < elements.length; index++) {
            var el = elements[index];
            if (typeof val != 'undefined') {
                el.setAttribute(attribute, val);
            } else {
                return el.getAttribute(attribute);
            }
        }
    };

    elements.children = function (selector) {
        var children = [];
        for (var index = 0; index < elements.length; index++) {
            var el = elements[index];
            var elChildren = el.children;
            for (var i = 0; i < elChildren.length; i++) {
                if (!selector || elChildren[i].matches(selector)) {
                    children.push(elChildren[i]);
                }
            }
        }
        return children
    };


    return elements;
};
