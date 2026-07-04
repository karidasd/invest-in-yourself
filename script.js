document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.pillar-card');
    const modals = document.querySelectorAll('.modal');
    const overlay = document.getElementById('modal-overlay');
    const closeBtns = document.querySelectorAll('.close-btn');

    function openModal(id) {
        const modal = document.getElementById(id);
        if(modal) {
            modal.classList.add('active');
            overlay.classList.add('active');
        }
    }

    function closeAllModals() {
        modals.forEach(m => m.classList.remove('active'));
        overlay.classList.remove('active');
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const target = card.getAttribute('data-target');
            openModal(target);
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    overlay.addEventListener('click', closeAllModals);
});
