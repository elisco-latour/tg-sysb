// Get a reference of DOM elements to use and store them in variables
const sysMenu = document.querySelector('.sys-main__menu');
sysMenu.addEventListener('click', function (e) {
    sectionID = e.target.getAttribute('href');
    if( sectionID.charAt(0) === "#" ){
        e.preventDefault();
        clickedSection = document.querySelector(sectionID);
        clickedSection.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    }

});