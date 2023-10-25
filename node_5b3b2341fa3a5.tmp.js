const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obterNivel(xpDoHeroi) {
    if (xpDoHeroi < 1000) {
        return "Ferro";
    } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
        return "Bronze";
    } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
        return "Prata";
    } else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
        return "Ouro";
    } else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
        return "Platina";
    } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
        return "Ascendente";
    } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

function inserirHeroi() {
    rl.question("Digite o nome do herói (ou 'sair' para encerrar): ", function(nomeDoHeroi) {
        if (nomeDoHeroi.toLowerCase() === "sair") {
            rl.close();
        } else {
            rl.question("Digite a quantidade de XP do herói: ", function(xpDoHeroi) {
                const nivelDoHeroi = obterNivel(parseInt(xpDoHeroi));
                console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);
                inserirHeroi();
            });
        }
    });
}

console.log("Bem-vindo! Insira informações sobre heróis. Digite 'sair' no nome para encerrar.");
inserirHeroi();