import {SwiperSlide} from 'swiper/react';
export const sliderSettings =  {
    slidesPerView:1,
    spaceBetween:50,
    breakpoints:{
        480:{
            slidesPerView:1,

        },
        600:{
            slidesPerView:1,
        },
        750:{
            slidesPerView:2,
        },
        1020:{
            slidesPerView:3
        },
        1400:{
            slidesPerView:4
        }
    }

}