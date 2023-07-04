let final=0;
function sahoo(){
  let kiran = document.getElementById("text").value;
  if(final===0 || final!==kiran){
    final=kiran;
    if(kiran<=50){
      Calculate();
    }
    else{
     document.getElementById("text").innerHTML=value;
    }
  }
}
function Calculate(){
  var randNum =  (Math.floor(Math.random() * 10) + 1);
   document.getElementById('bat').innerHTML=randNum;
}
