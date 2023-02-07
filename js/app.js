import utils from './functions.js';
import { templates, select } from './settings.js';
import data from './data.js';

{
  ('use strict');
  
  for (const project of data.projects){

    utils.generateList(templates.projectsList(project), select.listOf.projects);
  
    utils.generateText(templates.projects(project), select.containerOf.projects);
    
  }
  for (const contact of data.contacts){
    utils.generateList(templates.contactList(contact), select.listOf.contact);

    utils.generateText(templates.projects(contact), select.containerOf.projects);
  
  }


  const links = document.querySelectorAll(select.all.links);
  
  for (const link of links) {
    link.addEventListener('click', function(event){
      event.preventDefault();
      const clickedLink = this;
     
      /* remove class'active' from all links */
      const projectLinks = document.querySelectorAll('.list a.active');
      
      for (const projectlink of projectLinks) {
        projectlink.classList.remove('active');
      }
      /* add class 'active' to clicked link */
      clickedLink.classList.add('active');

      /* remove class 'active' from all projects and contacts */
      const projects = document.querySelectorAll(select.all.project);
          
      for (const project of projects) {
        project.classList.remove('active');
      }
  
      const hrefAttribute = clickedLink.getAttribute('href');

      const projectId = hrefAttribute.substring(1,15);
     
      const targetProject = document.getElementById(projectId);
     
      targetProject.classList.add('active');
      
    });
  }
}


  
