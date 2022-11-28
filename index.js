const filterButton = document.querySelector('#filterButton');
const filteringForm = document.querySelector('.filtering-form');

filterButton.addEventListener("click", function () {
    filteringForm.classList.toggle('hidden');
    filterButton.classList.toggle('is--open');
});
