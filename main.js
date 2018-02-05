import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

var elSearch = require('./promiseElastic.js');
var elasticData;
console.log("elastic chk");
console.log("b4 search");
elSearch.searchmethod().then(function (elasticData) {
    elasticData = elasticData;
    console.log("after search");
    elasticData.hits.hits.forEach(function (hit) {
        console.log(hit["_source"]);
        console.log(elasticData);
        module.exports.elasticData = elasticData;
        ReactDOM.render(<App />, document.getElementById('app'));
    });

}).catch(function () {
    console.log("error after search");
})



