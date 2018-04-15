// Get a reference of DOM elements to use and store them in variables
const sysMenu = document.querySelector('.sys-main__menu');
sysMenu.addEventListener('click', function (e) {
    e.preventDefault();
    if( e.target != this ){
        sectionID = e.target.getAttribute('href');
        clickedSection = document.querySelector(sectionID);
        clickedSection.scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"});
    }

});

function showSLide(param) {
    param.classList.add('show');
}