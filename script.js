// for navbar responsive
let MenuBtn = document.querySelector("#MenuBtn")
let Navbar = document.querySelector(".NavbarMain")

MenuBtn.onclick = () => {
    MenuBtn.classList.toggle("fa-times");
    Navbar.classList.toggle("active");
    themeToggle.classList.remove("active");
};

window.onscroll = () =>{
    MenuBtn.classList.remove("fa-times");
    Navbar.classList.remove("active"); 
    themeToggle.classList.remove("active"); 
}


// for swiper
var swiper = new swiper(".RecentEventsSlider",{
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 11,
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        700: {
            slidesPerView:2,
        },
        1050: {
            slidesPerView:3,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction:false,
    },
});

//to toggle theme

let themeToggle = document.querySelector(".theme-toggle");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
    themeToggle.classList.toggle("active");
    MenuBtn.classList.remove("fa-times");
    Navbar.classList.remove("active"); 
};
document.querySelectorAll(".theme-toggle .theme-btn").forEach((btn) =>{
    btn.onclick = () => {
        let color = btn.computedStyleMap.background;
        document.querySelector(":root").computedStyleMap.setProperty("--main", color);
    };
});