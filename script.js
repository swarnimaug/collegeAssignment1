
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    // Moves the div to the mouse coordinates
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


function glow(x) {
    x.style.borderColor = "#00f2ff";
    x.style.transform = "translateY(-5px)";
    cursor.style.transform = "scale(2.5)"; // Cursor grows on hover
}

function off(x) {
    x.style.borderColor = "#222";
    x.style.transform = "translateY(0)";
    cursor.style.transform = "scale(1)";
}

document.getElementById('mainBtn').onclick = function() {
    alert("SYSTEM INITIALIZED: Loading ORION-X Core...");
    window.scrollTo({ top: 800, behavior: 'smooth' });
};


document.getElementById('proForm').onsubmit = function(e) {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        e.preventDefault();
        alert("CRITICAL ERROR: Invalid Secure Protocol (Email)");
    } else {
        alert("ACCESS GRANTED. Welcome to the future.");
    }
};