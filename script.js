const panier = {
    pommes : 2,
    poires : 0,
    prunes : 0
}

// Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;

function Ajouter(fruit){
    let quantite = 1;
    let  prix;
    let poids;
    let idPrix;//Il sait ou ajouté les données dans l'autre tableau(Bas) relation du ID
    let idPoids;
    let idQte;

    if (fruit ==='pommes'){
        prix = 13.50;
        poids = 10;
        idPrix = 'prixPommes';
        idPoids = 'poidsPommes';
        idQte = 'qtePommes';
    }
    if (fruit === 'poires'){
        prix = 20.00;// peut etre changer dans le html pour un id pour lier les futurs changement
        poids = 12;
        idPrix = 'prixPoires';
        idPoids = 'poidsPoires';
        idQte = 'qtePoires';
    }
    if (fruit === 'prunes'){
        prix = 22.00;
        poids = 15;
        idPrix = 'prixPrunes';
        idPoids = 'poidsPrunes';
        idQte = 'qtePrunes';
    }
    let ancienPrix = document.getElementById(idPrix).innerText;
    let nouveauPrix = +ancienPrix + +prix;
    document.getElementById(idPrix).innerText = nouveauPrix;//getElementById (selector) remplace prixPommes par nouveauprix

    let ancienPoids = document.getElementById(idPoids).innerText;
    let nouveauPoids = +ancienPoids + +poids;
    document.getElementById(idPoids).innerText = nouveauPoids;

    let ancienQte = document.getElementById(idQte).innerText;
    let nouveauQte = +ancienQte + +quantite;
    document.getElementById(idQte).innerText = nouveauQte;

    let ancienTotal = document.getElementById('prixTotal').innerText;
    let nouveauTotal = +ancienTotal + +prix;
    document.getElementById('prixTotal').innerText = nouveauTotal;

    let ancienPoidsTotal = document.getElementById('poidsTotal').innerText;
    let nouveauPoidsTotal = +ancienPoidsTotal + +poids;
    document.getElementById('poidsTotal').innerText = nouveauPoidsTotal;

    let ancienQteTotal = document.getElementById('qteTotal').innerText;
    let nouveauQteTotal = +ancienQteTotal + +quantite;
    document.getElementById('qteTotal').innerText = nouveauQteTotal;
}






