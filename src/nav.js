function nav() {
    const nav = document.createElement('nav');
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
    return nav;
};

export default nav;