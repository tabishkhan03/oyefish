var splide1 = new Splide('#categorySlider', {
  perPage: 6,
  rewind: true,
  arrows: false,
  type: 'loop',
  autoplay: true,
  pagination: false,
  gap:"1rem",
 
  breakpoints: {
    1200: {
      perPage: 5,
     
    },
    992: {
      perPage: 4,
      arrows:true,
    },
    754: {
      perPage: 3,

    },
    576: {
      perPage: 2,

    },
 
  },
  
});
splide1.mount();

var splide2 = new Splide('#productsSlider', {
  type: 'loop',
  perPage: 4,
  gap:"1rem",
  // padding:"-1rem",
  breakpoints: {
    1200: {
      perPage: 3,
     
    },
    992: {
      perPage: 2,
  
    },
    450: {
      perPage: 1,
  
    },
   
  },
});
splide2.mount();

var splide3 = new Splide('#coustomerSlider', {
  type: 'loop',
  perPage: 3,
  gap:'3rem',
  breakpoints: {
    1200: {
      perPage: 3,
     
    },
    992: {
      perPage: 2,
  
    },
    600: {
      perPage: 1,
  
    },
   
  },
});
splide3.mount();


window.addEventListener("scroll",()=>{
  if (window.pageYOffset >80) {
    document.querySelector("header").classList.add("sticky-header");
    
  }
   else {
    document.querySelector("header").classList.remove("sticky-header");
  }
})

var menubtn=document.querySelector(".menu-svg-button")
menubtn.addEventListener("click",()=>{
  document.getElementById("menu-sect-id").classList.toggle("menu-section-add")
})