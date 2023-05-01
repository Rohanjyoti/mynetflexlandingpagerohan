const button=document.getElementById("btn");
const list=document.getElementById("list");

list.style.display="none";



// document.onclick=function(e){
// if(e.list.style.display !=="btn"){
//     list.style.display="block";
//     btn.classList.remove('block');
//         list.classList.remove('block')
// }

    // if(e.target.id !=='btn'&& e.target.id !=='list'){
    //     btn.classList.remove('block');
    //     list.classList.remove('block')
    // }
// }

button.addEventListener("click",(event)=>{
    if(list.style.display=="none"){
        list.style.display="block";
    
    }else{
        list.style.display="none";
    }
})