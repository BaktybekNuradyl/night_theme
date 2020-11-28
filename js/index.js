
const black = document.querySelector('.black');
const main = document.getElementById('main');
const imgDiv = document.getElementById('img-div');
const white = document.querySelector('.white');
const bodyColor = document.querySelector('body');
const imgBlack = document.getElementById('image-black');
const imgWhite = document.getElementById('image-white');

black.addEventListener('click',()=>{
    main.style.backgroundColor = 'black';
    imgDiv.style.backgroundColor = 'grey';
    bodyColor.style.color = 'white';
    imgBlack.style.display = 'initial';
    imgWhite.style.display = 'none';
});



white.addEventListener('click',()=>{
    main.style.backgroundColor = '#03a9f438';
    imgDiv.style.backgroundColor = '#3069a5';
    bodyColor.style.color = 'black';
    imgWhite.style.display = 'initial';
    imgBlack.style.display = 'none';
});