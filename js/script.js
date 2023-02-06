{
  ('use strict');
  const projects = [
    {
      id: 1,
      name: 'projekt gabinetu stomatologicznego w Mysłowicach',
      image: [
        'images/gabinet/gabinet1.jpg', 
        'images/gabinet/gabinet2.jpg', 
        'images/gabinet/gabinet3.jpg', 
        'images/gabinet/gabinet4.jpg', 
        'images/gabinet/gabinet5.jpg', 
        'images/gabinet/gabinet6.jpg', 
        'images/gabinet/gabinet7.jpg',
        'images/gabinet/gabinet8.jpg',
        'images/gabinet/gabinet9.jpg',
        'images/gabinet/gabinet10.jpg',
        'images/gabinet/gabinet11.jpg',
        'images/gabinet/gabinet12.jpg',
      ],
      description: 'Tu bedzie opis projektu i takie takie. Lorem ipsum dolor sit amet, consectetur adi.'
    },
    {
      id: 2,
      name: 'projekt mieszkania na Nikiszowcu',
      image: [
        'images/nikisz/nikisz1.jpg', 
        'images/nikisz/nikisz2.jpg',
        'images/nikisz/nikisz3.jpg',
        'images/nikisz/nikisz4.jpg',
        'images/nikisz/nikisz5.jpg',
        'images/nikisz/nikisz6.jpg',
        'images/nikisz/nikisz7.jpg',
        'images/nikisz/nikisz8.jpg',
      ],
      description: 'Tu bedzie opis projektu i takie takie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ante vel ligula commod luctus in id sapien. Nullam venenatis erat quam, at volutpat arcufaucibus ac. Sed vitae aliquet neque, in rhoncus nisi. In hachabitasse platea dictumst. Integer id tristique ipsum. Curabiturcursus, sapien nec cursus egestas, neque lectus ultrices dui, sedtempus ante erat ut elit. Aliquam vel placerat odio. Duis luctus,justo malesuada fringilla efficitur, purus ante tempor turpis, nonlobortis nunc metus in nisl. Sed dui magna, auctor ac neque eu,mollis bibendum diam. Aenean rutrum velit eu magna varius gravida.Curabitur efficitur libero quis quam efficitur, a convallis anteultricies. Quisque eu lorem eget lorem rutrum interdum. Curabitureleifend tortor in tortor blandit egestas. Donec rhoncus, dui egetvarius laoreet, sem tellus aliquam orci, vitae tempor nibh lacus aquam. Nam vel mi hendrerit, vulputate felis non, iaculis ante.Quisque est diam, mattis at metus eget, mattis sagittis elit. Maurisut justo facilisis erat ultrices finibus. Nulla quis lorem mi. Nuncnec facilisis purus. Ut tortor ipsum, venenatis nec auctor non,vehicula vel ligula. Maecenas consectetur massa vulputate nislmolestie, efficitur sollicitudin diam viverra. Maecenas eget viverravelit. Suspendisse mollis, diam egestas malesuada mollis.'
    },
    {
      id: 3,
      name: 'projekt mieszkania w Katowicach Brynów',
      image: [
        'images/ania/ania1.jpg',
        'images/ania/ania2.jpg',
        'images/ania/ania3.jpg',
        'images/ania/ania4.jpg',
        'images/ania/ania5.jpg',
        'images/ania/ania6.jpg',
        'images/ania/ania7.jpg',
        'images/ania/ania8.jpg',
        'images/ania/ania9.jpg',
      ],
      description: 'Tu bedzie opis projektu i takie takie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ante vel ligula commod luctus in id sapien. Nullam venenatis erat quam, at volutpat arcufaucibus ac. Sed vitae aliquet neque, in rhoncus nisi. In hachabitasse platea dictumst. Integer id tristique ipsum. Curabiturcursus, sapien nec cursus egestas, neque lectus ultrices dui, sedtempus ante erat ut elit. Aliquam vel placerat odio. Duis luctus,justo malesuada fringilla efficitur, purus ante tempor turpis, nonlobortis nunc metus in nisl. Sed dui magna, auctor ac neque eu,mollis bibendum diam. Aenean rutrum velit eu magna varius gravida.Curabitur efficitur libero quis quam efficitur, a convallis anteultricies. Quisque eu lorem eget lorem rutrum interdum. Curabitureleifend tortor in tortor blandit egestas. Donec rhoncus, dui egetvarius laoreet, sem tellus aliquam orci, vitae tempor nibh lacus aquam. Nam vel mi hendrerit, vulputate felis non, iaculis ante.Quisque est diam, mattis at metus eget, mattis sagittis elit. Maurisut justo facilisis erat ultrices finibus. Nulla quis lorem mi. Nuncnec facilisis purus. Ut tortor ipsum, venenatis nec auctor non,vehicula vel ligula. Maecenas consectetur massa vulputate nislmolestie, efficitur sollicitudin diam viverra. Maecenas eget viverravelit. Suspendisse mollis, diam egestas malesuada mollis.'
    },
    {
      id: 4,
      name: 'projekt domu w Mikołowie',
      image: [
        'images/mikolow/mikolow1.jpg',
        'images/mikolow/mikolow2.jpg',
        'images/mikolow/mikolow3.jpg',
        'images/mikolow/mikolow4.jpg',
        'images/mikolow/mikolow5.jpg',
        'images/mikolow/mikolow6.jpg',
        'images/mikolow/mikolow7.jpg',
        'images/mikolow/mikolow8.jpg',
        'images/mikolow/mikolow9.jpg',
       
      ],
      description: 'Tu bedzie opis projektu i takie takie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ante vel ligula commod luctus in id sapien. Nullam venenatis erat quam, at volutpat arcufaucibus ac. Sed vitae aliquet neque, in rhoncus nisi. In hachabitasse platea dictumst. Integer id tristique ipsum. Curabiturcursus, sapien nec cursus egestas, neque lectus ultrices dui, sedtempus ante erat ut elit. Aliquam vel placerat odio. Duis luctus,justo malesuada fringilla efficitur, purus ante tempor turpis, nonlobortis nunc metus in nisl. Sed dui magna, auctor ac neque eu,mollis bibendum diam. Aenean rutrum velit eu magna varius gravida.Curabitur efficitur libero quis quam efficitur, a convallis anteultricies. Quisque eu lorem eget lorem rutrum interdum. Curabitureleifend tortor in tortor blandit egestas. Donec rhoncus, dui egetvarius laoreet, sem tellus aliquam orci, vitae tempor nibh lacus aquam. Nam vel mi hendrerit, vulputate felis non, iaculis ante.Quisque est diam, mattis at metus eget, mattis sagittis elit. Maurisut justo facilisis erat ultrices finibus. Nulla quis lorem mi. Nuncnec facilisis purus. Ut tortor ipsum, venenatis nec auctor non,vehicula vel ligula. Maecenas consectetur massa vulputate nislmolestie, efficitur sollicitudin diam viverra. Maecenas eget viverravelit. Suspendisse mollis, diam egestas malesuada mollis.'
    },
    {
      id: 5,
      name: 'projekt mieszkania w Warszawie',
      image: [
        'images/warszawa/warszawa1.JPG',
        'images/warszawa/warszawa2.JPG',
        'images/warszawa/warszawa3.JPG',
        'images/warszawa/warszawa4.JPG',
       
      ],
      description: 'Tu bedzie opis projektu i takie takie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ante vel ligula commod luctus in id sapien. Nullam venenatis erat quam, at volutpat arcufaucibus ac. Sed vitae aliquet neque, in rhoncus nisi. In hachabitasse platea dictumst. Integer id tristique ipsum. Curabiturcursus, sapien nec cursus egestas, neque lectus ultrices dui, sedtempus ante erat ut elit. Aliquam vel placerat odio. Duis luctus,justo malesuada fringilla efficitur, purus ante tempor turpis, nonlobortis nunc metus in nisl. Sed dui magna, auctor ac neque eu,mollis bibendum diam. Aenean rutrum velit eu magna varius gravida.Curabitur efficitur libero quis quam efficitur, a convallis anteultricies. Quisque eu lorem eget lorem rutrum interdum. Curabitureleifend tortor in tortor blandit egestas. Donec rhoncus, dui egetvarius laoreet, sem tellus aliquam orci, vitae tempor nibh lacus aquam. Nam vel mi hendrerit, vulputate felis non, iaculis ante.Quisque est diam, mattis at metus eget, mattis sagittis elit. Maurisut justo facilisis erat ultrices finibus. Nulla quis lorem mi. Nuncnec facilisis purus. Ut tortor ipsum, venenatis nec auctor non,vehicula vel ligula. Maecenas consectetur massa vulputate nislmolestie, efficitur sollicitudin diam viverra. Maecenas eget viverravelit. Suspendisse mollis, diam egestas malesuada mollis.'
    },
    {
      id: 6,
      name: 'projekt drugiego mieszkania na Nikiszowcu',
      image: [
        'images/gruby/gruby1.jpg',
        'images/gruby/gruby2.jpg',
        'images/gruby/gruby3.jpg',
        'images/gruby/gruby4.jpg',
        'images/gruby/gruby5.jpg',
        'images/gruby/gruby6.jpg',
      ],
      description: 'Tu bedzie opis projektu i takie takie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ante vel ligula commod luctus in id sapien. Nullam venenatis erat quam, at volutpat arcufaucibus ac. Sed vitae aliquet neque, in rhoncus nisi. In hachabitasse platea dictumst. Integer id tristique ipsum. Curabiturcursus, sapien nec cursus egestas, neque lectus ultrices dui, sedtempus ante erat ut elit. Aliquam vel placerat odio. Duis luctus,justo malesuada fringilla efficitur, purus ante tempor turpis, nonlobortis nunc metus in nisl. Sed dui magna, auctor ac neque eu,mollis bibendum diam. Aenean rutrum velit eu magna varius gravida.Curabitur efficitur libero quis quam efficitur, a convallis anteultricies. Quisque eu lorem eget lorem rutrum interdum. Curabitureleifend tortor in tortor blandit egestas. Donec rhoncus, dui egetvarius laoreet, sem tellus aliquam orci, vitae tempor nibh lacus aquam. Nam vel mi hendrerit, vulputate felis non, iaculis ante.Quisque est diam, mattis at metus eget, mattis sagittis elit. Maurisut justo facilisis erat ultrices finibus. Nulla quis lorem mi. Nuncnec facilisis purus. Ut tortor ipsum, venenatis nec auctor non,vehicula vel ligula. Maecenas consectetur massa vulputate nislmolestie, efficitur sollicitudin diam viverra. Maecenas eget viverravelit. Suspendisse mollis, diam egestas malesuada mollis.'
    },
    {
      id: 7,
      name: 'projekt czegoś tam',
      image: [],
      description: 'Tu bedzie opis projektu i takie takie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ante vel ligula commod luctus in id sapien. Nullam venenatis erat quam, at volutpat arcufaucibus ac. Sed vitae aliquet neque, in rhoncus nisi. In hachabitasse platea dictumst. Integer id tristique ipsum. Curabiturcursus, sapien nec cursus egestas, neque lectus ultrices dui, sedtempus ante erat ut elit. Aliquam vel placerat odio. Duis luctus,justo malesuada fringilla efficitur, purus ante tempor turpis, nonlobortis nunc metus in nisl. Sed dui magna, auctor ac neque eu,mollis bibendum diam. Aenean rutrum velit eu magna varius gravida.Curabitur efficitur libero quis quam efficitur, a convallis anteultricies. Quisque eu lorem eget lorem rutrum interdum. Curabitureleifend tortor in tortor blandit egestas. Donec rhoncus, dui egetvarius laoreet, sem tellus aliquam orci, vitae tempor nibh lacus aquam. Nam vel mi hendrerit, vulputate felis non, iaculis ante.Quisque est diam, mattis at metus eget, mattis sagittis elit. Maurisut justo facilisis erat ultrices finibus. Nulla quis lorem mi. Nuncnec facilisis purus. Ut tortor ipsum, venenatis nec auctor non,vehicula vel ligula. Maecenas consectetur massa vulputate nislmolestie, efficitur sollicitudin diam viverra. Maecenas eget viverravelit. Suspendisse mollis, diam egestas malesuada mollis.'
    },
  ];




  const template = {
    // projectLink: Handlebars.compile(document.querySelector('#template-project-link').innerHTML),
    projects: Handlebars.compile(document.querySelector('#template-projects').innerHTML),
    projectsList: Handlebars.compile(document.querySelector('#template-projects-list').innerHTML),
  };

  // eslint-disable-next-line no-inner-declarations
  function createDOMFromHTML(htmlString) {
    let div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }



  const select = {
    all: {
      project: '.project',
      contact: '.contact',
      projectTitle: '.project-title',
    },
    listOf: {
      projects: '.projects.list',
      contact: '.list.contacts',
    },
    containerOf: {
      projectsList: '.sidebar',
      projects: '.content',
    }
  };


  
  for (let project of projects){
    
    const generatedHtml = template.projects(project);

    const generatedTitleHtml = template.projectsList(project);
    console.log('generatedTitleHtml', generatedTitleHtml);
    const element2 =createDOMFromHTML(generatedTitleHtml);
    
    
    const element = createDOMFromHTML(generatedHtml);
    
    const projectWrapper = document.querySelector(select.containerOf.projects);
    
    projectWrapper.appendChild(element);

    

    
    const projectListWrapper = document.querySelector(select.containerOf.projectsList);
    console.log('projectListWrapper', projectListWrapper);
    projectListWrapper.appendChild(element2);
    
    

    

  }

  
  

  


  
  // const listClickHandler = function (event) {
  //   event.preventDefault();
  //   const clickedLink = this;
  //   /* remove class'active' from all links */
  //   const projectLinks = document.querySelectorAll('.list a.active');
  //   for (const projectlink of projectLinks) {
  //     projectlink.classList.remove('active');
  //   }
  //   /* add class 'active' to clicked link */
  //   clickedLink.classList.add('active');

  //   /* remove class 'active' from all projects and contacts */
  //   const projects = document.querySelectorAll(select.all.project);
  //   for (const project of projects) {
  //     project.classList.remove('active');
  //   }
  //   const contacts = document.querySelectorAll(select.all.contact);
  //   for (const contact of contacts) {
  //     contact.classList.remove('active');
  //   }
  //   /* get href attribute from cklicked link */
  //   const projectAttribute = clickedLink.getAttribute('href');

  //   /* find project with href attribute */
  //   const targetProject = document.querySelector(projectAttribute);

  //   /* add to project class 'active */
  //   targetProject.classList.add('active');
  // };

  // const generateProjectList = function () {
  //   const projectList = document.querySelector(select.listOf.projects);

  //   projectList.innerHTML = '';

  //   const projects = document.querySelectorAll(select.all.project);

  //   let titleList = '';
  //   for (let project of projects) {
  //     const projectID = project.getAttribute('id');

  //     const projectTitleElement = project.querySelector('.project-title');

  //     const projectTitle = projectTitleElement.innerHTML;
  //     // const projectLinkHtml = '<li><a href = "#' + projectID + '">' + projectTitle + '</a></li>';
  //     const linkHTMLData = { id: projectID, title: projectTitle };

  //     const projectLinkHtml = templates.projectLink(linkHTMLData);

  //     titleList = titleList + projectLinkHtml;
  //   }
  //   projectList.innerHTML = titleList;

  //   const links = document.querySelectorAll('.list a');

  //   for (const link of links) {
  //     link.addEventListener('click', listClickHandler);
  //   }
  // };

  // generateProjectList();


 
  

  










}


  
