function footer() {
    const footer = document.createElement('footer');
    footer.innerHTML = 
        `
        <p>Coded by <a href="https://github.com/mchlol" target="_blank">mchlol</a>. All photos in <a
                    href="https://unsplash.com/collections/SSLmP1SuByo/italian-restaurant" target="_blank">this Unsplash
                    collection</a>.</p>
  `;
    return footer;
};

export default footer;