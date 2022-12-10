'use strict';

const listClickHandler = function (event) {
    event.preventDefault ();
    const clickedLink = this;
    console.log("link was clicked");

    /* remove class'active' from all links */
    const projectLinks = document.querySelectorAll('.list a.active');
    for(let projectlink of projectLinks){
        projectlink.classList.remove('active');
    }

    /* add class 'active' to clicked link */
    clickedLink.classList.add('active');

    /* remove class 'active' from all projects and contacts*/
    const projects = document.querySelectorAll('.project');
    for(let project of projects){
        project.classList.remove('active');
    }
    const contacts = document.querySelectorAll('.contact');
    for(let contact of contacts){
        contact.classList.remove('active');
    } 

    /* get href attribute from cklicked link */
    const projectAttribute = clickedLink.getAttribute('href');
    

    /* find project with href attribute */
    const targetProject = document.querySelector(projectAttribute);
    

    /* add to project class 'active */
    targetProject.classList.add('active')

    
}
const links = document.querySelectorAll('.list a');
    
    for(let link of links){
        link.addEventListener('click', listClickHandler);
        
    }

    