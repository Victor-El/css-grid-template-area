const hamIcon = document.getElementById("ham");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

hamIcon.addEventListener('click', (e) => {
    toggleModal();
});

close.addEventListener('click', () => {
    toggleModal();
});

const toggleModal = () => {
    if (modal.style.display == "none") {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
}