function Snack(){
    let menu = ["Pizza", "Pasta", "Bread", "Burger"];
    let choixUser = [];
    console.log("Bonjour, que désirez vous manger?")
    afficherMenu(menu);
    choixUser = commandeUser(choixUser);
    console.log("Votre commande finale contient: " + choixUser)
}

function commandeUser(comUser){
    let choixUser = comUser;
    let entreeUser = "";
    let a = 0;
    let i = 0;
    while(a == 0){
        choixUser[i] = choseMenu(menu);
        console.log("Voici votre commande: " + choixUser);
        entreeUser = prompt("Voulez vous continuer? 1) Oui ; 2) Non")
        if(entreeUser == 2 || entreeUser == "Non"){
            a = 1;
            return choixUser;
        }
        else{
            a = 0;
        }
        i++;
    }
}

function afficherMenu(menuSave){
    menu = menuSave;
    for(let i = 0; i <= menu.length-1; i++){
        console.log(menu[i]);
    }
}

function choseMenu(menuSave){
    menu = menuSave;
    a = 0;
    while(a == 0){
        choixUser = prompt("Veuillez choisir votre plat");
        for(let i = 0; i <= menu.length-1; i++){
            if(choixUser == menu[i]){
                a = 1;
            }
        }
        if(a != 1){
            console.log("Veuillez donner un plat à l'afficher.")
        }
    }
    return choixUser;
}