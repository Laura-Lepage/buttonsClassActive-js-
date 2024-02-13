let wrapper = document.querySelector(".wrapper")
let buttons = document.querySelectorAll("button")

wrapper.addEventListener('click', function(e){
    e.target.classList.toggle("active")
    if (e.target.classList.contains("active")){
        let buttonClicked = e.target
        buttons.forEach(function(button){
            button.classList.remove('active');
        })
        buttonClicked.classList.add('active');
    }
})