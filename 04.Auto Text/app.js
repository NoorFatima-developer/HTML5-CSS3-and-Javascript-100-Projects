const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

// console.log(typedText);
// console.log(cursor);


const words = ["Awesome", "😒", "Fun", "Cool", "Life", "Famous", "Werid"];
const  typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;
let index = 0;
let charindex = 0;


//HTML document completely loaded then DOMContentLoaded fires...
document.addEventListener('DOMContentLoaded', () => {
    if(words.length) {          //words array has atleast one word...
        setTimeout(type, newLetterDelay)
    }
    })


function type() {

    if(charindex < words[index].length) {
        typedText.textContent += words[index].charAt(charindex);
        charindex++;
        setTimeout(type, typingDelay);

    }

    else {
        setTimeout(erase, newLetterDelay);
    }
    }

    function erase() {
        if(charindex > 0){
            typedText.textContent = words[index].substring(0, charindex - 1);
            charindex--;
            setTimeout(erase, erasingDelay);

        }

        else {
            index ++;

            if(index >= words.length) {
                index = 0;
            }

            setTimeout(type, typingDelay + 1100);
        }
    }