function nav() {
    const nav = document.createElement('nav');
    
    nav.innerHTML = 
        `<ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
        `;
    return nav;
};

export default nav;