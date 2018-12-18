// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

import {Init} from '../init.js';

let init = new Init();
let styles = init.Styles();

let style_title = styles.style_title;
let style_info = styles.style_info;
let style_subtitle = styles.style_subtitle;

console.groupCollapsed('%cPromise',style_title);
    console.info('%cSimple Example',style_subtitle);
        let promise = new Promise(
            function(resolve,reject){
                // setTimeout(resolve,100,'someValue');
                setTimeout(reject,100,'someValue');
            }
        );
        console.log(promise);

    console.info('%cThen',style_subtitle);
        let promiseb = new Promise(
            function(resolve,reject){
                setTimeout(resolve,100,'someValue');
            }
        );
        
        promiseb.then(
            value =>console.log('fulfilled:',value),
            error =>console.log('rejected:',error)
        );

        console.log(promise);

console.groupEnd();
