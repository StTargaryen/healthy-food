function slider({
    container,
    slide,
    nextController,
    prevController,
    totalCounter,
    currentCounter,
    wrapper,
    field
}) {
    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevController),
        next = document.querySelector(nextController),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1,
        offset = 0;

    // first check & initialisation of slider counter
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    };

    //-- create the slides vision field
    /*calculate the vision window & getting the parent-child connection*/
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });
    slider.style.position = 'relative';

    //-- creation of the dots & integrating in the slider
    const dots = [],
        indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');

    slider.append(indicators);
    /* binding dots to the slides */
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = 1;
        };
        indicators.append(dot);
        dots.push(dot);
    };

    // control-bar

    /* next-prev buttons */

    next.addEventListener('click', () => {
        setNextSlide();
        updateSliderCounter();
        setDotActive();
    });

    prev.addEventListener('click', () => {
        setPrevSlide();
        updateSliderCounter();
        setDotActive();
    });

    /* dots */

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);
            slidesField.style.transform = `translate(-${offset}px)`;

            updateSliderCounter();
            setDotActive();
        });
    });

    // main functions

    function updateSliderCounter() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        };
    };

    function setPrevSlide() {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        };
    };

    function setNextSlide() {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        };
    };

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    };

    function setDotActive() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    };
};

export default slider;