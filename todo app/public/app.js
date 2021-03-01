
var main = document.getElementById('mainList')
var inputValue = document.getElementById('inp')

firebase.database().ref('todos').on('child_added', function (data) {
    var text = data.val().value
    var finalText = document.createTextNode(text)



    var list = document.createElement('p')
    list.setAttribute('class', 'list')
    list.appendChild(finalText)
    main.appendChild(list)

    //Edit Button ----------------------------------
    
    var btnDiv = document.createElement('div')
    btnDiv.setAttribute('class', 'btn2_div')
    var edit_icon = document.createElement("i");
    edit_icon.setAttribute("class", "fas fa-edit");
    var editBtn = document.createElement('button')
    editBtn.setAttribute('class', 'editbtn')
    editBtn.setAttribute('id', data.val().key)
    editBtn.setAttribute('onClick', 'edit(this)')
    editBtn.appendChild(edit_icon)

    //delete Button------------------------------------

    var dlt_icon = document.createElement("i");
    dlt_icon.setAttribute("class", "fas fa-trash-alt");
    var dltbtn = document.createElement('button')
    dltbtn.setAttribute('class', 'dltbtn')
    dltbtn.setAttribute('id', data.val().key)
    dltbtn.setAttribute('onClick', 'deleteTodo(this)')
    dltbtn.appendChild(dlt_icon)

    inputValue.value = ''

    btnDiv.appendChild(editBtn)
    btnDiv.appendChild(dltbtn)
    list.appendChild(btnDiv)
})


function add() {

    var database = firebase.database().ref('todos');
    var key = database.push().key;
    var todo = {
        value: inputValue.value,
        key: key
    }
    database.child(key).set(todo)

    inputValue.value = ''

}

function deleteTodo(e) {
    firebase.database().ref('todos').child(e.id).remove()
    var li = e.parentNode.parentNode
    li.remove()
}

function edit(e) {
    var li = e.parentNode.parentNode
    var editText = prompt('Enter What you want Todo...')
    var editTodo = {
        value: editText,
        key: e.id
    }
    li.firstChild.nodeValue = editText
    firebase.database().ref('todos').child(e.id).set(editTodo)
}
function deleteAll() {
    firebase.database().ref('todos').remove()
    main.innerHTML = ''
}
