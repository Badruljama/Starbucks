function imgSlider(anything){
    document.querySelector('.img_1').src = anything;
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
function toggleMenu(){
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu-sec');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
};
