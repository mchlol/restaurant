import Outside from './images/outside.jpg';

function homeContent() {
    // this is now in the index.js
  const homeWrap = document.createElement('div');
  homeWrap.classList.add('home-wrap');

  const headerWrap = document.createElement('div');
  headerWrap.classList.add('flex-col','container','home-left');
  headerWrap.innerHTML = `
  <h1>Cordiale</h1>

                    <p><code><em>cordiale (Italian)</em>: warm, welcoming, genial</code></p>
                    <hr>
                    <h2><span class="material-symbols-rounded">
                            local_pizza
                        </span>
                        <span class="material-symbols-rounded">
                            local_cafe
                        </span>
                        <span class="material-symbols-rounded">
                            dinner_dining
                        </span>
                    </h2>
                    <p>Welcome to Cordiale, a cosy, intimate <em>cucina</em> serving delicious,
                        heart-warming Italian
                        food.
                    </p>
                    <svg class="animate-circle text-circle" viewBox="0 0 100 100" width="100" height="100">
                        <defs>
                            <path id="circle" d="
                              M 50, 50
                              m -37, 0
                              a 37,37 0 1,1 74,0
                              a 37,37 0 1,1 -74,0" />
                        </defs>
                        <text font-size="17">
                            <textPath xlink:href="#circle">
                                just like nonna used to make
                            </textPath>
                        </text>
                    </svg>
  `
  homeWrap.appendChild(headerWrap);

  const homeRight = document.createElement('div');
  homeRight.classList.add('home-right');
  const hr = document.createElement('hr');
  const homeImageWrap = document.createElement('div');
  // image here

  homeRight.appendChild(hr);
  homeRight.appendChild(homeImageWrap);
  const heroImage = new Image();
  heroImage.src = Outside;
  heroImage.classList.add('hero-img');

  homeImageWrap.appendChild(heroImage);
  homeRight.appendChild(homeImageWrap);
  homeWrap.appendChild(homeRight);

  return homeWrap;
}


export default homeContent;