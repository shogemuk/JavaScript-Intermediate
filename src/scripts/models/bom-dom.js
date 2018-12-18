// https://developer.mozilla.org/en-US/docs/Web/API/Window
// https://developer.mozilla.org/en-US/docs/Web/API/console
// https://developer.mozilla.org/en-US/docs/Web/API/Location
// https://developer.mozilla.org/en-US/docs/Web/API/Document

import {Init} from '../init.js';
let init = new Init();
let styles = init.Styles();

let style_title = styles.style_title;
let style_subtitle = styles.style_subtitle;
let style_info = styles.style_info;

console.group('%cNOTABLE WINDOW PROPERTIES', style_title);
    console.groupCollapsed('Click to open');

    console.info('%cinner width and outer width',style_subtitle);
    console.log(window.innerWidth);
    console.log(window.outerWidth);

    console.info('%cinner height and outer height',style_subtitle);
    console.log(window.innerHeight);
    console.log(window.outerHeight);

    console.info('%coffsets',style_subtitle);
    console.log(window.pageXOffset);
    console.log(window.pageYOffset);

    console.info('%cwindow location',style_subtitle);
    console.log(window.location);
    console.log(window.location.href);
    console.log(window.location.pathname);

    console.info('%cconsole',style_subtitle);
    // console.time
    console.time('Jides Timer');
    // console.timeLog('JideTimer');
    console.timeEnd('Jides Timer');
    // console.trace
    function foo() {
        function bar() {
            console.trace();
        }
        bar();
    }  
    foo();

    console.dir(foo);
    console.groupEnd();
console.groupEnd();



console.group('%cNOTABLE WINDOW METHODS',style_title);
    console.groupCollapsed('Click to open');
    console.log(' alert();\n','back();\n','confirm();\n');
    console.groupEnd();
console.groupEnd();




console.group('%cTimers',style_title);
console.groupCollapsed('Click to open (comment clears to see in action)');
    let timeout = setTimeout(function(){
        console.log('This displays after 5 seconds');
    },5000);

    let interval = setInterval(function(){
        console.log('This displays every 2 seconds');
    },2000);
    // clear our timeout
    clearTimeout(timeout);
    // clear our interval
    clearInterval(interval);
    console.groupEnd();
console.groupEnd();



console.group('%cLocation',style_title);
    console.groupCollapsed('Click to open');
        let myLocation = window.location;
        console.log(myLocation);
        console.log(myLocation.href);
        console.log(myLocation.hostname);
        console.log(myLocation.port);
        console.log(myLocation.pathname);
        console.log(myLocation.search); //add get variables to see result
        console.log('%c ️ℹ️ Uncomment line 91 to view location.assign',style_info);
        // window.location.assign('http://jideshoge.rf.gd/?i=2');
        console.log('%c ℹ️ Uncomment line 93 to view location.reload',style_info);
        // window.location.reload();
    console.groupEnd();
console.groupEnd();




console.group('%cNOTABLE DOM METHODS',style_title);
    console.groupCollapsed('Click to open');
        let title_id = document.getElementById('PageParagraph1');
        console.log(title_id);
        console.log(document.getElementsByClassName('page-title'));
        console.log(document.getElementsByTagName('h2'));

        /* CREATE ELEMENT EXAMPLE */
        let newDiv = document.createElement("div"); 
        // and give it some content 
        let newContent = document.createTextNode("Hi there and greetings!"); 
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
        let currentDiv = document.getElementById('PageParagraph1');
        document.body.insertBefore(newDiv,currentDiv);
        /*END CREATE ELEMENT EXAMPLE */

        let blank = document.getElementById('BlankCanvas');
        blank.textContent = 'This is a text Content being modified by js';
        blank.setAttribute('data-blank','data blank value');
        blank.classList.add('newClassName');
        blank.style.color = '#FF4E50';
        console.log(blank);

    console.groupEnd();
console.groupEnd();




console.group('%cNOTABLE DOM PROPERTIES',style_title);
    console.groupCollapsed('Click to open');
        console.log(document.body);
        console.log(document.forms);
        console.log(document.links);
    console.groupEnd();
console.groupEnd();




console.group('%cNOTABLE DOM EVENTS',style_title);
    console.groupCollapsed('Click to open');
        console.log('onClick();');
        console.log('onLoad();');
        console.log('onkeypress();');
    console.groupEnd();
console.groupEnd();