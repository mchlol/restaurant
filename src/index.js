import "./index.scss";
import nav from './nav';
import homeContent from './home';
import menuContent from "./menu";
import contactContent from "./contact";
import footer from './footer';

const getNav = nav();
const getHomeContent = homeContent();
const getMenuContent = menuContent();
const getContactContent = contactContent();
const getFooter = footer();

const layout = document.createElement('div');
layout.classList.add('grid-3rows');
document.body.appendChild(layout);
const contentWrap = document.createElement('div');
contentWrap.classList.add('content-wrap');
layout.appendChild(getNav);
layout.appendChild(contentWrap);
contentWrap.appendChild(getHomeContent);
layout.appendChild(getFooter);


const buttons = document.querySelectorAll('.nav-btn');
console.log(buttons);

buttons.forEach(btn => {
    btn.addEventListener('click', event => {
         loadContent(event.target.id);
    });
 });


function loadContent(button) {
    contentWrap.innerHTML = '';

    if (button === 'homeBtn') {
        contentWrap.appendChild(getHome);
    } else if (button === 'menuBtn') {
        contentWrap.appendChild(getMenu);
    } else if (button === 'contactBtn') {
        contentWrap.appendChild(getContact);
    } else {
        console.log('uh oh');
    }

    return document.body.appendChild(contentWrap);
};