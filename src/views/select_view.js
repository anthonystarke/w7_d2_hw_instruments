const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(){
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('instrumentFamilies:data-sent',(event)=>{
    this.buildOptions(event.detail);
  });

  const optionSelector = document.querySelector('#instrument-families');
  optionSelector.addEventListener('change',(event) => {
    PubSub.publish('SelectView:instrument-selected',event.target.value);
  })
};

SelectView.prototype.buildOptions = function (instruments) {
  const dropDownSelector = document.querySelector('#instrument-families');

  instruments.forEach(function(instrument,index){
    const instrumentOption = document.createElement('option');
    instrumentOption.textContent = instrument.name;
    instrumentOption.value = index;
    dropDownSelector.appendChild(instrumentOption)
  });

};



module.exports = SelectView;
