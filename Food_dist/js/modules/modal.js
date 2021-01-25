let modal;

function openModal(modalSelector, modalTimer) {
    modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (modalTimer) {
        clearInterval(modalTimer);
    }
}

function closeModal(modalSelector) {
    modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}



function modalWindow(triggerSelector, modalSelector, modalTimer) {
    let modal = document.querySelector(modalSelector),
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

    //let modalTimer = setTimeout(openModal, 10000);

    window.addEventListener('scroll', showModalByScroll);


    function showModalByScroll() {
        let scrolled = window.pageYOffset + document.documentElement.clientHeigth;
        if (scrolled >= document.documentElement.scrollHeigth) {
            openModal(modalSelector, modalTimer);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

}

export default modalWindow;
export { openModal };
export { closeModal };