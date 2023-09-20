// function addGrayscale() {
//     const twoBox2 = document.querySelector('.twoBox-2');
//     const imgHero = document.querySelector('.imgHero');
//     const tower = document.querySelector('.tower-section');

//     twoBox2.classList.add('grayscale');
//     imgHero.classList.add('grayscale');
//     tower.classList.add('grayscale');
// }

// function removeGrayscale() {
//     const twoBox2 = document.querySelector('.twoBox-2');
//     const imgHero = document.querySelector('.imgHero');
//     const tower = document.querySelector('.tower-section');

//     twoBox2.classList.remove('grayscale');
//     imgHero.classList.remove('grayscale');
//     tower.classList.remove('grayscale');
// }

const twoBox1 = document.querySelector('.twoBox-1');
const twoBox2 = document.querySelector('.twoBox-2');
const imgHero = document.querySelector('.imgHero');
const tower = document.querySelector('.tower-section');

twoBox1.addEventListener('mouseover', () => {
    twoBox2.classList.add('grayscale');
    imgHero.classList.add('grayscale');
    tower.classList.add('grayscale');
});

twoBox1.addEventListener('mouseout', () => {
    twoBox2.classList.remove('grayscale');
    imgHero.classList.remove('grayscale');
    tower.classList.remove('grayscale');
});

twoBox2.addEventListener('mouseover', () => {
    twoBox1.classList.add('grayscale');
    imgHero.classList.add('grayscale');
    tower.classList.add('grayscale');
});

twoBox2.addEventListener('mouseout', () => {
    twoBox1.classList.remove('grayscale');
    imgHero.classList.remove('grayscale');
    tower.classList.remove('grayscale');
});

tower.addEventListener('mouseover', () => {
    twoBox1.classList.add('grayscale');
    imgHero.classList.add('grayscale');
    twoBox2.classList.add('grayscale');
});

tower.addEventListener('mouseout', () => {
    twoBox1.classList.remove('grayscale');
    imgHero.classList.remove('grayscale');
    twoBox2.classList.remove('grayscale');
});