const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


  selectView = new SelectView();
  selectView.bindEvents();

  instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvents();

  resultView = new ResultView();
  resultView.bindEvents();


});
