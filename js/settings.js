export const templates = {
  projectsList: Handlebars.compile(document.querySelector('#template-projects-list').innerHTML),
  contactList: Handlebars.compile(document.querySelector('#template-contact-list').innerHTML),
  projects: Handlebars.compile(document.querySelector('#template-projects').innerHTML),
};

export const select = {
  all: {
    project: '.project',
    links: '.list a',
  },
  listOf: {
    projects: '.projects.list',
    contact: '.list.contacts',
  },
  containerOf: {
    projectsList: '.sidebar',
    projects: '.content',
    contacts: '.content',
    
  }
};

