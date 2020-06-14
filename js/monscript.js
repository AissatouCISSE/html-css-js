function getCheckboxStatus(){
   var status = document.getElementById("processedCheckBox").checked;
   if (status) {
      alert("Yes");
      document.getElementById("infosemploi").style.visibility = "visible";
       if((!salaire.value) || isNaN(salaire.value)){
		alert("Veuillez renseignez correctement votre salaire!");
	}
	if((!nomemployeur.value) || isNaN(nomemployeur.value)==false){
		alert("Veuillez renseignez correctement le nom de l'employeur!");
	}
	if((!adressemployeur.value) || isNaN(adressemployeur.value)==false){
		alert("Veuillez renseignez correctement l'adresse' de l'employeur!");
	}
	if((!rs.value) || isNaN(rs.value)==false){
		alert("Veuillez renseignez la raison sociale de l'entreprise!");
	}
	 if((!id.value) || isNaN(id.value)){
		alert("Veuillez renseignez l'identification de l'entreprise!");
	}	
     
   } else {
   			alert("No");
      document.getElementById("infosemploi").style.visibility = "hidden";
   		salaire.value=null;
   		// profession.value="null";
   		nomemployeur.value=null;
   		adressemployeur.value=null;
   		rs.value=null;
   		id.value=null;
      
   }




}


document.getElementById("formulaire").addEventListener("submit", function(e){
	e.preventDefault();
	var erreur;
	var numeroagence = document.getElementById("numeroagence");
	var numerocompte = document.getElementById("numerocompte");
	var clerib = document.getElementById("clerib");
	var a = document.getElementById("email");
	if (!numeroagence.value){
		alert("Veuillez renseignez le numero de l'agence!");
		e.preventDefault();
	}
	if(isNaN(numeroagence.value)){
		alert("le numero de l'agence doit etre uniquement des valeurs numeriques");
	}


	if (!numerocompte.value){
		alert("Veuillez renseignez le numero du compte!");
		
	}
	if(isNaN(numerocompte.value)){
		alert("le numero du compte doit etre uniquement des valeurs numeriques");
	}

	if (!clerib.value){
                 // document.getElementById("msg").innerHTML="Entrez uniquement une valeur numérique";
                 alert("Veuillez renseignez le clerib:Entrez uniquement une valeur numérique");
               
             }
    if(isNaN(clerib.value)){
		alert("la cle RIB doit etre uniquement des valeurs numeriques");
	}
	if(clerib.value<1) {
		alert("la cle RIB doit etre etre comprise entre 01 et 97");
	}
	if(clerib.value>97){
		alert("la cle RIB doit etre etre comprise entre 01 et 97");
	}

	if((!nom.value) || isNaN(nom.value)==false){
		alert("Veuillez renseignez correctement le nom!");
	}
	if((!prenom.value) || isNaN(prenom.value)==false){
		alert("Veuillez renseignez correctement le prenom!");
	}
	if(!adresse.value){
		alert("Veuillez renseignez correctement l'adresse'!");
	}

	if((!numtel.value) || isNaN(numtel.value)){
		alert("Veuillez renseignez correctement le numero de telephone!");
	}

	//employeur

	
});
