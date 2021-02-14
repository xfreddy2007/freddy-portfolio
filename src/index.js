// Import modules
import './style/style.css'

// ---------- Image for whole Project ---------- //
// Import Images and Importing function
import smartBrain from './assets/smart-brain.png'
import movieRecommend from './assets/movie-recommendation.jpg';
import bulldozer from './assets/bulldozer-price-prediction.jpg';
import stockPrice from './assets/google-stock-price-prediction.jpg';
import heartDisease from './assets/heart-disease-prediction.jpg';
import dogBreedsClassifier from './assets/dog-breeds-classification.jpg';

import stockPricePlot from './assets/stock-price-plot.png';

function importImages(imageSrc, classList) {
    const img = new Image();
    img.src = imageSrc;
    classList.forEach(element => img.classList.add(element));
    return img
}

function appendDOMElement(id, image) {
    const parent = document.getElementById(id);
    parent.appendChild(image);
}

// DOM Elements

// home work gallery
appendDOMElement('home-img-1', importImages(smartBrain, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));
appendDOMElement('home-img-2', importImages(movieRecommend, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));
appendDOMElement('home-img-3', importImages(bulldozer, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));
appendDOMElement('home-img-4', importImages(stockPrice, ['h-full', 'w-full', 'rounded-2xl','object-cover']));
appendDOMElement('home-img-5', importImages(heartDisease, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));
appendDOMElement('home-img-6', importImages(dogBreedsClassifier, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));

// work images
appendDOMElement('project-1', importImages(smartBrain, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));
appendDOMElement('project-2', importImages(movieRecommend, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));
appendDOMElement('project-3', importImages(bulldozer, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));
appendDOMElement('project-4', importImages(stockPrice, ['h-full', 'w-full', 'rounded-2xl','object-cover']));
appendDOMElement('project-5', importImages(heartDisease, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));
appendDOMElement('project-6', importImages(dogBreedsClassifier, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));

// Project images
appendDOMElement('project-brain', importImages(smartBrain, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));
appendDOMElement('project-movie', importImages(movieRecommend, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));
appendDOMElement('project-bulldozer', importImages(bulldozer, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));
appendDOMElement('project-stock', importImages(stockPrice, ['h-full', 'w-full', 'rounded-2xl','object-cover']));
appendDOMElement('project-stock-plot', importImages(stockPricePlot, ['h-full', 'w-full', 'rounded-2xl']));
appendDOMElement('project-heart', importImages(heartDisease, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));
appendDOMElement('project-dog', importImages(dogBreedsClassifier, ['h-full', 'w-full', 'rounded-2xl', 'object-cover']));


// ---------- DOM Elements ---------- //
// Nav-menu
const menuBars = document.getElementById('menu-bars');
const navMenu = document.getElementById('menu');

const menuWork = document.getElementById('menu-work');
const menuAbout = document.getElementById('menu-about');
const menuContact = document.getElementById('menu-contact');


// ---------- Functions & Event Listeners ---------- //

// ---------- Switch Page functions ---------- //
const home = document.getElementById('home');
const about = document.getElementById('about');
const work = document.getElementById('work');
const contact = document.getElementById('contact');

const smartBrainBtn = document.getElementById('smart-brain');
const movieRecommendationBtn = document.getElementById('movie-recommendation');
const bulldozerBtn = document.getElementById('bulldozer');
const googleStockBtn = document.getElementById('google-stock');
const heartDiseaseBtn = document.getElementById('heart-disease');
const dogBreedBtn = document.getElementById('dog-breed');

const backBtn = document.querySelectorAll('.backpage');

let activePage = 'home-page';

function switchPage(e) {
    if (e.srcElement.id === 'home' && menuBars.classList.contains('change')) {
        toggleNav();
    }
    document.getElementById(activePage).classList.toggle('hidden');
    document.getElementById(`${e.srcElement.id}-page`).classList.toggle('hidden');
    activePage = `${e.srcElement.id}-page`
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function goBackPage(e) {
    document.getElementById(e.srcElement.parentElement.id).classList.toggle('hidden');
    document.getElementById('work-page').classList.toggle('hidden');
    activePage = 'work-page';
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Event Listener
home.addEventListener('click', switchPage);
about.addEventListener('click', switchPage);
work.addEventListener('click', switchPage);
contact.addEventListener('click', switchPage);
smartBrainBtn.addEventListener('click', switchPage);
movieRecommendationBtn.addEventListener('click', switchPage);
bulldozerBtn.addEventListener('click', switchPage);
googleStockBtn.addEventListener('click', switchPage);
heartDiseaseBtn.addEventListener('click', switchPage);
dogBreedBtn.addEventListener('click', switchPage);

backBtn.forEach((element) => {
    element.addEventListener('click', goBackPage);
});

// ----- Toggle Menubars ----- //
function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Open/Close navMenu
    if (menuBars.classList.contains('change')) {
        navMenu.classList.remove('hidden');
    } else {
        navMenu.classList.add('hidden');
    }
}

function menuClick(e) {
    toggleNav();
    let page = e.srcElement.id.split('-')[1];
    document.getElementById(activePage).classList.toggle('hidden');
    document.getElementById(`${page}-page`).classList.toggle('hidden');
    activePage = `${page}-page`
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Event Listener
menuBars.addEventListener('click', toggleNav);
menuAbout.addEventListener('click', menuClick);
menuWork.addEventListener('click', menuClick);
menuContact.addEventListener('click', menuClick);