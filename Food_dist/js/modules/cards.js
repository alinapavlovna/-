import { getResource } from '../services/services';

function cards() {

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

}

export default cards;