//Menu functions
$(function() {
    $('.close-button').on('click', function() {
        $('.menu').toggleClass('menu_hover');
    });
    $('.close-button_hover').on('click', function() {
        $('.close-button').toggleClass('close-button_hover');
    });
    $('.close-button_hover').on('click', function() {
        $('.menu-layout').toggleClass('menu-layout_hover');
    });
});

$(function() {
    $('.menu-button').on('click', function() {
        $('.menu').toggleClass('menu_hover');
    });
    $('.menu-button').on('click', function() {
        $('.close-button').toggleClass('close-button_hover');
    });
    $('.menu-button').on('click', function() {
        $('.menu-layout').toggleClass('menu-layout_hover');
    });
});

$(function() {
    $('.menu__link').on('click', function() {
        $('.menu').toggleClass('menu_hover');
    });
    $('.menu__link').on('click', function() {
        $('.close-button').toggleClass('close-button_hover');
    });
    $('.menu__link').on('click', function() {
        $('.menu-layout').toggleClass('menu-layout_hover');
    });
});

$(function() {
    $('.menu-layout').on('click', function() {
        $('.menu-layout').toggleClass('menu-layout_hover');
    });
    $('.menu-layout').on('click', function() {
        $('.close-button').toggleClass('close-button_hover');
    });
    $('.menu-layout').on('click', function() {
        $('.menu').toggleClass('menu_hover');
    });
});

//slider 
const images = document.querySelectorAll('.slider .slider-block img');
const sliderBlock = document.querySelector('.slider-block');
let count = 1;
let width;
function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderBlock.style.width = width*images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    console.log(width);
    rollSlider();
}
window.addEventListener('resize', init);
init();
document.querySelector('.button-right').addEventListener('click', function() {
    count++;
    if(count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.button-left').addEventListener('click', function() {
    count--;
    if(count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderBlock.style.transform = 'translate(-'+count * width + 'px)';
}
    