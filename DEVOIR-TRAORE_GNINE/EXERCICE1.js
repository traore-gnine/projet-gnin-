let nombre;
do {
    nombre = parseInt(prompt("Veuillez entrer un nombre entre 0 et 10 :"));
    if (nombre < 0 || nombre > 10) {
        alert("Nombre incorrect. Veuillez réessayer.");
    }
} while (nombre < 0 || nombre > 10);

// Boucle pour inverser et afficher les valeurs
for (let i = nombre; i >= 0; i--) {
    // Utiliser document.write pour ajouter la valeur à la page
    console.log(i + " ");
}