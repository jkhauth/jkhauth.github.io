//FIRST H1
const target = window.document.getElementsByTagName('h1')[0]


const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);
neonGlory(target);
target.onclick = ({ target }) =>  neonGlory(target);

$('.carousel').carousel({
    interval: false
  })
//FIRST H2
const target2 = window.document.getElementsByTagName('h1')[1]


const flickerLetter2 = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const colorLetter2 = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText2 = text => 
  text
    .split('')
    .map(flickerLetter2)
    .map(colorLetter2)
    .join('');
const neonGlory2 = target => target.innerHTML = flickerAndColorText2(target.textContent);
neonGlory2(target2);
target2.onclick = ({ target }) =>  neonGlory2(target);

$('.carousel').carousel({
    interval: false
  })