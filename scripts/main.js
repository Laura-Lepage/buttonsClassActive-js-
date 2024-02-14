let wrapper = document.querySelector(".wrapper")
let buttons = document.querySelectorAll("button")

// - avec forEach -
// wrapper.addEventListener('click', function(e){
//     e.target.classList.toggle("active")
//     if (e.target.classList.contains("active")){
//         let buttonClicked = e.target
//         buttons.forEach(function(button){
//             button.classList.remove("active");
//         })
//         buttonClicked.classList.add("active");
//     }
// })

// - sans forEach -
wrapper.addEventListener('click', function(e){
    if(e.target.classList.contains("btn")){
        // Si l'élément cliqué a la classe active, alors ...
        if(e.target.classList.contains("active")) {
            e.target.classList.remove("active")
        // Si l'élément cliqué n'a pas la classe active, alors ...
        } else {
            // Si le wrapper a un enfant qui posssède la classe active
            if(wrapper.querySelector(".active")) {
                wrapper.querySelector(".active").classList.remove("active")
                e.target.classList.add("active")
            // Si le wrapper n'a pas un enfant qui posssède la classe active
            } else {
                e.target.classList.add("active")
            }
        }
    }
})
