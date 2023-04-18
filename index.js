
var nameInput = document.getElementById('name')
var professionInput = document.getElementById('profession')
var ageInput = document.getElementById('age')

var button = document.getElementById('addUser')

button.addEventListener('click',()=>{
    var name = nameInput.value
    var profession = professionInput.value
    var age = ageInput.value

    if(name == "" || profession == "" || age == ""){
            document.querySelector('.status-msg').style.display = 'block'
            document.querySelector('.status-msg').style.color = 'red'
    }else{
        document.getElementById('emp-li-container').innerHTML += `
        <div class="emp-card" id="${name}-${profession}-${age}">
            <div class="details">
                <span>${name}</span>
                <span>${profession}</span>
                <span>${age}</span>
            </div>
            <button id="del-user-btn" onclick="deleteUser('${name}-${profession}-${age}')">Delete Employee</button>
        </div>`
    }

})

function deleteUser(id){
    
    var Delete = document.getElementById(id)
    document.querySelector('#emp-li-container').removeChild(Delete)
}
