const deleteBtn = document.querySelectorAll('.del')
const reminderItem = document.querySelectorAll('.not')
const reminderComplete = document.querySelectorAll('.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteReminder)
})

Array.from(reminderItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(reminderComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteReminder(){
    const reminderID = this.dataset.id
    try{
        const response = await fetch('reminders/deleteReminder', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'reminderIdFromJSFile': reminderID
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const reminderID = this.dataset.id
    try{
        const response = await fetch('reminders/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'reminderIdFromJSFile': reminderID
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const reminderID = this.dataset.id
    try{
        const response = await fetch('reminders/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'reminderIdFromJSFile': reminderID
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}