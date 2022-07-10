import "./index.scss";
import nav from './nav';
import footer from './footer';
import headerComponent from './home';
import Image from './images/outside.jpg';

console.log('it works');
function loadContent() {

    const contentWrap = document.createElement('div');
    const getNav = nav();
    const getFooter = footer();

    const main = document.createElement('main');

    const header = headerComponent();

    const myImage = document.createElement('image');
    myImage.src = Image;


    contentWrap.appendChild(getNav);
    contentWrap.appendChild(main);
    main.appendChild(header);
    main.appendChild(myImage);
    contentWrap.appendChild(getFooter);
  
    console.log('content loaded');

    return contentWrap;
}

loadContent();