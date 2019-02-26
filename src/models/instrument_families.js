const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};


InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('instrumentFamilies:data-sent',this.data);

  PubSub.subscribe('SelectView:instrument-selected',(event) => {
    const result = this.returnObject(event.detail);
    this.publishResultObject(result);
  });
};

InstrumentFamilies.prototype.publishResultObject = function (instrumentObject) {
  PubSub.publish('InstrumentFamilies:object-sent',instrumentObject);
};

InstrumentFamilies.prototype.returnObject = function(indexNumber){
  return this.data[indexNumber];
};


module.exports = InstrumentFamilies;
