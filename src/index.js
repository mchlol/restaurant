import "./index.scss";
// import nav from './nav';
import homeContent from './home';
import menuContent from "./menu";
import contactContent from "./contact";
import footer from './footer';

const layout = document.createElement('div');
layout.classList.add('grid-3rows');

function nav() {
    const nav = document.createElement('nav');

    const navList = document.createElement('div');
    navList.classList.add('nav-btn-wrap');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-btn');
    homeBtn.setAttribute('id','homeBtn');
    homeBtn.textContent = 'Home';
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-btn');
    menuBtn.setAttribute('id','menuBtn');
    menuBtn.textContent = 'Menu';
    const contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-btn');
    contactBtn.setAttribute('id','contactBtn');
    contactBtn.textContent = 'Contact';

    navList.appendChild(homeBtn);
    navList.appendChild(menuBtn);
    navList.appendChild(contactBtn);

    nav.appendChild(navList);

    
    return nav;
};

// default to get something onto the page to work with 
function loadHomeContent() {

    const getNav = nav();
    const getHomeContent = homeContent();
    const getFooter = footer();
    
    layout.appendChild(getNav);
    layout.appendChild(getHomeContent);
    layout.appendChild(getFooter);
  
    console.log('default home content loaded');

    return document.body.appendChild(layout);
}

// run this first
loadHomeContent();
// or this won't work as nav buttons won't be on the page yet!
const buttons = document.querySelectorAll('.nav-btn');
console.log(buttons);

buttons.forEach(btn => {
    btn.addEventListener('click', event => {
         loadContent(event.target.id);
    });
 });


function loadContent(button) {
    layout.innerHTML = '';

    const getNav = nav();
    const getHome = homeContent();
    const getMenu = menuContent();
    const getContact = contactContent();

    layout.appendChild(getNav);

    if (button === 'homeBtn') {
        layout.appendChild(getHome);
    } else if (button === 'menuBtn') {
        layout.appendChild(getMenu);
    } else if (button === 'contactBtn') {
        layout.appendChild(getContact);
    } else {
        console.log('uh oh');
    }
    const getFooter = footer();
    layout.appendChild(getFooter);

    return document.body.appendChild(layout);
};