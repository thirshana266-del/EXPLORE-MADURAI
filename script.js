let slideIndex = 0;
let slides;

function autoSlider(sliderId) {
  let slider = document.getElementById(sliderId);
  if(!slider) return; // slider illana skip pannidum

  let images = slider.getElementsByTagName("img");
  let current = 0;

  // Start la 1st image ah mattum kaatu
  for(let i=0; i<images.length; i++){
    images[i].classList.remove("active");
  }
  images[0].classList.add("active");

  setInterval(function() {
    images[current].classList.remove("active");

    current++;
    if(current >= images.length) {
      current = 0;
    }

    images[current].classList.add("active");
  }, 2000); // 2 seconds
}

window.onload = function() {
  autoSlider("slider1"); // Meenakshi
  autoSlider("slider2"); // Thirumalai Mahal
  autoSlider("slider3");
  autoSlider("slider4");
  autoSlider("slider5");
  autoSlider("slider6");
  autoSlider("slider7");
  autoSlider("slider8");
  autoSlider("slider9");
}
