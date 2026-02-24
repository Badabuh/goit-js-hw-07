const getInputValue = document.getElementById('name-input');
const getOutputEl = document.getElementById('name-output');
getInputValue.addEventListener('input', event => {
    getOutputEl.textContent = event.currentTarget.value.trim() === '' ? 'Anonymous' : event.currentTarget.value.trim();
});