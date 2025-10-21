let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound');

dollar.addEventListener('keyup', () => {
    pound.value = dollar.value * 47.58;
});

pound.addEventListener('keyup', () => {
    dollar.value = pound.value / 47.58;
});