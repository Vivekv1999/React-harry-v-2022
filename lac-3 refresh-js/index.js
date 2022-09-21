console.log('javascript refersher ');


console.log(this);
function myfun(){
    console.log('the numbe is '+ this);
}


// myfun = (number)=>{
//     console.log('the numbe is '+ this);
// }

myfun(125)
