const colors = ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6', '#a855f7'];

function go(n = 200) {
    for (let i = 0; i < n; i++) {
        const d = document.createElement('div');
        d.className = 'c';
        d.style.background = colors[i % colors.length];
        d.style.left = Math.random() * 100 + 'vw';
        d.style.setProperty('--x', (Math.random() * 2 - 1) * 40 + 'vw');
        d.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg');
        d.style.animation = 'fall ' + (5 + Math.random() * 3) + 's cubic-bezier(.15,.61,.41,.98) forwards';
        document.body.appendChild(d);
        setTimeout(() => d.remove(), 9000);
    }
}

// Initialize the button click handler when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('b').onclick = () => go();
});
