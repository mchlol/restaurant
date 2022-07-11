import "./index.scss";
import nav from './nav';
import footer from './footer';
import headerComponent from './home';
import Image from './images/small-foccacia.jpg';

console.log('it works');
function loadContent() {

    const contentWrap = document.createElement('div');
    const getNav = nav();
    const getFooter = footer();

    const main = document.createElement('main');

    const header = headerComponent();

    const imageWrap = document.createElement('div');
    imageWrap.classList.add('hero-image');

    const myImage = document.createElement('image');
    myImage.src = Image;
    
    contentWrap.appendChild(getNav);
    contentWrap.appendChild(main);
    main.appendChild(header);
    main.appendChild(myImage);
    main.appendChild(imageWrap);
    contentWrap.appendChild(getFooter);
  
    console.log('content loaded');

    return document.body.appendChild(contentWrap);
}

loadContent();
