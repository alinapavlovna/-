import { openModal, closeModal } from './modal';
import { postData } from '../services/services';

function forms(modalTimer) {
    const forms = document.querySelectorAll('form');

    const info = {
        loading: 'img/spinner.svg',
        success: 'OK! We will call you later!',
        failure: 'Something is wrong...'
    }

    forms.forEach(item => {
        bindPostData(item);
    });

    
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = info.loading;
            statusMessage.alt = 'Loading';
            statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then((data) => {
                    console.log(data);
                    thanksMassage(info.success);
                    statusMessage.remove(); //удаляем спиннер
                })
                .catch(() => {
                    thanksMassage(info.failure);
                })
                .finally(() => {
                    form.reset();
                });

        });
    }


    function thanksMassage(mes) {
        const prevModal = document.querySelector('.modal__dialog');

        prevModal.classList.add('hide');
        openModal('.modal', modalTimer);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');

        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${mes}</div>
        </div>
    `;
        document.querySelector('.modal').append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModal.classList.add('show');
            prevModal.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }

}

export default forms;