/*function PerformGetRequest1(){
    var resultElement=document.getElementById("GetResult1");

    resultElement.innerHTML=generatesuccesshtml(response);
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function(response){
      resultElement.innerHTML=generatesuccesshtml(response);
    })

}

function generatesuccesshtml(response){
  return '<h1> result:</h1>'+
  '<pre>'+JSON.stringify(response.data,null,'\t')+'</pre>'
}
*/

var requestURL = 'https://picsum.photos/v2/list?page=6&limit=100'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
var resultElement=document.getElementById("GetResult1");
request.responseType = 'json';
request.send();


request.onload = function()
{  
  let ListOfPic = request.response;
 var i;
console.log(ListOfPic[3].download_url)
for (i = 0; i < ListOfPic.length; i++) {
  console.log(ListOfPic[i].download_url)
  var d = resultElement.innerHTML;
  resultElement.innerHTML=d+" <div class='card'> <img src='" +ListOfPic[i].download_url+"'class='card-img-top w-100 h-100' > <div  class='d' style='position:absolute;background:rgba(10,10,10,0.5);width:100%;height:20%;bottom:0;'>ggggggggggggg</div></div>"
 /*
x=document.createElement("img")
document.getElementById("GetResult1").appendChild(x)
x.src=ListOfPic[i].download_url
*/
  }
  console.log(ListOfPic.length)
}

