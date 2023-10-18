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
    let score = 0;
    let motUtilisateur = prompt("Entrez le mot : " + listeMots[0]);
    if(motUtilisateur === listeMots[0]) {
        score +=1;
    }
    console.log(score);
    motUtilisateur = prompt("Entrez le mot : " + listeMots[1]);
    if(motUtilisateur === listeMots[1]) {
        score +=1;
    }
    console.log(score);

    motUtilisateur = prompt("Entrez le mot : " + listeMots[2]);
    if(motUtilisateur === listeMots[2]) {
        score +=1;
    }
    console.log(score);






}