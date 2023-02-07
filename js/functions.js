const utils = {}; // eslint-disable-next-line no-inner-declarations


utils.createDOMFromHTML = function(htmlString){ 
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

utils.generateList = function(generatedList, wrapperClass){
  const element = utils.createDOMFromHTML(generatedList);
  const wrapper = document.querySelector(wrapperClass);
  wrapper.appendChild(element);
};

utils.generateText = function(generatedHtml, wrapperClass){
  const element = utils.createDOMFromHTML(generatedHtml);
  const wrapper = document.querySelector(wrapperClass);
  wrapper.appendChild(element);

};

export default utils;