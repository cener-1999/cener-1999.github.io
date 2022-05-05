
document.querySelector('div').onclick=
function(){
    alert('啵啵！');
}

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc==='images/mywife.png'){
        myImage.setAttribute('src','images/mywife2.png');
    }else{
        myImage.setAttribute('src','images/mywife.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('name please');
    if(myName===null ||!myName){
        setUserName();
    }
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Hello World, Hello new Friend '+myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello World, Hello old Friend '+ storedName;
}

myButton.onclick = function(){
    setUserName();
}