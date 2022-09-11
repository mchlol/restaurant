import "./index.scss";
import nav from './nav';
import homeContent from './home';
import menuContent from "./menu";
import contactContent from "./contact";
import footer from './footer';

// turn this into a module?

const getNav = nav();
const getHomeContent = homeContent();
const getMenuContent = menuContent();
const getContactContent = contactContent();
const getFooter = footer();

const layout = document.createElement('div');
layout.classList.add('grid-3rows');
document.body.appendChild(layout);
layout.appendChild(getNav);
const contentWrap = document.createElement('div');
contentWrap.classList.add('content-wrap');
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
    console.log(contentWrap);

    if (button === 'homeBtn') {
        return contentWrap.appendChild(getHomeContent);
    } else if (button === 'menuBtn') {
        return contentWrap.appendChild(getMenuContent);
    } else if (button === 'contactBtn') {
        return contentWrap.appendChild(getContactContent);
    } else {
        return console.log('uh oh');
    }
};