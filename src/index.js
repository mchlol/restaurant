import "./index.scss";
import nav from './nav';
import homeContent from './home';
import footer from './footer';

// load the nav content
// load the home content
// load the footer content

function loadHomeContent() {

    const layout = document.createElement('div');
    layout.classList.add('grid-3rows');

    const getNav = nav();
    const getHomeContent = homeContent();
    const getFooter = footer();
    
    layout.appendChild(getNav);
    layout.appendChild(getHomeContent);
    layout.appendChild(getFooter);

    layout.appendChild(getFooter);
  
    console.log('content loaded');

    return document.body.appendChild(layout);
}

loadHomeContent();
