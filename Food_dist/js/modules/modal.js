
function openModal(modalSelector, modalTimer) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (modalTimer) {
        clearInterval(modalTimer);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}


function modalWindow(triggerSelector, modalSelector, modalTimer) {
    const modal = document.querySelector(modalSelector),
        modalBtns = document.querySelectorAll(triggerSelector);

    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimer));
    });


    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        let scrolled = window.pageYOffset + document.documentElement.clientHeigth;
        if (scrolled >= document.documentElement.scrollHeigth) {
            openModal(modalSelector, modalTimer);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modalWindow;
export { openModal };
export { closeModal };