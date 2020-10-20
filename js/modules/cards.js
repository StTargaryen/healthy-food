function cards() {
    function convertToRub(number) {
        return number * 75;
    };

    axios.get('http://localhost:3000/menu')
        .then(data => {
            createCard(data.data);
        });

    // dinamic creation of the cards
    /* convertation of price value */

    function createCard(data) {
        data.forEach(({
            img,
            altimg,
            title,
            descr,
            price
        }) => {
            const element = document.createElement('div');
            element.classList.add('menu__item');

            const rubPrice = convertToRub(price);

            element.innerHTML = `
              <img src=${img} alt=${altimg}>
              <h3 class="menu__item-subtitle">${title}</h3>
              <div class="menu__item-descr">${descr}</div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${rubPrice}</span> рублей/день</div>
              </div>
            `;
            document.querySelector('.menu .container').append(element);

        })
    }

}

export default cards;