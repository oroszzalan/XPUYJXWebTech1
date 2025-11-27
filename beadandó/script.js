var nevek = {

    0: {
        cim: "KONFIGURÁLD <br>REVUELTO",
        alcim: "FROM NOW ON",
        videoURL:"revuelto.mp4",
    },
    1: {
        cim: "KONFIGURÁLD <br>HURACÁN STO",
        alcim: "BASED ON TRUE STORY",
        videoURL:"STO.mp4",
    },
    2: {
        cim: "KONFIGURÁLD <br>BMW M4 2014",
        alcim: "Unleash the Beast",
        videoURL:"2014BMW.mp4",
    },
    3: {
        cim: "KONFIGURÁLD <br>MCLAREN 675LT",
        alcim: "WHEN SPEED SPEAKS",
        videoURL:"675lt.mp4",
    },
    4: {
        cim: "KONFIGURÁLD <br>MCLAREN P1",
        alcim: "PURE POWER, ZERO LIMITS",
        videoURL:"P1.mp4",
    },
}

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
    });
});

var overlay = document.querySelector(".overlay");
var carVideo = document.getElementById("#Revuelto-video");

var showTrailer =() => {
    var index = swiper.activeIndex;
    videoContainer.innerHTML = `<video controls autoplay id = "video">
        <source src="kepek/${nevek[index].videoURL}" type="video/mp4">
    </video>`;
    overlay.classList.add("show");
};


