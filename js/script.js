// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let table = document.getElementById('employees')
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let output = document.getElementById('empCount')
let count = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let newId = document.getElementById('id').value
    let newName = document.getElementById('name').value
    let newExt = document.getElementById('extension').value
    let newEmail = document.getElementById('email').value
    let newDep = document.getElementById('department').value

     // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
     // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let row = table.insertRow()
    let cellID = row.insertCell()
    let cellName = row.insertCell()
    let cellExt = row.insertCell()
    let cellEm = row.insertCell()
    let cellDep = row.insertCell()
    let cellDele = row.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let a = document.createTextNode(newId)
    cellID.appendChild(a)
    let b = document.createTextNode(newName)
    cellName.appendChild(b)
    let c = document.createTextNode(newExt)
    cellExt.appendChild(c)
    let d = document.createTextNode(newEmail)
    cellEm.appendChild(d)
    let i = document.createTextNode(newDep)
    cellDep.appendChild(i)

   
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className  ='btn btn-danger btn-sm float-end delete'
    let textDel = document.createTextNode('X')
    deleteBtn.appendChild(textDel)
    cellDele.appendChild(deleteBtn)

    // RESET THE FORM
    form.reset()

      // SET FOCUS BACK TO THE ID TEXT BOX
    //document.getElementById('id').focus()
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++
    output.innerText = "("+count+")"
})

// DELETE EMPLOYEE
table.addEventListener('click',(e) =>{
    if(e.target.classList.contains('delete')){
        if (confirm('Are you sure you want to delete this employee?')){
            table.deleteRow(e.target.parentNode.parentNode.rowIndex)
            count--
            output.innerText = "("+count+")"
        }
    }
    
})