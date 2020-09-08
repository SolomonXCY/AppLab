"use strict";

const burger = document.querySelector('.burger'),
      menu = document.querySelector('.menu__header'),
      monthly = document.querySelector('#monthly'),
      anually = document.querySelector('#anually'),
      priceBlock = document.querySelectorAll('.price__items'),
      prevBtn = document.querySelector('#prev'),
      nextBtn = document.querySelector('#next'),
      sliderContent = document.querySelectorAll('.clients__slider');

burger.addEventListener('click', ()=>{
  burger.classList.toggle('animate');
  menu.classList.toggle('_active');
  menu.classList.toggle('_fade');
});

document.documentElement.addEventListener('click', (e)=>{
  if(!e.target.closest('.header__main')){
    menu.classList.remove('_active');
  }
});

anually.addEventListener('click', () => {
   event.preventDefault();
    priceBlock.forEach((item, i) => {
     if(i == 1){
       item.classList.add('next','_fade' )
     }else{
       item.classList.remove('next', '_fade')
     }
    });
});
monthly.addEventListener('click', () => {
  event.preventDefault();
  priceBlock.forEach((item, i) => {
    if(i == 0){
      item.classList.add('next', '_fade')
    }else{
      item.classList.remove('next', '_fade')
    }
   });
});
let index = 0;

const activeSld = n =>{
  for(let slides of sliderContent){
    slides.classList.remove('activesld')
  }
  sliderContent[n].classList.add('activesld', '_fade')
};

const nextSld = () =>{
  if(index == sliderContent.length - 1){
    index = 0;
    activeSld(index);
  } else{
    index++;
    activeSld(index);
  }
};
const prevSld = () =>{
  if(index == 0){
    index = sliderContent.length - 1;
    activeSld(index);
  } else{
    index--;
    activeSld(index);
  }
};

// acordeonItem.forEach((section)=> {
//   section.addEventListener('click', (e)=>{
//     acordeonItem.forEach(section=>{
//       section.classList.remove('opened')
//     })
//     e.target.closest('.acardeon__item').classList.add('opened')
   
//   });
// })


+function () {

  function initAccordeon () {
      var firstSectionBodyHeight = document.querySelector('.acardeon__item .acardeon__body > *').clientHeight
      document.querySelector('.acardeon__item .acardeon__body').style.maxHeight = firstSectionBodyHeight + 'px'
  }
  
  initAccordeon()
  
  
  
  var accordeonHeaderClickHandler = function(e) {
      document.querySelectorAll('.acardeon__item').forEach(function(section) {
          section.querySelector('.acardeon__body').style.maxHeight = '0px'
      })
  
      var accordeonSection = e.target.closest('.acardeon__item')
  
      var insideElHeight = accordeonSection.querySelector('.acardeon__body > *').clientHeight;
  
      accordeonSection.querySelector('.acardeon__body').style.maxHeight = insideElHeight + 'px'
  }
  
  document.querySelectorAll('.acardeon__item')
      .forEach(function(section) {
          section.addEventListener('click', accordeonHeaderClickHandler)
      })
  
  }()
nextBtn.addEventListener('click', nextSld)
prevBtn.addEventListener('click', prevSld)