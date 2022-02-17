onload=createElements();
let c = 0;
function increase() {
  c++;
  display();
}
function decrease() {
  if (c > 0) {
    c--;
  }
  display();
}
function display() {
  disp.innerHTML = c;
}
function createElements(){
  size=30;
  lg="#EEEEEE";
  dg="#DDDDDD";
  style="width:"+(size)+"px;height:"+(size)+"px;"+"margin:0px; border:solid 1px "+dg+";float:left;";
  inc=document.createElement("button");
  inc.innerHTML="+";
  inc.style=style+"background:"+lg+";"+"border:solid 1px "+dg+";border-radius: 0px 5px 5px 0px;";
  inc.addEventListener("click",increase);
  dec=document.createElement("button");
  dec.innerHTML="-";
  dec.style=style+"background:"+lg+";"+"border:solid 1px "+dg+";border-radius:5px 0px 0px 5px;";
  dec.addEventListener("click",decrease);
  disp=document.createElement("span");
  disp.innerHTML=0;
  disp.style="text-align:center;display:block;"+style;
  main=document.getElementById("main");
  main.appendChild(dec);
  main.appendChild(disp);
  main.appendChild(inc);
  //main.style="width:"+(size*3+1)+"px;height:"+size+"px;border:solid 1px "+dg+";border-radius:5px;background:none;overflow:hidden;padding:0px;white-space: nowrap;";
}
