const dropdown = () => {
    document.querySelector(".header__menu--dropdown").addEventListener('click', () => {
        document.querySelector(".header__menu--dropdown-list").classList.toggle("show");
    })
}

export default dropdown;
