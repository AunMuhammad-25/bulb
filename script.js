// function light(show){
//     var pic;
//     if(show == 0){
//       pic= "imgs/bulb_off.jpg";
//     }else{
//       pic = "imgs/bulb_on.jpg"
//     }   
//     document.getElementById("bulb").src = pic;   
// }




function light (condition) {
    var pic;
    if(condition==0){
        pic="imgs/bulb_off.jpg";

    }
    else{
        pic="imgs/bulb_on.jpg";

    }
    document.getElementById("bulb").src = pic;
    
}