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