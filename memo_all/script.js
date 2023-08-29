////////////////////////////////// MEMO ancien

/* Dérouler la page */

let boutons = document.querySelectorAll(".naviguation_bouton")


boutons.forEach(bouton =>
    bouton.addEventListener("click", function(event) 
{
    let titres = document.querySelectorAll("h1");
    for(let i = 0; i<titres.length; i++)
    {
        if(titres[i].innerHTML == event.target.innerHTML)
        {
            titres[i].scrollIntoView({behavior: "smooth"})
        }
    }
}))





////////////////////////////////// MEMO nouveau



let barre_naviguation = document.querySelector("#barre_naviguation")
let box_naviguation_liste = document.querySelector("#box_naviguation_liste")
let naviguation_boutons = document.querySelectorAll(".naviguation_bouton")
let all_title = document.querySelectorAll("section.chapter")

/* Application de la liste */

creation_liste()

/* Dérouler le menu au passage de la souris */
barre_naviguation.addEventListener("mouseover", function()
{
    let impact = document.querySelector("#box_naviguation_liste");
    impact.style.display = "flex"
})

/* Maintient du display flex dans la boite */
box_naviguation_liste.addEventListener("mouseover", function()
{
    let impact = document.querySelector("#box_naviguation_liste");
    impact.style.display = "flex"
})

/* Fermer le menu coté logo */
barre_naviguation.addEventListener("mouseout", function()
{
    let impact = document.querySelector("#box_naviguation_liste");
    impact.style.display = "none"
})

/* Fermer le menu coté boite */
box_naviguation_liste.addEventListener("mouseout", function()
{
    let impact = document.querySelector("#box_naviguation_liste");
    impact.style.display = "none"
})



/* Fonction pour dérouler la page */

function deroulement(naviguation_boutons)
{
    naviguation_boutons.forEach(bouton =>
        bouton.addEventListener("click", function(event) 
    {
        let titres = document.querySelectorAll("section.chapter");
        for(let i = 0; i<titres.length; i++)
        {
            if(titres[i].innerText == event.target.innerText)
            {
                titres[i].scrollIntoView({behavior: "smooth"})
            }
        }
    }))
}

/* Fonction pour créé la liste et appliquer les listener de deroulement */
function creation_liste()
{
    let destination = document.querySelector("#box_naviguation_liste")
    for(let i = 0; i< all_title.length; i++)
    {
        let nouvel_element = document.createElement("div")
        nouvel_element.classList= "naviguation_bouton"
        nouvel_element.innerText = all_title[i].innerText
        destination.appendChild(nouvel_element)
    }

    // On selectionne ensuite tout les élément avec cete classe
    let naviguation_boutons = document.querySelectorAll(".naviguation_bouton")
    // Et on leur attribut un listener pour le dderoulement
    deroulement(naviguation_boutons)
}