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

    elements.css = function (clazz) {
        for (var index = 0; index < elements.length; index++) {
            let el = elements[index];
            if (typeof clazz == 'string') {
                return getComputedStyle(el)[clazz];
            } else {
                Object.keys(clazz).forEach(function (name) {
                    el.style[name] = clazz[name];
                });
            }
        }
    };

    elements.data = function (obj, val) {
        for (var index = 0; index < elements.length; index++) {
            var el = elements[index];
            if (typeof obj == 'undefined') {
                return el.dataset;
            } else {
                if (typeof val == 'undefined') {
                    if (typeof obj == 'string') {
                        return el.dataset[obj];
                    } else {
                        Object.keys(obj).forEach(function (name) {
                            el.dataset[name] = obj[name];
                        });
                    }
                } else {
                    el.dataset[obj] = val;
                }
            }
        }
    };

    elements.on = function (eventName, second, third) {
        for (var index = 0; index < elements.length; index++) {
            let el = elements[index];
            const callback = !!third ? third : second;

            el.addEventListener(eventName, function (event) {
                var target = event.target;

                if (!third || el.matches(second)) {
                    callback.apply(this, arguments)
                }
                if (third) {
                    var children = el.querySelectorAll(second);
                    for (var i = 0; i < children.length; i++) {
                        if (children[i].isEqualNode(target)) {
                            callback.apply(this, arguments)
                        }
                    }
                }
            });
        }
        return elements;
    };

    elements.one = function (eventName, callback) {
        for (var index = 0; index < elements.length; index++) {
            var el = elements[index];
            let wasCalled = false;
            el.addEventListener(eventName, function () {
                if (!wasCalled) {
                    wasCalled = true;
                    callback();
                }
            });
        }
        return elements;
    };

    elements.each = function (callback) {
        for (var index = 0; index < elements.length; index++) {
            var el = elements[index];
            var result = callback.call(el, index, el);
            if (result == false) {
                break;
            }
        }
        return "";
    };


    return elements;
};

