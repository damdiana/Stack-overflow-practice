const filterButton = document.querySelector('#filterButton');
const filteringForm = document.querySelector('.filtering-form');
const navButton = document.querySelector('#navButton');
const sideNavBar = document.querySelector('.side-navbar');

filterButton.addEventListener("click", function () {
    filteringForm.classList.toggle('hidden');
    filterButton.classList.toggle('is--open');
});

navButton.addEventListener("click", function () {
    sideNavBar.classList.toggle('side-navbar--open');
})