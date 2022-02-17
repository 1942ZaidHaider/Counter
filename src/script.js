let c=0;
function increase(){
  c++;
  display();
}
function decrease(){
  if(c>0){
    c--;
  };
  display();
}
function display(){
  document.getElementById("disp").innerHTML=c;
}
