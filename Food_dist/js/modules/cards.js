import { getResource } from '../services/services';

function cards() {
    // let slide = document.querySelector('.menu__item'),
    //     slides = document.querySelectorAll('.menu__item'),
    //     menu = document.querySelector('.menu__field');


    class NewMenuItem {
        constructor(newSubtitle, newAlt, newImg, newDesc, newPrice, parentSelector, ...classes) {
            this.newSubtitle = newSubtitle;
            this.newAlt = newAlt;
            this.newImg = newImg;
            this.newDesc = newDesc;
            this.newPrice = newPrice;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 28.5;
            this.changeToUAH();
        }
        changeToUAH() {
            this.newPrice = this.newPrice * this.transfer;
        }
        createNewItem() {
            const element = document.createElement('div');

            element.innerHTML = ` <div class="menu__item col-lg-3">
                <img src= ${this.newImg} alt= ${this.newAlt}>
                <h3 class="menu__item-subtitle">${this.newSubtitle}</h3>
                <div class="menu__item-descr">${this.newDesc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.newPrice}</span> грн/день</div>
                </div>
            </div>`;

            this.parent.append(element);
        }

    }

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({ title, altimg, img, descr, price }) => {
                new NewMenuItem(title, altimg, img, descr, price, ".menu .container").createNewItem();
            });
        });

    // getResource("http://localhost:3000/menu").then((data) => {
    //     data.forEach((obj) => {
    //         obj.parentSelector = ".menu .container";
    //         new NewMenuItem(...Object.values(obj)).createNewItem();
    //     });
    // });

    // let newSlide = new NewMenuItem('Menu', 'alt', 'img/tabs/vegy.jpg', 'Description', 'Price', '.menu .container');
    // newSlide.createNewItem();
    // let newSlide1 = new NewMenuItem('Menu', 'alt', 'img/tabs/vegy.jpg', 'Description', 'Price', '.menu .container');
    // newSlide1.createNewItem();
    // new NewMenuItem(
    //     'Меню “Премиум”',
    //     "elite",
    //     "img/tabs/elite.jpg",
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     21,
    //     ".menu .container"
    // ).createNewItem();

    // let newSlide2 = new NewMenuItem('Menu', 'alt', 'img/tabs/vegy.jpg', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     'Price', '.menu .container');
    // newSlide2.createNewItem();

    // let newSlide3 = new NewMenuItem('Menu', 'alt', 'img/tabs/vegy.jpg', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     'Price', '.menu .container');
    // newSlide3.createNewItem();

    // let newSlide4 = new NewMenuItem('Menu', 'alt', 'img/tabs/vegy.jpg', 'Description', 'Price', '.menu .container');
    // newSlide4.createNewItem();


    // let newSlide5 = new NewMenuItem('Menu', 'alt', 'img/tabs/vegy.jpg', 'Description', 'Price', '.menu .container');
    // let newSlide6 = new NewMenuItem('Menu', 'alt', 'img/tabs/vegy.jpg', 'Description', 'Price', '.menu .container');
    // let newSlide7 = new NewMenuItem('Menu', 'alt', 'img/tabs/vegy.jpg', 'Description', 'Price', '.menu .container');

    // newSlide5.createNewItem();

    // POST request (send data to  the server)



}


export default cards;