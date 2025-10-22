// buttons and input
const search = document.querySelector('#search');
const google_search = document.querySelector('#Google_search');
const google = document.querySelectorAll('#g, #o, #o1, #l, #e');
const toggle = document.getElementById('dark-mode');
const header = document.getElementById('header');
const footer1 = document.querySelector('#footer1');
const footer2 = document.querySelector('#footer2');
const footer_links = footer2.querySelectorAll('a');
const translate_text = document.getElementById('translate');
const translate = translate_text.querySelector('a');
// querySelectorAll customizes every variable in a specific primary variable or HTML document
const headerLinks = header.querySelectorAll('a');
// Dark mode toggle
toggle.addEventListener('change', () => {
    const dark = toggle.checked;
    document.body.classList.toggle('dark', dark);
    // if conditions: first condition turns black on dark mode, second conditions returns is to its original mode.
    search.style.backgroundColor = dark ? "black": "";
    search.style.color = dark ? "white" : "";
    google_search.style.backgroundColor = dark ? "black": "";
    google_search.style.color = dark ? "white": "";
    translate.style.color = dark ? "lightblue": "";
    footer1.style.backgroundColor = dark ? "black": "";
    footer2.style.backgroundColor = dark ? "black": "";
    footer2.style.color = dark ? "white": "";
    // forEach is an action which changes every variable in a specific declared variable in Javascript
    headerLinks.forEach(link => {
        link.style.color = dark ? 'white' : '';
    });
    google.forEach(letter => {
        letter.style.color = dark ? 'white': '';
    });
    footer_links.forEach(link1 =>{
        link1.style.color = dark ? 'white': '';
    });
    console.log('Google');
});
