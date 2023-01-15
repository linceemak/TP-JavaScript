
function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}

function JavaScript (){

let nav = createDom('nav', '', document.body)
let article1 = createDom('button',  "Article1", nav)
article1.setAttribute("class", "1")
let article2 = createDom('button', "Article2", nav)
article2.setAttribute("class", "2")
let article3 = createDom('button', "Article3", nav)
article3.setAttribute("class", "3")
let article4 = createDom('button', "Article4", nav)
article4.setAttribute("class", "4")

}

JavaScript()

const nav = document.querySelector("nav")

window.addEventListener("scroll",() => {
    if(window.scrollY>= nav.offsetTop){
        nav.style.position = "fixed"
        nav.style.top = 0
    }else{
        console.log("static !");
    }
})

function form (){

let add = document.createElement("button")
    add.textContent = ("Ajouter")

    document.body.appendChild(add)

add.addEventListener("click",() =>{

    let titre = document.createElement("input")
    let text = document.createElement("textarea");
    text.cols = 50;
    text.rows = 10;
    let submit = document.createElement("button")

    submit.textContent = 'Soumettre'

    document.body.appendChild(titre)
    document.body.appendChild(text);
    document.body.appendChild(submit)

submit.addEventListener('click', () => {
    let title = document.createElement("h1")
    title.textContent = titre.value
    let par = document.createElement("p")
    par.textContent = text.value

    let supp = document.createElement("button")
    supp.textContent = "Supprimer"

    document.body.appendChild(title)
    document.body.appendChild(par)
    document.body.appendChild(supp)

    if(getComputedStyle(titre).display != "block"){
        titre.style.display = "none"
    }else{
        titre.style.display = "block"
    }

    if(getComputedStyle(text).display != "block"){
        text.style.display = "none"
    }else{
        text.style.display = "block"
    }

    if(getComputedStyle(submit).display != "block"){
        submit.style.display = "none"
    }else{
        submit.style.display = "block"
    }

    supp.addEventListener("click",() => {
        title.remove()
        par.remove()
        supp.remove()
     })

    })
})
 
}

form()


