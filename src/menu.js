import Foccacia from './images/small-foccacia.jpg';
import Meatballs from './images/meatballs.jpg';
import Bruschetta from './images/bruschetta.jpg';
import Charcuterie from './images/charcuterie.jpg';
import Mussel from './images/mussel_pasta.jpg';
import Pizza from './images/pizza.jpg';
import Coffee from './images/coffee.jpg';


function menuContent() {
    const menuWrap = document.createElement('div');
    menuWrap.classList.add('menu-wrap', 'flex-col','align-center');
    
    const menuHeader = document.createElement('header');
    menuHeader.classList.add('flex-col', 'container', 'home-left');
    menuHeader.innerHTML = `
    <h1>Menu</h1>

    <p>A small assortment of the best dishes that Cordiale is famous for.</p>
    `;

    menuWrap.appendChild(menuHeader);

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-container', 'menu-flex');

    const itemDetails = [
        {
            name: "Foccacia",
            source: Foccacia,
            altText: 'foccacia with sliced lemon, rosemary sprigs, and salt on a wooden board'
        },
        {
            name: 'Meatballs',
            source: Meatballs,
            altText: 'meatballs on a plate'
        },
        {
            name: 'Bruschetta',
            source: Bruschetta,
            altText: 'toast with tomato toppings'
        },
        {
            name: 'Charcuterie',
            source: Charcuterie,
            altText: 'platter of various delicious snacks'
        },
        {
            name: 'Mussel pasta',
            source: Mussel,
            altText: 'pasta with mussels on a table with wine glasses'
        },
        {
            name: 'Pizza',
            source: Pizza,
            altText: 'a cheesy slice being taken from a pizza'
        },
        {
            name: 'Coffee',
            source: Coffee,
            altText: 'cups of coffee on a cafe table'
        }

    ];

    function displayMenu(array) {
        array.forEach(element => {
            let figure = document.createElement('figure');
            figure.classList.add('menu-item');

            let img = new Image();
            img.src = element.source;
            img.classList.add('menu-img');
            img.alt = element.altText;
            figure.appendChild(img);

            let caption = document.createElement('figcaption');
            caption.textContent = element.name;

            figure.appendChild(caption);

            menuItems.appendChild(figure);

            return console.log(element.name);
        });
    }

    displayMenu(itemDetails);
    menuWrap.appendChild(menuItems);

    return menuWrap;
};

export default menuContent;