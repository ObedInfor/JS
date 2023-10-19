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
    }*

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
        console.log( "Votre score est de " + score + " sur " + listeMots.length);
    }else{
        for (let compt=0; compt < listePhrase.length; compt ++){
            let motUtilisateur = prompt("Entrez le mot : " + listePhrase[compt]);
            if(motUtilisateur === listePhrase[compt]) {
                score +=1;
            }
        }
        console.log( "Votre score est de " + score + " sur " + listePhrase.length);
    }*/


        // Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
    const listeMots = ["Cachalot", "Pétunia", "Serviette"]
    const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]


    function afficherResultat(score,nbMotsProposes){
        // on affiche le score de l'utilusateur
        console.log("Votre score est de " + score + " sur " + nbMotsProposes)
    }

    function choisirPhrasesOuMots(){
        // Déclaration de la variable contenant le choix de l'utilisateur
        let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
        // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
        while (choix !== "mots" && choix !== "phrases") {
            choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
        }
        return choix;
    }
    
    function lancerBoucleDeJeu(listePropositions){
        let score = 0;
            // On parcourt le tableau des mots
        for (let i = 0; i < listePropositions.length; i++) {
             // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
             let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
            if (motUtilisateur === listePropositions[i]) {
                // Si le mot saisi par l'utilisateur est correct, on incrémente le score
                 score++;
            }
        }
        return score;
    }
    function lancerJeu(){
        let choix = choisirPhrasesOuMots();
        let score = 0;
        let nbMotsProposes = 0;

        if (choix === "mots"){
            score = lancerBoucleDeJeu(listeMots);
            nbMotsProposes = listeMots.length;
        }else{
            score = lancerBoucleDeJeu(listePhrases);
            nbMotsProposes = listePhrases.length;
        }

        afficherResultat (score,nbMotsProposes)

    }

    lancerJeu();



}