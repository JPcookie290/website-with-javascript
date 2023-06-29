function createTags(htmlTags) {
    let tags = [];
    for (let item of htmlTags) {
        tags.push(document.createElement(item))
    }
    return tags
}

function createMoreTags(type, num) {
    let tags = [];
    for (let index = 0; index < num; index++) {
        tags.push(document.createElement(type))
    }
    return tags
}

function createHtml(parent, tags) {
    const p = document.createElement(parent)
    for (let item of tags) {
        p.appendChild(item);
    }

    document.body.appendChild(p)
}

function expandHtml(parent, tags) {
    tags.forEach(tag => {
        document.querySelector(parent).appendChild(tag);
    });
}

function addDifferentIdAndClass(items, nameClassArr, nameIdArr) {

    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        const nameClass = nameClassArr[index];
        const nameId = nameIdArr[index];
        element.classList.add(nameClass);
        element.setAttribute("id", nameId);
    }
    console.log(items);
}

function addOneIdAndClass(items, element, nameClass, nameId) {
    items[element].classList.add(nameClass);
    items[element].setAttribute("id", nameId);
}


export { createTags, createMoreTags, createHtml, expandHtml, addOneIdAndClass, addDifferentIdAndClass};