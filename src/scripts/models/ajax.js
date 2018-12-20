// https://developer.mozilla.org/en-US/docs/Glossary/XHR_(XMLHttpRequest)
// https://www.mockapi.io/
import {Init} from '../init.js';
import $ from 'jquery';

let init = new Init();
let styles = init.Styles();

let style_title = styles.style_title;
let style_info = styles.style_info;
let style_subtitle = styles.style_subtitle;


console.groupCollapsed('%cXHTTP REQUEST',style_title);
    console.group('%cSimple request',style_subtitle);
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                console.dir(this.responseText);
            }
        };    
        xhttp.open("GET","https://api.github.com/users/shogemuk",false);
        xhttp.send();
    console.groupEnd();
        
    console.group('%cSimple GET request with JQuery with promise',style_subtitle);
        let promise = $.get("https://api.github.com/users/shogemuk");
        promise.then(
            data => console.log('success get:',data),
            error => console.log('error get:',error)
        );
    console.groupEnd();

    console.group('%cSimple POST request with JQuery with promise',style_subtitle);
            let jdata = {
                name:'MJS',
                avatar:'mjs.jpg'
            };

            let postPromise = $.post('http://5b32a4fd82407e001413f1df.mockapi.io/api/v1/users',jdata);
            postPromise.then(
                data => console.log('success post:',data),
                error => console.log('error post:',error)
            );
    console.groupEnd();
    
console.groupEnd();