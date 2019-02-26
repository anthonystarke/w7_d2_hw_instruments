const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

};

ResultView.prototype.bindEvents = function () {

  PubSub.subscribe('InstrumentFamilies:object-sent',(event) => {
    this.buildItemSpec(event.detail);

  });
};

ResultView.prototype.buildItemSpec = function (instrumentData) {
  const detailSelector = document.querySelector('#instrument-details');
  detailSelector.innerHTML = "";

  const newHeader = document.createElement('h2');
  newHeader.textContent = instrumentData.name;
  detailSelector.appendChild(newHeader);

  const newParagraph = document.createElement('p');
  newParagraph.textContent = instrumentData.description;
  detailSelector.appendChild(newParagraph);

  const newSubHeader = document.createElement('h3');
  newSubHeader.textContent = "Instruments Include:";
  detailSelector.appendChild(newSubHeader);

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
