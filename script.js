
/*How to compare two JSON have the same properties without order?*/
function checkObjCompare(){
  var obj1 = { name: "Person 1", age:5 };
  var obj2 = { age:5, name: "Person 1" };

  let c = _.isEqual(obj1, obj2) ? 'object is same' : 'object is different'
  console.log(c)
  
}
checkObjCompare()
/*xhttp request example*/
/*2.Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
3.Use the same rest countries and print all countries name, region, sub region and population
*/
function getxhttprequest(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    let response  = JSON.parse(this.responseText);
    response.forEach(val =>{
        // console.log(val)
      document.write('<img src='+val.flag+' width="50" height="50">')//not able to print in console so printed on window
      console.log('Name: '+val.name+'\n'+'Region: '+val.region+'\n'+'Sub Region: '+val.subregion+'\n'+'Population: '+val.population)
    })
  }
  xhttp.open("GET", "https://restcountries.com/v2/all");
  xhttp.send();
}
  
getxhttprequest();
