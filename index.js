let toggleBtn = document.getElementById('toggle');

const heading = document.getElementById('heading');

// Default state below

let mode = true;

// Invoke function to execute changing states

toggleBtn.addEventListener('click', () => {
    toggleStates();
})

// Master toggle function

function toggleStates() {
    mode === true ? darkMode() : lightMode();
}

// What happens when darkMode is active

function darkMode() {
    mode = false;
    console.log("Dark Mode Active");
    heading.innerText = `Go Light`;
    heading.style.color = `white`;
    toggleBtn.innerText = `Go Light`;
    document.body.style.backgroundColor = `#212121`;
}

// What happens when lightMode is active

function lightMode() {
    mode = true;
    console.log("Light Mode Active");
    document.body.style.backgroundColor = `white`;
    heading.innerText = `Go  Dark`;
    toggleBtn.innerText = 'Go Dark';
    heading.style.color = 'black';
}