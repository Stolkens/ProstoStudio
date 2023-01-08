{
  'use strict';

  const select = {
    all: {
      project: '.project',
      contact: '.contact',
      projectTitle: '.project-title',
    },
    listOf: {
      projects: '.projects.list',
      contact: '.list.contacts' 
    }
  };
 




  const listClickHandler = function (event) {
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
    const contacts = document.querySelectorAll(select.all.contact);
    for (const contact of contacts) {
      contact.classList.remove('active');
    }
    /* get href attribute from cklicked link */
    const projectAttribute = clickedLink.getAttribute('href');

    /* find project with href attribute */
    const targetProject = document.querySelector(projectAttribute);

    /* add to project class 'active */
    targetProject.classList.add('active');
  };
  

  const generateProjectList = function (){
    const projectList = document.querySelector(select.listOf.projects);
    console.log('projectlist', projectList);
    projectList.innerHTML = '';
    console.log('projectList', projectList.innerHTML);
    const projects = document.querySelectorAll(select.all.project);
    console.log('projects', projects);
    let titleList = '';
    for(let project of projects){
      const projectID = project.getAttribute('id');
      console.log('projectID', projectID);
      const projectTitleElement = project.querySelector('.project-title');
      console.log('projectTitle', projectTitleElement);
      const projectTitle = projectTitleElement.innerHTML;
      const projectLinkHtml = '<li><a href = "#' + projectID + '">' + projectTitle + '</a></li>';
      console.log('projectlinkhtml', projectLinkHtml);
      titleList = titleList + projectLinkHtml;
      
    }
    projectList.innerHTML = titleList;
    console.log('titlelist', titleList);
    const links = document.querySelectorAll('.list a');

    for (const link of links) {
      link.addEventListener('click', listClickHandler);
    }

  };

  generateProjectList ();



}
