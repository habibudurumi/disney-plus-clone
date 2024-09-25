const clip = document.querySelectorAll('.clip');
const box = document.querySelectorAll(".video-box")
const faqs = document.querySelectorAll('.accordion')
const icon = document.querySelectorAll("icon")


const imageContainer = document.querySelector('.image-container')
const right = document.querySelector('#right')
const left = document.querySelector('#left')

const secondImageContainer = document.querySelector('.s-image-container')
const secondRight = document.querySelector('#s-right')
const secondLeft = document.querySelector('#s-left')

const firstImageContainer = document.querySelector('.f-image-container')
const firstRight = document.querySelector('#f-right')
const firstLeft = document.querySelector('#f-left')




for (let i = 0; i < clip.length; i++){
    clip[i].addEventListener('mouseenter', function () {
        clip[i].play();
    })
    clip[i].addEventListener('mouseleave', function () {
        clip[i].pause();
        clip[i].currentTime = 0;
    })
}  


// accordion

faqs.forEach(faq => {
    faq.addEventListener('click', ()=> {
        faq.classList.toggle("active");
    })
})

// image slider

imageContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    imageContainer.scrollLeft += e.deltaY;
})

right.addEventListener('click', () => {
    imageContainer.style.scrollBehavior = "smooth"
    imageContainer.scrollLeft += 900;
})
left.addEventListener('click', () => {
    imageContainer.style.scrollBehavior = "smooth"
    imageContainer.scrollLeft -= 900;
})


secondImageContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    secondImageContainer.scrollLeft += e.deltaY;
})

secondRight.addEventListener('click', () => {
    secondImageContainer.style.scrollBehavior = "smooth"
    secondImageContainer.scrollLeft += 900;
})
secondLeft.addEventListener('click', () => {
    secondImageContainer.style.scrollBehavior = "smooth"
    secondImageContainer.scrollLeft -= 900;
})


firstImageContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    firstImageContainer.scrollLeft += e.deltaY;
})

firstRight.addEventListener('click', () => {
    firstImageContainer.style.scrollBehavior = "smooth"
    firstImageContainer.scrollLeft += 900;
})
firstLeft.addEventListener('click', () => {
    firstImageContainer.style.scrollBehavior = "smooth"
    firstImageContainer.scrollLeft -= 900;
})