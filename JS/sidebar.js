const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebarTag = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', function(){
    sidebarTag.classList.add('show-sidebar');
});

closeBtn.addEventListener('click', function(){
    sidebarTag.classList.remove('show-sidebar');
})