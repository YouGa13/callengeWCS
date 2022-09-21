// cette variable nous permet d'accéder à la valeur du formulaire
var form = document.getElementById("new-member-form");
var supprimer = document.getElementById("effecer");

for (let i of Object.keys(localStorage)) {
    let membres = JSON.parse(localStorage.getItem(i));
    let argonautes = document.createElement("div");  
    let p = document.createElement("p");
    argonautes.className = "member-item";
    p.innerHTML = `${membres.nom} ${membres.prenom} ${membres.qualif}`;
    argonautes.appendChild(p);
    document.getElementById("troisieme").appendChild(argonautes);

    let nbre = (localStorage.length+3);
    document.getElementById("nbre").innerHTML = `${nbre}`;
}

// si l'utilisateur envoie
form.onsubmit = function (e) {
    // La preventDefault()méthode de l' Eventinterface indique à l' agent utilisateur 
    // que si l'événement n'est pas explicitement géré,
    // son action par défaut ne doit pas être effectuée comme elle le serait normalement. */
    e.preventDefault();

    // recuperation des données entreés par l'utilisateur
    var name = document.getElementById("name").value;
    var forname = document.getElementById("forname").value;
    var qualificatif = document.getElementById("qualif").value;

    let argonaute = {
        nom: name,
        prenom: forname,
        qualif: qualificatif
    }
    // je defini la clé à prendre pour le prochain enregistrement
    let identifiant = (localStorage.length) + 1;

    // localStorage avec setItem pour enregistrer le nouveau argonaute avec son identifiant
    localStorage.setItem(identifiant, JSON.stringify(argonaute));

    if (localStorage.getItem(identifiant) != null) {
        let nouveau_membre = document.createElement("div");
        nouveau_membre.className = "member-item";
        nouveau_membre.innerHTML = argonaute.nom.toUpperCase() + " " + argonaute.prenom.toUpperCase() + " " + argonaute.qualif;
        document.getElementById("troisieme").appendChild(nouveau_membre);
    };


    document.location.reload(); // permet de recharger la page
};


// pour experimentation, à ne pas utiliser 
supprimer.onclick = () => {
    localStorage.clear();
    document.location.reload();
}
