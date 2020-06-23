
document.getElementById("formulaire").addEventListener("submit", function(e){
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
	if (typecompte.value!="xeweul"){
		alert("Veuillez selectionner le type de compte!");
	}
	if(typecompte.value=="xeweul"){
		document.getElementById("frais").disabled=true;
		document.getElementById("frais").style.backgroundColor = "#CCCCCC";
	}
	
});
