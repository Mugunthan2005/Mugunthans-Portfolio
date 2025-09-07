// animation library files

  AOS.init({
    duration: 1000,  // animation duration (1s)
    easing: "ease-in-out", // smooth easing
    once: false,       // animate only once
    mirror:true
  });



let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {
  let top = window.scrollY; // 1
  sections.forEach((sec) => {
    let offset = sec.offsetTop - 100; // 2
    let height = sec.offsetHeight; // 3
    let id = sec.getAttribute("id"); // 4

    if (top >= offset && top < offset + height) {
      // 5
      navLinks.forEach((link) => link.classList.remove("active")); // 6
      let activeLink = document.querySelector("nav a[href='#" + id + "']"); // 7
      if (activeLink) activeLink.classList.add("active"); // 8
    }
  });
};





//show menu

const menu=document.querySelector('.menu')
const menulist=document.querySelector('.nav-links')

menu.addEventListener('click' ,()=>{
  menulist.classList.toggle("active");
  const icon = menu.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times"); // changes to X
})

