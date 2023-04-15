
// var Name = document.getElementById('name').value
// const profession = document.getElementById('profession')
// const age = document.getElementById('age')

var count = 1;

var addedEmployees = document.getElementById('addedEmployees')

  // var trList = document.querySelectorAll('tr')


function addEmp(){
  var Name = document.getElementById('name').value
  
  var profession = document.getElementById('profession').value
  var last_line = document.getElementById('last-line')
 
  var age = document.getElementById('age').value
  var table = document.createElement('table')

  var trList = document.querySelectorAll('tr')
  var trLength = trList.length;


  var p1 = document.createElement('p');

  if(trLength > 0){
    p1.remove
  }

  if(Name.trim() == "" && profession.trim() == "" && age.trim() == "" && trLength == 0){

    p1.innerHTML = "Error : Please Make sure All fields are filled before adding in an employee !"
    addedEmployees.before(p1)
    p1.style.display = 'block';
  }else {
  

  var tr = document.createElement('tr')
  
  var td1 = document.createElement('td')
  var td2 = document.createElement('td')
  var td3 = document.createElement('td')
  var td4 = document.createElement('td')
  var td5 = document.createElement('td')


  td1.innerHTML = trLength+1;
  td2.innerHTML = Name;
  td3.innerHTML = profession;
  td4.innerHTML = age;
  td5.innerHTML = `<button type="button" onclick="del()">Delete User`

  function del(){
    alert("djbfg")
  }
 

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  table.appendChild(tr)
  last_line.before(table)

  

  var p2 = document.createElement('span')
 if(trLength == 1){
  
  p2.innerHTML = "Success Employee added"
  addedEmployees.before(p2)
  p2.classList.add('green')

 }
  

  console.log(table.rows.length)

}



}
// del()
