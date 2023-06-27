function createTags(htmlTags) {
    let tags = [];
    for(let item of htmlTags) {
        tags.push(document.createElement(item))
    }
    return tags
}

function expandHtml(parent, tags) {
    const p = document.createElement(parent)
    for(let item of tags){
        p.appendChild(item);
    }
    return p
}

export {createTags, expandHtml};