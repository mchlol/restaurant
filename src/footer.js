function footer() {
    const footer = document.createElement('footer');
    footer.innerHTML = 
        `
        Photo by <a
        href="https://unsplash.com/@jsycra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Siyuan</a>
    on <a
        href="https://unsplash.com/collections/SSLmP1SuByo/italian-restaurant/cdbd6a9468565477237dd55fa6de7047?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        `;
    return footer;
};

export default footer;