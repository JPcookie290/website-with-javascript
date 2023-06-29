
import { createTags, createHtml, createMoreTags, expandHtml, addOneIdAndClass, addDifferentIdAndClass} from './modules/functions';

const htmlTags = createTags(['h1', 'h2', 'ul']);
const htmlListTags = createMoreTags('li', 3)

console.log(1, htmlTags);
//addOneIdAndClass(htmlTags, 1, 'try', '-');
addDifferentIdAndClass(htmlTags, ['class1', 'class2', '-'], ['-', 'id2', 'id3'])
createHtml('header', htmlTags, 'h2');
expandHtml('ul', htmlListTags)