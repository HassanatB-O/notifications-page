let unreadNotif = document.querySelectorAll(".unread")
let notificationBox = document.querySelectorAll(".box")
let read = document.querySelectorAll(".read")

document.getElementById("notification-length").textContent = unreadNotif.length

let clicked = 0

document.getElementById("mark").addEventListener('click', () =>{
    console.log("marked")
    clicked++
    
    if(clicked % 2 == 1){
        notificationBox.forEach(box =>{
            box.style.backgroundColor = "hsl(0, 0%, 100%)"
        })
        document.getElementById("notification-length").textContent = "0"
        document.getElementById("mark").textContent = "Mark all as unread"
    }
    else{
        notificationBox.forEach(box =>{
            box.style.backgroundColor = "hsl(211, 68%, 94%)"
        })
        document.getElementById("notification-length").textContent = notificationBox.length
        document.getElementById("mark").textContent = "Mark all as read"
    }
})

