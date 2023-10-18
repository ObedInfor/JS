{
    console.log("Hello World");
    /*let motTapeOk = false;

    if (motTapeOk) {
        console.log("Bravo, vous avez correctement tapé le mot");
    }
    else{
        console.log("Echec, le mot n'est pas correct");
    }

    /*let motUtilisateur = prompt("Entrez un mot :");
    console.log(motUtilisateur)

    const motApplication = "Bonjour";
    let motUtilisateur = prompt("Entrez le mot : " + motApplication);

    /*if (motUtilisateur === motApplication) {
        console.log("Bravo !");
    }else{
        console.log("Vous avez fait une erreur de frappe");
    }

    switch (motUtilisateur) {
        case motApplication:
            console.log("Bravo !")
            break
        case "Gredin":
            console.log("Restez correct !")
            break
        case "Mécréant":
            console.log("Restez correct !")
            break
        case "Vilain":
            console.log("Soyez gentil !")
            break
        default:
            console.log("Vous avez fait une erreur de frappe.")
    }*/

    const listeMots = ["Cachalot", "Pétunia", "Serviette"];
    const listePhrase = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]
    let score = 0;
    let Reponse = prompt("Voulez-vous la liste de mots ou de phrases ? (mots ou phrases) :")
    while( Reponse !== "mots" && Reponse !== "phrases" ){
        Reponse = prompt("Voulez-vous la liste de mots ou de phrases ? (mots ou phrases) :")
    }
    if( Reponse === "mots"){
        for (let compt=0; compt < listeMots.length; compt ++){
            let motUtilisateur = prompt("Entrez le mot : " + listeMots[compt]);
            if(motUtilisateur === listeMots[compt]) {
                score +=1;
            }
        
        }
    }else{
        for (let compt=0; compt < listePhrase.length; compt ++){
            let motUtilisateur = prompt("Entrez le mot : " + listePhrase[compt]);
            if(motUtilisateur === listePhrase[compt]) {
                score +=1;
            }
        }
    }
    
    console.log(score);






}