// https://developer.mozilla.org/en-US/docs/Glossary/XHR_(XMLHttpRequest)

import {Init} from '../init.js';

let init = new Init();
let styles = init.Styles();

let style_title = styles.style_title;
let style_info = styles.style_info;
let style_subtitle = styles.style_subtitle;


console.group('%cXHR - XMLHTTPRequest',style_title);
    console.groupCollapsed('Click To Ooen');
        console.info('%cSubtitle',style_subtitle);

    console.groupEnd();
console.groupEnd();