/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/







/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navList = document.getElementById("navbar__list");
const sections =document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


 


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function Navi(){
    for(const section of sections){
        //create li element
        const listItem = document.createElement('li');
        //create anchor element
        const link = document.createElement('a');
        //define secrionID and its name 
        const sectionId = section.id;
        const sectionName = section.dataset.nav;

        link.innerHTML = `<a id="sec_${sectionId}" href="#${sectionId}" class="menu__link">${sectionName}</a>`
        // the smooth move 
        link.addEventListener('click',(e)=>{
            e.preventDefault()
            section.scrollIntoView({behavior:"smooth"})
            
        });
        //append the anchor element to the list 
        listItem.appendChild(link);
        // build the navigation bar 
        navList.appendChild(listItem);

        
    }
}
// call the function 
 Navi();



 
 window.addEventListener('scroll', ()=> {

    //check if the section in viewport or not 
    sections.forEach(section=>{
        //get the section top dimension
        const top = section.getBoundingClientRect().top
        //get the section id 
        const activeLink = document.getElementById(`sec_${section.id}`);
        // if the section at this dimensions
        if(top > 0 && top < 200 ){
            //add the active classes 
            section.classList.add('your-active-class')
            activeLink.classList.add('active')
        } else{
            // remove the active classes 
            section.classList.remove('your-active-class')
            activeLink.classList.remove('active')
        }
    });
 });