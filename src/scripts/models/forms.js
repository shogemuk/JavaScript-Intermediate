import {Init} from '../init.js';

let init = new Init();
let styles = init.Styles();

let style_title = styles.style_title;
let style_info = styles.style_info;
let style_subtitle = styles.style_subtitle;



console.groupCollapsed('%cforms',style_title);
    console.info('%cSubtitle',style_subtitle);
    let form = document.getElementById('PageForm1');
    form.addEventListener('submit',event =>{
        let input1 = form.elements['input1'];
        let input2 = form.elements['input2'];
        let input3 = form.elements['input3'];
        console.log(input1.value);
        event.preventDefault();
    });
console.groupEnd();
