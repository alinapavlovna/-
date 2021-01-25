function slider() {
    let slideIndex = 1,
        offset = 0;

    const offerSlides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total'),
        innerWrap = document.querySelector('.offer__slider-inner'),
        wrap = document.querySelector('.offer__slider-wrapper'),
        width = window.getComputedStyle(wrap).width;


    /********* Slider2 ************/


    if (offerSlides.length < 10) {
        total.textContent = `0${offerSlides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = offerSlides.length;
        current.textContent = slideIndex;
    }

    innerWrap.style.width = 100 * offerSlides.length + '%';
    innerWrap.style.display = 'flex';
    innerWrap.style.transition = '0.9s all';

    wrap.style.overflow = 'hidden';

    offerSlides.forEach(slide => slide.style.width = width);

    next.addEventListener('click', () => {
        if (offset == strToNum(width) * (offerSlides.length - 1)) {
            offset = 0;
        } else {
            offset += strToNum(width);
        }

        innerWrap.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == offerSlides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        numeration();
        dotBrightness();

    });


    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = strToNum(width) * (offerSlides.length - 1)
        } else {
            offset -= strToNum(width);
        }

        innerWrap.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = offerSlides.length;
        } else {
            slideIndex--;
        }

        numeration();
        dotBrightness();

    });


    function numeration() {
        if (offerSlides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }


    /********* Dots ************/

    slider.style.position = 'relative';

    const dots = [],
        indicators = document.createElement('ol');

    indicators.classList.add('carousel-indicators');

    slider.append(indicators);

    for (let i = 0; i < offerSlides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.borderRadius = '10px';

        dot.classList.add('dot');

        indicators.append(dot);
        dots.push(dot);

        if (i == 0) {
            dot.style.opacity = 1;
        }
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;

            offset = strToNum(width) * (slideTo - 1);

            innerWrap.style.transform = `translateX(-${offset}px)`;

            numeration();
            dotBrightness();
        })
    });

    function dotBrightness() {
        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = '1';
    }

    function strToNum(str) {
        return +str.replace(/\D/g, '');
    }

}


export default slider;