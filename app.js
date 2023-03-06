const showInfo = document.getElementById('show-info');
const testLS = document.getElementById('test-LS');

testLS.addEventListener('click', addLS);

function addLS() {
    localStorage.setItem('test', 'testing');
    let data = localStorage.getItem('test');
    showInfo.textContent = data;
}