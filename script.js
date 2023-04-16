let myBtn = document.getElementById("adding");
let addEmp = document.getElementById("unique");
addEmp.style.display ="block";
myBtn.addEventListener('click',(e) =>{

   e.preventDefault();
    const Name = document.getElementById('name').value;
    const profession = document.getElementById('enter-Profession').value;
    const age = document.getElementById('age').value;

    addTask(Name, profession, age);
})

let column = document.getElementById("List-item");
function addTask(Name, profession, age){
     
     column.innerHTML +=`
                    
                        <li>
                        <div class="listElement">
                        <p>Name : ${Name}</p>
                        <p>Profession : ${profession}</p>
                        <p>Age : ${age}</p>
                        </div>
                        <div class="xdelete">
                        <button class="d-Btn" onclick ="removeAddedData(this)">Delete</button>
                        </div>
                        </li>
                        
                        `

    document.getElementById("input-tag").reset();

    addEmp.style.display ="none";


    if(Name ==="" || profession ==="" || age === ""){
                  
            document.getElementById("alert").appendChild(redAlert);
            addEmp.style.display ="block";
            redAlert.style.display="block";
            column.innerText="";
           
    }else{
            document.getElementById("alert").appendChild(succesMsg);
            redAlert.style.display="none";
    }
}
    let msg = "Error : Please Make sure All the fields are filled before adding in an employee !"
    let redAlert = document.createElement("h4");
        redAlert.innerText = msg; 

    let succesMsg = document.createElement("h5");
        succesMsg.innerText ="Success : Employee Added!";


function removeAddedData(){

let parent = document.getElementById("List-item");
let child = parent.getElementsByTagName("li")[0];   
child.remove();
   
 }


    redAlert.style.display="none";













    