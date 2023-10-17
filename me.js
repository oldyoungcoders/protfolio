
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


//The when screen is iphone

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = '0';
}

function closemenu(){
    sidemenu.style.right = '-200px';
}





// chatgpt


const inputEL = document.getElementsByTagName('input')[0];
const btn = document.getElementsByTagName('button')[0];
const olEL = document.getElementsByTagName('ol')[0];

btn.addEventListener('click', function(){
    if(inputEL.value==''){
        alert('Hooson baij bolohgui');
    }else{
        const liEL = document.createElement('li');
        liEL.innerText = inputEL.value;
        olEL.appendChild(liEL);
        inputEL.value='';


        const delBtn = document.createElement('button');
        delBtn.innerHTML = '<i class="bi bi-trash 3"></i>';
        liEL.appendChild(delBtn);


        const checkBtn = document.createElement('button');
        checkBtn.innerHTML = '<i class="bi bi-clipboard-check-fill"></i>';
        liEL.appendChild(checkBtn);


        delBtn.className = 'delete';
        checkBtn.className = 'check';
        saveData();
    }
});



olEL.addEventListener('click', (e)=>{
    console.log(e.target);
    let target = e.target;
    let parentEl = target.parentElement;
    let del = parentEl.parentElement;
    let check = parentEl.parentElement;

    if(target.className=='bi bi-trash 3' || target.className=='delete'){
        del.remove();
    } else if(target.className=='bi bi-clipboard-check-fill' ){
        // check.style.textDecoration = 'line-through';
        check.classList.toggle('checked');
    }

    saveData();
});

localStorage.setItem('name', 'Nandin');


function saveData(){
    localStorage.setItem('todo', olEL.innerHTML);
}


let get;
function getData(){
    get = localStorage.getItem('todo');
    olEL.innerHTML = get;
}

getData();

// chatgpt