function changeImage()
{
   var pic=document.getElementById("bulb");
   if(pic.src.match("on")) {
    console.log("ON");
    pic.src ="bulb_off.jpeg";
   }
   else{
    console.log("OFF");
    pic.src="bulb_on.jpeg";
   }
}