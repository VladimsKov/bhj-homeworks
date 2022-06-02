const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));
const nextClick = document.querySelector('.slider__arrow_next');
const prevClick = document.querySelector('.slider__arrow_prev');
dots[0].className = 'slider__dot slider__dot_active';
let index = 0;

function sliderActive(index) {
    sliderItems[index].className = 'slider__item slider__item_active';
    dots[index].className = 'slider__dot slider__dot_active'; 
}

function sliderPassive(index) {
    sliderItems[index].className = 'slider__item';
    dots[index].className = 'slider__dot';
}

function nextSlider() {
    if (index < (sliderItems.length - 1)) {
        sliderPassive(index);
        index++;         
    } else {
        sliderPassive(sliderItems.length - 1);
        index = 0;
    }
    sliderActive(index);   
};

function PrevSlider() {
    if (index > 0) {
        sliderPassive(index);
        index--;        
    } else {
        index = sliderItems.length - 1;
        sliderPassive(0);
    }
    sliderActive(index);   
}

nextClick.onclick = nextSlider;
prevClick.onclick = PrevSlider;

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => {
        sliderPassive(index);
        sliderActive(i);
        index = i; 
    };
}

