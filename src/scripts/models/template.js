import {Init} from '../init.js';

let init = new Init();
let styles = init.Styles();

let style_title = styles.style_title;
let style_info = styles.style_info;
let style_subtitle = styles.style_subtitle;



console.groupCollapsed('%cClick To Open',style_title);
    console.info('%cSubtitle',style_subtitle);

console.groupEnd();
