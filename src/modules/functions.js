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

function createHtml(parent, tags, nameClass, nameId) {
    const p = document.createElement(parent)
    if (nameClass[0] != '-') {
        p.classList.add(nameClass[0]);
    }
    if (nameId[0] != '-') {
        p.setAttribute("id", nameId[0]);
    }
    for (let index = 0; index < tags.length; index++) {
        let item = tags[index]
        if (nameClass[index+1] != '-') {
            item.classList.add(nameClass[index+1]);
        }
        if (nameId[index+1] != '-') {
            item.setAttribute("id", nameId[index+1]);
        }
        p.appendChild(item);
    }

    document.body.appendChild(p)
}

function expandHtml(parent, tags, nameClass, nameId) {
    console.log(nameClass, nameId);
    for (let index = 0; index < tags.length; index++) {
        const item = tags[index];
        console.log(tags[index],nameClass[index],nameId[index]);
        if (nameClass[index] != '-') {
            item.classList.add(nameClass[index]);
        }
        if (nameId[index] != '-') {
            item.setAttribute("id", nameId[index]);
        }
        document.querySelector(parent).appendChild(item)
    }
}

function addText(tags, texts){
    for (let index = 0; index < tags.length; index++) {
        let item = tags[index];
        let content = texts[index]
        item.textContent = content;
    }
}

function addPic(parent, picture) {
    let myPic = new Image();
    myPic.src = picture;
    document.querySelector(parent).appendChild(myPic);
}


export { createTags, createMoreTags, createHtml, expandHtml, addText, addPic};