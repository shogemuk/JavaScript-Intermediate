// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
import {Init} from '../init.js';

let init = new Init();
let styles = init.Styles();

let style_title = styles.style_title;
let style_info = styles.style_info;
let style_subtitle = styles.style_subtitle;

console.group('%cTry Catch - Exception Handling',style_title);
    console.groupCollapsed('Click To Ooen');
        console.info('%cSimple Try Catch',style_subtitle);
            try{
                let car = newCar;
            }
            catch(error){
                console.log('error:',error);
            };
            console.log('continuing...');

        console.info('%cFinally',style_subtitle);
            try{
                let car = oldCar;
            }
            catch(error){
                console.log('error:',error);
            }
            finally{
                console.info('%c Anything in the Finally block will always execute',style_info);
                console.log('This will always execute!!');
            };
            console.info('%cThrow',style_subtitle);
                console.info('%cExample 1',style_info);

                    try{
                        throw new Error('My new error is here');
                    }
                    catch(error){
                        console.log('error:',error);
                    };
                console.info('%cExample 2',style_info);

                    function getRectArea(width, height) {
                        if (isNaN(width) || isNaN(height)) {
                            throw "Parameter is not a number!";
                        }
                    }
                  
                    try {
                        getRectArea(3, 'A');
                    }
                    catch(e) {
                        console.log(e);
                        // expected output: "Parameter is not a number!"
                    }
                console.info('%cExample 3 - Throw Object',style_info);  

                    function UserException(message) {
                        this.message = message;
                        this.name = 'UserException';
                     }
                     function getMonthName(mo) {
                        mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
                        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                           'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                        if (months[mo] !== undefined) {
                           return months[mo];
                        } else {
                           throw new UserException(mo+' is an invalid month number');
                        }
                     }
                     
                     try {
                        // statements to try
                        var myMonth = 15; // 15 is out of bound to raise the exception
                        var monthName = getMonthName(myMonth);
                     } catch (e) {
                        monthName = 'unknown';
                        console.log(e.message, e.name); // pass exception object to err handler
                     }
    
    console.groupEnd();
console.groupEnd();