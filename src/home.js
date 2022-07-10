function headerComponent() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const introSpan = document.createElement('span');
  const aboutPara = document.createElement('p');

  h1.textContent = 'Cordiale';
  introSpan.textContent = 'cordiale (Italian): warm, hearty, warm-hearted';
  aboutPara.innerHTML = `A cosy, intimate <em>cucina</em> serving delicious, heart-warming Italian food.`;

  header.appendChild(h1);
  header.appendChild(introSpan);
  header.appendChild(aboutPara);
  console.log('header loaded');

  return header;
}


export default headerComponent;