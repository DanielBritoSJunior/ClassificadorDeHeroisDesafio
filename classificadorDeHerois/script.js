let nomeHeroi = "IronFlame"
let xpHeroi = 1001

if (xpHeroi <= 1000) {
    console.log("Parabéns " + nomeHeroi + ", seu rank é: Ferro");
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    console.log("Parabéns " + nomeHeroi + ", seu rank é: Bronze");
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    console.log("Parabéns " + nomeHeroi + ", seu rank é: Prata");
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    console.log("Parabéns " + nomeHeroi + ", seu rank é: Ouro");
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    console.log("Parabéns " + nomeHeroi + ", seu rank é: Platina");
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    console.log("Parabéns " + nomeHeroi + ", seu rank é: Ascendente");
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    console.log("Parabéns " + nomeHeroi + ", seu rank é: Imortal");
} else {
    console.log("Parabéns " + nomeHeroi + ", seu rank é: Radiante");
}
