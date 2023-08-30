let text = document.getElementById('search')
let listContainer = document.getElementById('list-container')
const addTask = () => {
    if(text.value){
        let li = document.createElement('li')
        li.innerHTML = text.value
        listContainer.append(li)
        text.value = ''
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }else{
        alert("write your task first")
    }
    saveData()
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
    console.log('first')
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
}

showTask()

