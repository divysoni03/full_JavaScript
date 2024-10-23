const btn = document.querySelector('button');
const div = document.querySelector("div");
// btn.onclick = function (){
//     if(div.classList.contains('newOne')){
//         div.classList.remove('newOne');
//         div.classList.add('newTwo');
//     }
//     else{
//         div.classList.remove('newTwo');
//         div.classList.add('newOne');
//     }
// }
btn.onclick = function (){
    div.classList.toggle('newTwo'); //
}
//classList : 
// add  : add new Class
// remove : remove class
// contains : check class exist
//toggle : 
//  if class exist then remove class else add that class value