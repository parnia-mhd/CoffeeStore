// const toggleThemeBtns = document.querySelectorAll(".toggle-theme");



// toggleThemeBtn.addEventListener("click", () => {
//     if (localStorage.theme === "dark") {
//         document.documentElement.classList.remove("dark");
//         localStorage.theme = "light";
//     } else {
//         document.documentElement.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//     }
// })


// ***********************
// check user last swith theme btn history
// if (
//     localStorage.theme === "dark" ||
//     (!("theme" in localStorage) &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//     document.documentElement.classList.add("dark");
// } else {
//     document.documentElement.classList.remove("dark");
// }

// const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
// const submenuMenuBtn = document.querySelector(".submenu-open-btn");
// const submenu = document.querySelector(".submenu");
// const arrowDown = document.querySelector(".arrow-down");
// const navOpenBtn = document.querySelector(".nav-icon");
// const navSection = document.querySelector(".nav");
// const overlay = document.querySelector(".overlay");
// const navCloseBtn = document.querySelector(".nav-close-btn");
// const cart = document.querySelector(".cart");
// const cartBox = document.querySelector(".cart-box");
// const closeBtn = document.querySelector(".close-btn-cart");

//  change  light / dark them function
// const changTheme = () => {
//     if (localStorage.theme === "dark") {
//         document.documentElement.classList.remove("dark");
//         localStorage.theme = "light";
//     } else {
//         document.documentElement.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//     }
// };
// const cartOpenBox = () => {
//     cartBox.classList.remove("-left-64");
//     cartBox.classList.add("left-0");
//     overlay.classList.add("open");

// };
// const cartCloseBox = () => {
//     cartBox.classList.remove("left-0");
//     cartBox.classList.add("-left-64");
//     overlay.classList.remove("open");
// };
// const closNavFunc = () => {
//     navSection.classList.remove("right-0");
//     overlay.classList.remove("open");

// };

// toggle them event
// toggleThemeBtn.forEach((btn) => {
//     btn.addEventListener("click", changTheme);
// });

//  open sub menu is movile design
// submenuMenuBtn.addEventListener("click", function (e) {
//     e.currentTarget.parentElement.classList.toggle("text-orange-300");

//     arrowDown.classList.toggle("rotate-90");
//     submenu.classList.toggle("flex");
// });

// //  ham menu fuction
// navOpenBtn.addEventListener("click", function () {
//     navSection.classList.remove("-right-64");
//     navSection.classList.add("right-0");
//     overlay.classList.add("open");
// });
// // close nav btn
// navCloseBtn.addEventListener("click", closNavFunc);
// overlay.addEventListener("click", closNavFunc);
// overlay.addEventListener("click", cartCloseBox);
// //  cart box open
// cart.addEventListener("click", cartOpenBox);
// //  cart box close
// closeBtn.addEventListener("click", cartCloseBox);


// /***********


// my js code

// variables

const toggleThemeBtns = document.querySelectorAll(".toggle-theme")
const subMenu = document.querySelector(".submenu")
const subMenuArrow = document.querySelector(".submenu-open-btn")
const parentSubmenu = document.querySelector(".parent-submenu")
const sideBarNav = document.querySelector(".nav")
const closeSidebarNav = document.querySelector(".x-mark")
const sidebarIcon = document.querySelector(".nav-icon")
const overlay = document.querySelector(".overlay")
const cartIcon = document.querySelector(".cart-icon")
const cartSidebar = document.querySelector(".cart")
const cartXbtn = document.querySelector(".cart-x-mark")

// toggle theme event
toggleThemeBtns.forEach(btn => {

    btn.addEventListener("click", function (event) {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    });
});

// sidebar menu

subMenu.style.display = "none";

subMenuArrow.addEventListener("click", function () {
    subMenuArrow.classList.toggle("rotate-180");
    parentSubmenu.classList.toggle("text-orange-300")
    if (subMenu.style.display === "none") {
        subMenu.style.display = "flex"
    } else {
        subMenu.style.display = "none";
    }
})
// show sidebar icon
sidebarIcon.addEventListener("click", function () {
    sideBarNav.classList.remove("-right-64")
    sideBarNav.classList.add("right-0")
    overlay.classList.add("overlay-visible")
})
// sidebar icon x

closeSidebarNav.addEventListener("click", function () {
    sideBarNav.classList.remove("right-0")
    sideBarNav.classList.add("-right-64")
    overlay.classList.remove("overlay-visible")

})

overlay.addEventListener("click", function () {
    sideBarNav.classList.remove("right-0")
    sideBarNav.classList.add("-right-64")
    overlay.classList.remove("overlay-visible")

})

// cart sidebar menu
cartIcon.addEventListener("click", function () {
    cartSidebar.classList.remove("-left-64")
    cartSidebar.classList.add("left-0")
    overlay.classList.add("overlay-visible")

})

// close cart sidebar menu

cartXbtn.addEventListener("click", function () {
    cartSidebar.classList.remove("left-0")
    cartSidebar.classList.add("-left-64")
    overlay.classList.remove("overlay-visible")

})
overlay.addEventListener("click", function () {
    cartSidebar.classList.remove("left-0")
    cartSidebar.classList.add("-left-64")
    overlay.classList.remove("overlay-visible")
})
