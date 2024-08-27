
/*----------------------------------------- header -----------------------------------------*/

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    
    if (window.scrollY > 0) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});

/*----------------------------------------- faq -----------------------------------------*/

function faq(element){
    const content = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');

    content.classList.toggle('active');
    icon.classList.toggle('rotated');
}