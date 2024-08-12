const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu (){
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if(menuHamburguer.classList.contains('change')){
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}
document.querySelectorAll('.toggle-button').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const textContainer = this.previousElementSibling;

        if (textContainer.classList.contains('expanded')) {
            textContainer.classList.remove('expanded');
            this.textContent = 'Leia mais';
        } else {
            textContainer.classList.add('expanded');
            this.textContent = 'Leia menos';
        }
    });
});