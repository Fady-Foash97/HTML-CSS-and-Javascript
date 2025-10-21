/*Declare a variable called toggle from a variable in HTML called dark-mode */
const toggle = document.getElementById('dark-mode');
/*The toggle variable is activated when you click on the circle, this changes the color of the webpage */
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark', toggle.checked);
});