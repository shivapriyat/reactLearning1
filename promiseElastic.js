var elasticsearch = require('elasticsearch');
var elasticData;
var client = new elasticsearch.Client({
    hosts: [

        'http://localhost:9200/'
    ]
});

let searchParam={
    index: 'diary',
    type: 'notes',
    body: {
        query: {
            term: { "userName": "mthomas3" }
        },
    }
};

  let searchmethod=function(){  
      return new Promise(function(resolve,reject) {
        client.search(searchParam).
        then(function (response) {
   
            console.log("elastic search success");
             elasticData=response;
            response.hits.hits.forEach(function (hit) {
            });
            resolve(elasticData);
    }).
        catch(function(error) {
            console.log("search error: " );
            console.log(error.status);
            reject(error);
        });

      })
      ;
  
    }
   /* console.log("b4 search");
    searchmethod().then(function(elasticData) {
        console.log("after search");
       elasticData.hits.hits.forEach(function (hit) {
            console.log(hit["_source"]);
        });

    }).catch(function() {
        console.log("error after search");
    })*/

   module.exports.searchmethod=searchmethod;