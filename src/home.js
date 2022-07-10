function headerComponent() {
const content = document.querySelector('#content')

const header = document.createElement('header');
const h1 = document.createElement('h1');
const introSpan = document.createElement('span');
const aboutPara = document.createElement('p');

h1.textContent = 'Cordiale';
introSpan.textContent = 'warm, hearty, warm-hearted';
aboutPara.innerHTML = `A cosy, intimate <em>cucina</em> serving delicious, heart-warming Italian food.`;

header.appendChild(h1);
header.appendChild(introSpan);
header.appendChild(aboutPara);
return content.appendChild(header);
}

export default headerComponent;