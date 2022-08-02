/* MAKE A LITTLE ANIMATION */
// 

// DOM
const sections = document.querySelectorAll('.section');
const contBtns = document.querySelectorAll('.continue');

// CONTINUE BTN
let curr = 0;
contBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // END LIST 
        curr++;
        if(curr > sections.length - 1) {
            alert("You reached the end of the list");
            curr = sections.length - 1;
        }
        sections.forEach((sect) => sect.classList.add('d-none'));
        sections[curr].classList.remove('d-none');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
})

// BACK BTN
// 
// DOM
const backBtns = document.querySelectorAll('.back');
// ITERATE
backBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        curr--;
        sections.forEach((sect) => {
            sect.classList.add('d-none');
        });
        sections[curr].classList.remove('d-none');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})

// SPORTS SECTION
// 

// DOM
const boxes = document.querySelectorAll('.sport--box');
// ITERATE
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
})