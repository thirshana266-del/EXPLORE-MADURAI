function autoSlider(sliderId){
    const slider=document.getElementById(sliderId);
    if(!slider) return;
    const images = slider.querySelectorAll("img");
    let current=0;

    images.forEach(img => img.classList.remove("active"));
    images[0].classList.add("active");

    setInterval(()=>{
        images[current].classList.remove("active");
        current=(current + 1) % images.length;
        images[current].classList.add("active");
    },2000);
}

document.addEventListener("DOMContentLoaded",() =>{
    autoSlider("vaigaiSlider");
    autoSlider("tnmSlider1");
    autoSlider("gandhiSlider2");
    autoSlider("fallsSlider3");
    autoSlider("keeladiSlider4");
});