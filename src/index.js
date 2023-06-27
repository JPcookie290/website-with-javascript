
import { createTags, expandHtml} from './modules/functions';

//console.log(createTags(['div', 'h1', 'h2', 'p']));

const htmlTags = createTags(['h1', 'h2', 'button']);
const test = expandHtml('header', htmlTags);


console.log(test, document.body);
document.body.appendChild(test);