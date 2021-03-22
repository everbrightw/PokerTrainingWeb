// Put your js code here
console.log("Hello World!");

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
// and highlight the current page's menu button
window.onscroll = function() {scrollFunction()};


const navBar = document.getElementById("navbar");
  
const homeSessionBtn = document.getElementById("home-menu");
const aboutSessionBtn = document.getElementById("about-menu");
const pokerVideoSessionBtn = document.getElementById("video-menu");
const studyResourcesSessionBtn = document.getElementById("study-menu");
const contactSessionBtn = document.getElementById("contact-menu");

const homeSession = document.getElementById("home");
const aboutSession = document.getElementById("about");
const pokerVideoSession = document.getElementById("video");
const studyResourcesSession = document.getElementById("study");
const contactSession = document.getElementById("contact");


// get modal 
const firstVideo = document.getElementById("one");
const modalElem = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalVideoElem = document.getElementById('modal-video');

firstVideo.addEventListener("click", function(e){
  console.log('image clicked');
  setupModal();
  console.log(modalVideoElem);
  modalVideoElem.src = "assets/home_page_video.mp4";
  modalElem.classList.add('show');
})

const menuBtn = document.getElementById("menu-btn");

var lastElement = homeSession;

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 80;
    return isVisible;
}

function scrollFunction() {

  console.log("window scrolling");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 13px";
    document.getElementById("logo").style.fontSize = "20px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "30px";
  }

  // highlight current page's menu button
  if(isScrolledIntoView(homeSession)){
      highlightCurrentSession(homeSessionBtn);
  }
  else if(isScrolledIntoView(aboutSession)){
      highlightCurrentSession(aboutSessionBtn);
  }
  else if(isScrolledIntoView(studyResourcesSession)){
      highlightCurrentSession(studyResourcesSessionBtn);
  }
  else if(isScrolledIntoView(pokerVideoSession)){
      highlightCurrentSession(pokerVideoSessionBtn);
  }
  else if(isScrolledIntoView(contactSession)){
      highlightCurrentSession(contactSessionBtn);
  }
}

function highlightCurrentSession(ele){
    console.log(ele);
    if(!ele.classList.contains("active")){
        ele.classList.add("active");
        lastElement.classList.remove("active");
        lastElement = ele;
    }
}



function setupModal() {
  console.log(modalCloseBtn);
  // Add close action
  modalCloseBtn.addEventListener('click', e => {
    if (!modalVideoElem.paused) modalVideoElem.pause();
    modalVideoElem.src = null;
    
    modalElem.classList.remove('show');
  });

}

// menuBtn.addEventListener("click", function(e){

// })