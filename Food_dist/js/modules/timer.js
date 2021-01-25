function timer(id, deadline) {

    let clearTimer1 = document.querySelector('.timer__block #days'),
        clearTimer2 = document.querySelector('.timer__block #hours'),
        clearTimer3 = document.querySelector('.timer__block #minutes'),
        clearTimer4 = document.querySelector('.timer__block #seconds');


    function getTimeRemaining(endtime) {
        let now = new Date();
        let temp = Date.parse(endtime) - Date.parse(now);

        let days = Math.floor(temp / (1000 * 60 * 60 * 24)),
            hours = Math.floor((temp / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((temp / 1000 / 60) % 60),
            seconds = Math.floor((temp / 1000) % 60);

        return {
            'total': temp,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }


    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }


    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let time = getTimeRemaining(endtime);

            days.innerHTML = getZero(time.days);
            hours.innerHTML = getZero(time.hours);
            minutes.innerHTML = getZero(time.minutes);
            seconds.innerHTML = getZero(time.seconds);

            if (time.total <= 0) {
                clearInterval(timeInterval);

                clearTimer1.innerHTML = '0';
                clearTimer2.innerHTML = '0';
                clearTimer3.innerHTML = '0';
                clearTimer4.innerHTML = '0';

            }

        }
        updateClock();
    }

    setClock(id, deadline);

    console.log(deadline);
    // Поменять дату, до которой будет действовать скидка
    let date = document.querySelector('.promotion__descr');
    date.querySelector('#date').innerHTML = deadline.split('-').reverse().join('.');
}


export default timer;