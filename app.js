var btntrans=document.querySelector("#btn-translate");
var txtinp=document.querySelector("#txt-input");
var txtout=document.querySelector("#output");
var url="https://api.funtranslations.com/translate/yoda.json"
function curl(txt)
{
return url+"?"+"text="+txt;
}
btntrans.addEventListener("click",()=>{
 
 var txt=txtinp.innerHTML;
 fetch(curl(txt)).then(response => response.json())
 .then(json=>{
   var ti=json.content.translated;
   txtout.innerText=ti;
 })
 .catch(errorhandler=>{
  txtout.innerText="error";
 })

})
