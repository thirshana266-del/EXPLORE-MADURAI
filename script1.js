
function autoSlider(sliderId) {
  let slider = document.getElementById(sliderId);
  if(!slider) return;

  let images = slider.getElementsByTagName("img");
  let current = 0;

  setInterval(function() {
    images[current].classList.remove("active"); // current ah hide

    current++;
    if(current >= images.length) {
      current = 0; // last vandha mela irundhu start
    }

    images[current].classList.add("active"); // next ah kaatu
  }, 2000); // 2000ms = 2 seconds
}

// Page load aaguna udane start aaganum
window.onload = function() {
  autoSlider("templeSlider1"); 
  autoSlider("templeSlider2"); 
  autoSlider("templeSlider3");  
  autoSlider("templeSlider4");  
  autoSlider("templeSlider5"); 
  autoSlider("templeSlider6"); 
  autoSlider("templeSlider7"); 
  autoSlider("templeSlider8");  
  autoSlider("templeSlider9");  
  autoSlider("templeSlider10"); 
  autoSlider("templeSlider11"); 
  autoSlider("templeSlider12"); 
  autoSlider("templeSlider13"); 

}