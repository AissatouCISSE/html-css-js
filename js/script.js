function afficherCompte() {
  var typecompte = document.getElementById("typecompte");
  var formulairecompte = document.getElementById("formulairecompte");
  var premiere = document.getElementById("premiere");
  var second = document.getElementById("second");
  var valider = document.getElementById("valider");
  var infosemploi = document.getElementById("infosemploi");
  var chacha = document.getElementById("chacha");
  var status = document.getElementById("processedCheckBox").checked=false;
  var status = document.getElementById("processedCheckBox2").checked=false;
   
 
  if ((document.formcompte.typecompte.value == 2) || (document.formcompte.typecompte.value == 4))
  {

  	if (h4.style.display == "none")
		h4.style.display = "block";

	if (premiere.style.display == "none")
		premiere.style.display = "block";

  	if (first.style.display == "none")
		first.style.display = "block";
		
 
  	if (second.style.display == "none")
		second.style.display = "block";

	if (valider.style.display == "none")
		valider.style.display = "block";

	if (condition.style.display == "none")
		condition.style.display = "block";

	infosemploi.style.display="none";
	chacha.style.display="none";
	condition1.style.display = "none"
	

	document.getElementById("formulairecompte").addEventListener("submit", function(e){
	e.preventDefault();
	var erreur;
	var numeroagence = document.getElementById("numeroagence");
	var numerocompte = document.getElementById("numerocompte");
	var clerib = document.getElementById("clerib");
	var email = document.getElementById("email");
	var salire = document.getElementById("salaire");
	var nomemployeur = document.getElementById("nomemployeur");
	var adressemployeur = document.getElementById("adressemployeur"); 
	var rs = document.getElementById("rs");
	var id = document.getElementById("id");
	var typecompte = document.getElementById("typecompte");
	var frais = document.getElementById("frais");

	 if(document.formcompte.client.value == 5){
		alert("Veuillez choisir le client!");
	}
   	 else if (!numeroagence.value){
		alert("Veuillez renseignez le numero de l'agence!");
		e.preventDefault();
	}
	else if(isNaN(numeroagence.value)){
		alert("le numero de l'agence doit etre uniquement des valeurs numeriques");
	}


	else if (!numerocompte.value){
		alert("Veuillez renseignez le numero du compte!");
		
	}
	else if(isNaN(numerocompte.value)){
		alert("le numero du compte doit etre uniquement des valeurs numeriques");
	}

	else if (!clerib.value){
                 // document.getElementById("msg").innerHTML="Entrez uniquement une valeur numérique";
         alert("Veuillez renseignez le clerib:Entrez uniquement une valeur numérique");
               
             }
    else if(isNaN(clerib.value)){
		alert("la cle RIB doit etre uniquement des valeurs numeriques");
	}
	else if(clerib.value<1) {
		alert("la cle RIB doit etre etre comprise entre 01 et 97");
	}
	else if(clerib.value>97){
		alert("la cle RIB doit etre etre comprise entre 01 et 97");
	}
	else if (!montant.value){
		alert("Veuillez renseignez le montant initial!");
		e.preventDefault();
	}
	else if(isNaN(montant.value)){
		alert("Veuillez renseignez correctement le montant initial!");
	}
	else if(document.getElementById("processedCheckBox").checked==false){
		alert("Veuillez accepter les conditions d'ouverture de ce type de compte!")
	}
	// if (typecompte.value!="xeweul"){
	// 	alert("Veuillez selectionner le type de compte!");
	// }
	// if(typecompte.value=="xeweul"){
	// 	document.getElementById("frais").disabled=true;
	// 	document.getElementById("frais").style.backgroundColor = "#CCCCCC";
	// }
	
});

  }
 if (document.formcompte.typecompte.value == 3)
  {
 if (h4.style.display == "none")
		h4.style.display = "block";

	if (premiere.style.display == "none")
		premiere.style.display = "block";

  	if (first.style.display == "none")
		first.style.display = "block";
		
 
  	if (second.style.display == "none")
		second.style.display = "block";

	if (valider.style.display == "none")
		valider.style.display = "block";

	if (infosemploi.style.display == "none")
		infosemploi.style.display = "block";

	if (chacha.style.display == "none")
		chacha.style.display = "block";

	if (condition1.style.display == "none")
		condition1.style.display = "block";

	condition.style.display="none";
	

	document.getElementById("formulairecompte").addEventListener("submit", function(e){
	e.preventDefault();
	var erreur;
	var numeroagence = document.getElementById("numeroagence");
	var numerocompte = document.getElementById("numerocompte");
	var clerib = document.getElementById("clerib");
	var email = document.getElementById("email");
	var salire = document.getElementById("salaire");
	var nomemployeur = document.getElementById("nomemployeur");
	var adressemployeur = document.getElementById("adressemployeur"); 
	var rs = document.getElementById("rs");
	var id = document.getElementById("id");
	var typecompte = document.getElementById("typecompte");
	var frais = document.getElementById("frais");
	var montant= document.getElementById("montant");


	 if(document.formcompte.client.value == 5){
		alert("Veuillez choisir le client!");
	}
   	 else if (!numeroagence.value){
		alert("Veuillez renseignez le numero de l'agence!");
		e.preventDefault();
	}
	else if(isNaN(numeroagence.value)){
		alert("le numero de l'agence doit etre uniquement des valeurs numeriques");
	}


	else if (!numerocompte.value){
		alert("Veuillez renseignez le numero du compte!");
		
	}
	else if(isNaN(numerocompte.value)){
		alert("le numero du compte doit etre uniquement des valeurs numeriques");
	}

	else if (!clerib.value){
                 // document.getElementById("msg").innerHTML="Entrez uniquement une valeur numérique";
         alert("Veuillez renseignez le clerib:Entrez uniquement une valeur numérique");
               
             }
    else if(isNaN(clerib.value)){
		alert("la cle RIB doit etre uniquement des valeurs numeriques");
	}
	else if(clerib.value<1) {
		alert("la cle RIB doit etre etre comprise entre 01 et 97");
	}
	else if(clerib.value>97){
		alert("la cle RIB doit etre etre comprise entre 01 et 97");
	}
	else if((!salaire.value) || isNaN(salaire.value)){
		alert("Veuillez renseignez correctement votre salaire!");
	}
	else if((!nomemployeur.value) || isNaN(nomemployeur.value)==false){
		alert("Veuillez renseignez correctement le nom de l'employeur!");
	}
	else if((!adressemployeur.value) || isNaN(adressemployeur.value)==false){
		alert("Veuillez renseignez correctement l'adresse' de l'employeur!");
	}
	else if((!rs.value) || isNaN(rs.value)==false){
		alert("Veuillez renseignez la raison sociale de l'entreprise!");
	}
	 else if((!id.value) || isNaN(id.value)){
		alert("Veuillez renseignez l'identification de l'entreprise!");
	}	
	else if (!montant.value){
		alert("Veuillez renseignez le montant initial!");
		e.preventDefault();
	}
	else if(isNaN(montant.value)){
		alert("Veuillez renseignez correctement le montant initial!");
	}else if(document.getElementById("processedCheckBox2").checked==false){
		alert("Veuillez accepter les conditions d'ouverture de ce type de compte!")
	}
	

	// if (typecompte.value!="xeweul"){
	// 	alert("Veuillez selectionner le type de compte!");
	// }
	// if(typecompte.value=="xeweul"){
	// 	document.getElementById("frais").disabled=true;
	// 	document.getElementById("frais").style.backgroundColor = "#CCCCCC";
	// }
	
});

  }
  else{
 //  	h4.style.display = "none";
 //  	aicha.style.display = "none";
	// cha.style.display = "none";	
	// label.style.display = "none";
	// chacha.style.display="none";	
	// infosemploi.style.display = "none";
	// valider.style.display = "none";



  }


}
















