
let nav_list = document.querySelector(".nav_list");
let ham_img = `<img src="/assets/icon-menu.svg" alt="menu" class="ham_burger_icon">`

if (window.innerWidth < 380) {
    if (nav_list)   {
        nav_list.remove();
        let nav = document.querySelector("nav");
        nav.innerHTML += ham_img;
    }
}