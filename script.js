// Tab switching logic with fade transitions
function setActiveTab(tabName) {
    const activeSection = document.querySelector('.tab-content.active');
    const nextSection = document.getElementById('tab-' + tabName);
    if (activeSection && activeSection !== nextSection) {
        activeSection.classList.remove('fade-in');
        activeSection.classList.add('fade-out');
        setTimeout(() => {
            activeSection.style.display = 'none';
            activeSection.classList.remove('active', 'fade-out');
            if (nextSection) {
                nextSection.style.display = 'block';
                nextSection.classList.add('active', 'fade-in');
            }
        }, 700); // Match with CSS fade duration
    } else if (nextSection && !nextSection.classList.contains('active')) {
        nextSection.style.display = 'block';
        nextSection.classList.add('active', 'fade-in');
    }
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Tab buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.addEventListener('click', function() {
            setActiveTab(this.dataset.tab);
        });
    });
    // Set initial tab
    setActiveTab('home');

    // Simple form handler for demonstration
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting us!');
            form.reset();
        });
    }
});
