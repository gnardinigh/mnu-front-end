document.addEventListener('DOMContentLoaded',function(){

const endPoint = 'http://localhost:3000/api/v1/menus'

fetch(endPoint).then(res=>res.json()).then(menus=>console.log(menus))






















}) //end DOMContentLoaded listener