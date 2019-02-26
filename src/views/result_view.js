const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

};

ResultView.prototype.bindEvents = function () {

  PubSub.subscribe('InstrumentFamilies:object-sent',(event) => {
    this.buildItemSpec(event.detail);

  });
};

ResultView.prototype.buildElement = function (element,content,parent) {
  const newItem = document.createElement(element);
  newItem.textContent = content;
  parent.appendChild(newItem);
};

ResultView.prototype.buildItemSpec = function (instrumentData) {
  const detailSelector = document.querySelector('#instrument-details');
  detailSelector.innerHTML = "";

  this.buildElement('h2',instrumentData.name,detailSelector);
  this.buildElement('p',instrumentData.description,detailSelector);
  this.buildElement('h3',"Instruments Include:",detailSelector);

  const newList = document.createElement('ul');
  detailSelector.appendChild(newList);

  const listItem = instrumentData.instruments;

  listItem.forEach(function(item){
    console.log(item);
    const newListItem = document.createElement('li');
    newListItem.textContent = item;
    newList.appendChild(newListItem);
  });

};

module.exports = ResultView;
