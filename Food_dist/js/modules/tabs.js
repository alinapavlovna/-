function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    let wrapper = document.querySelector(tabsParentSelector),
        tabs = document.querySelectorAll(tabsSelector),
        tabContent = document.querySelectorAll(tabsContentSelector);


    function hideTabContent() {
        tabContent.forEach(tab => {
            tab.style.display = 'none';
            tab.classList.remove(activeClass);
        })

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        })
    };

    hideTabContent();

    function showTabContent(i = 0) {
        tabContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    showTabContent();

    wrapper.addEventListener('click', (event) => {
        // event.preventDefault();
        let target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((tab, i) => {
                if (tab == target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });

        }
    });
}


export default tabs;