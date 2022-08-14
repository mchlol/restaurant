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

export default nav;