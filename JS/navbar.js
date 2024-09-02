const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    if(navLinks.classList.contains('open-links')){
        navLinks.classList.remove('open-links')
    }else{
        navLinks.classList.add('open-links')
    }
})