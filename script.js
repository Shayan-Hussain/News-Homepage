let nav_list = document.querySelector(".nav_list");
if (window.innerWidth < 400) {
    if (nav_list) {
        nav_list.remove();
    }
    let main = document.querySelector(main);
    main.style = "padding: 20px";
    let nav_bar = doucment.querySelector(nav);
    nav_bar.style = "margin-left: 20px"

}