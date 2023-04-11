const button = document.querySelector('button');
const text_1 = document.querySelector('.text_1');
const text_2 = document.querySelector('.text_2')
const API = "http://api.quotable.io/random"
let useState;
const text = 'Discover the most beautiful qoutes around the world'

button.addEventListener('click', () => {
    text_2.classList.add('apiFetchStyle')
    fetch(API).then(res => res.json()).then(data => {
        text_2.innerHTML = data.content;
    }).catch(() => alert('NOT CONNECTED!'))
});
window.addEventListener('mouseover', () => {
    button.classList.add('textDisplayTimeOut')

})

function myfunctionComman() {
    const welcome = new Date().getHours()
    if (welcome < 12) {
        text_1.textContent = (`Good Morning! ${text}`)
    }
   else if (welcome < 16) {
        text_1.textContent = (`Good AfterNone! ${text}`)
    }
   else if (welcome < 19) {
        text_1.textContent = (`Good Evening! ${text}`)
    }
    else {
        text_1.textContent = (` Good Night! ${text}`)
    }
   
}
myfunctionComman()