function nav() {
    const nav = document.createElement('nav');

    const navList = document.createElement('ul');

    // CONVERT LI TO BUTTON
    // on click, these buttons should remove the currently displayed content and load the relevant content
    const homeLink = document.createElement('li');
    homeLink.textContent = 'Home';
    const menuLink = document.createElement('li');
    menuLink.textContent = 'Menu';
    const contactLink = document.createElement('li');
    contactLink.textContent = 'Contact';




    nav.innerHTML = `
    <ul>
                <a href="./home.html">
                    <li>Home</li>
                </a>
                <a href="./menu.html">
                    <li>Menu</li>
                </a>
                <a href="./contact.html">
                    <li>Contact</li>
                </a>
            </ul>
    `;

    nav.appendChild(navList);
    return nav;
};

export default nav;