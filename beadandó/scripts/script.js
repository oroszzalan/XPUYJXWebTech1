var nevek = {
    0: {
        cim: "KONFIGURÁLD <br>REVUELTO",
        alcim: "FROM NOW ON",
        videoURL: "revuelto.mp4",
        logo: "Lamborghini-Logo.png"
    },
    1: {
        cim: "KONFIGURÁLD <br>HURACÁN STO",
        alcim: "BASED ON TRUE STORY",
        videoURL: "STO.mp4",
        logo: "Lamborghini-Logo.png"
    },
    2: {
        cim: "KONFIGURÁLD <br>MCLAREN P1",
        alcim: "PURE POWER, ZERO LIMITS",
        videoURL: "P1.mp4",
        logo: "mclaren.png"
    },
    3: {
        cim: "KONFIGURÁLD <br>BMW M4 2014",
        alcim: "WHEN SPEED SPEAKS",
        videoURL: "2014BMW.mp4",
        logo: "BMW.png"
    },
    4: {
        cim: "KONFIGURÁLD <br>BMW M3 G80 2022",
        alcim: "Unleash the Beast",
        videoURL: "2022BMW.mp4",
        logo: "BMW.png"  
    }
};

var externalPages = [
    "revuelto.html",
    "sto.html",
    "mclaren.html",
    "bmw2014.html",
    "bmw2022.html"
];

var thumbsSwiper = new Swiper(".thumbsSwiper", 
{
    spaceBetween: 10,
    slidesPerView: 3,
    breakpoints: {
        200: {
            slidesPerView: 2,
        },
        400: {
            slidesPerView: 3,
        },
    },

});

const swiper = new  Swiper(".bannerSwiper", {

    spaceBetween: 0,

    allowTouchMove: true,

    speed: 1000,

    thumbs: {
        swiper: thumbsSwiper,
    },


});


var explore = document.querySelectorAll(".explore");

var thumbs = document.querySelector(".thumbs");
var headers = document.querySelectorAll(".title");
var contents = document.querySelectorAll(".content");
var slideBtns = document.querySelectorAll(".slide-btn");
var closeBtns = document.querySelectorAll(".close-btn");
var buyBtns = document.querySelectorAll(".buy-btn");

buyBtns.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        window.location.href = externalPages[index];
    });
});




explore.forEach((el) => { 
    el.addEventListener("click", function() {

        thumbs.classList.add("hide");
        headers.forEach((e) => { 
            e.classList.add("hide");
        });
        el.classList.add("hide");
        document.querySelector(".swiper-slide-active").classList.add("hide");


        contents.forEach((e) => {
            e.classList.add("hide");
        });

    });
});

slideBtns.forEach(el => { 
    el.addEventListener("click", function() {
        document.querySelector(".swiper-slide-active").classList.remove("hide");
        document.querySelector(".swiper-slide-active").classList.add("details");

        let activeSlide = document.querySelector(".swiper-slide-active");
        let buyBtn = activeSlide.querySelector(".buy-btn");
        if (buyBtn) buyBtn.style.display = "block";
    });
});


closeBtns.forEach(el =>{ 
    el.addEventListener("click", function() {
        thumbs.classList.remove("hide");
        document.querySelector(".swiper-slide-active").classList.remove("details");
        contents.forEach((e) => {
            e.classList.remove("hide");
        });
        headers.forEach((e) => { 
            e.classList.remove("hide");
        });
        explore.forEach((e) => { 
            e.classList.remove("hide");
        });

        let activeSlide = document.querySelector(".swiper-slide-active");
        let buyBtn = activeSlide.querySelector(".buy-btn");
        if (buyBtn) buyBtn.style.display = "none";
    });
});


var overlay = document.querySelector(".overlay");
var videoContainer = document.getElementById("car-video");

var showTrailer =() => {
    var index = swiper.activeIndex;
    videoContainer.innerHTML = `<video controls autoplay id = "video">
        <source src="kepek/${nevek[index].videoURL}" type="video/mp4">
    </video>`;
    overlay.classList.add("show");
};

var closeOverlay =() => {
    var video = document.getElementById("video");
    video.pause();
    overlay.classList.remove("show");
}

changeTitle = (index) => {
    const data = nevek[index] || {};
    const title = document.querySelector("#title");
    const subTitle = document.querySelector("#subtitle");
    const logoImgs = document.querySelectorAll('img.logo');
    const logoPath = `kepek/${data.logo ?? "Lamborghini-Logo.png"}`;

    logoImgs.forEach(img => img && (img.src = logoPath));
    if (title) title.innerHTML = `<h1>${data.cim ?? ""}</h1>`;
    if (subTitle) subTitle.innerHTML = `<p>${data.alcim ?? ""}</p>`;
};

swiper.on("slideChange", () => changeTitle(swiper.activeIndex || 0));
// első beállítás betöltéskor
changeTitle(swiper.activeIndex || 0);