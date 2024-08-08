const main = document.getElementsByTagName("main")[0]
const header = document.getElementsByTagName("header")[0]
const nav = document.getElementsByTagName("nav")[0]
const button_menu = document.getElementById("button-menu")


button_menu.addEventListener('click', () => {
    header.classList.add("closed")
    nav.classList.add("closed")
    main.classList.add("closed")
})