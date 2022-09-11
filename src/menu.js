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
    menuHeader.classList.add('flex-col', 'home-left');
    menuHeader.innerHTML = `
    <h1>Menu</h1>

    <p>A small assortment of the best dishes that Cordiale is famous for.</p>
    `;

    menuWrap.appendChild(menuHeader);

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-flex');

    // write a function that stores the image info as an array of objects then loops through them to display on the page

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
        
    ];

    // but for now let's just get them on there

    const foccaciaFig = document.createElement('figure');
    foccaciaFig.classList.add('menu-item');
    const foccaciaImg = new Image();
    foccaciaImg.src = Foccacia;
    foccaciaImg.alt = 'foccacia with sliced lemon, rosemary sprigs, and salt on a wooden board';
    foccaciaFig.appendChild(foccaciaImg);
    const foccaciaFigCap = document.createElement('figcaption');
    foccaciaFigCap.textContent = 'Foccacia';
    foccaciaFig.appendChild(foccaciaFigCap);

    menuItems.appendChild(foccaciaFig);

    menuWrap.appendChild(menuItems);

    return menuWrap;
};

export default menuContent;