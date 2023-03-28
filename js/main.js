const nome = prompt("Inserisci il tuo nome:");
const cognome = prompt("Inserisci il tuo cognome:");
const colore = prompt("Inserisci il tuo colore preferito:");
let password = (nome+cognome+colore+21)


let passwordGeneretorWannabe =`
---------- Generatore Password ---------- 
> Informazioni

nome: ${nome}
cognome: ${cognome}
colore: ${colore}

---------- Password Generata ----------

password: ${password}
`;




console.log(passwordGeneretorWannabe);