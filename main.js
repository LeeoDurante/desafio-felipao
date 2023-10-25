var herois = []; // Array para armazenar as informações dos heróis
var continuar = true;

while (continuar) {
    var nomeDoHeroi = prompt("Digite o nome do herói:"); // Solicita o nome do herói
    var xpDoHeroi = parseInt(prompt("Digite a quantidade de XP do herói:")); // Solicita a quantidade de XP e converte para um número inteiro

    var nivelDoHeroi;
    switch (true) {
        case xpDoHeroi < 1000:
            nivelDoHeroi = "Ferro";
            break;
        case xpDoHeroi >= 1001 && xpDoHeroi <= 2000:
            nivelDoHeroi = "Bronze";
            break;
        case xpDoHeroi >= 2001 && xpDoHeroi <= 5000:
            nivelDoHeroi = "Prata";
            break;
        case xpDoHeroi >= 6001 && xpDoHeroi <= 7000:
            nivelDoHeroi = "Ouro";
            break;
        case xpDoHeroi >= 7001 && xpDoHeroi <= 8000:
            nivelDoHeroi = "Platina";
            break;
        case xpDoHeroi >= 8001 && xpDoHeroi <= 9000:
            nivelDoHeroi = "Ascendente";
            break;
        case xpDoHeroi >= 9001 && xpDoHeroi <= 10000:
            nivelDoHeroi = "Imortal";
            break;
        default:
            nivelDoHeroi = "Radiante";
            break;
    }

    // Adicionar informações do herói ao array
    herois.push({ nome: nomeDoHeroi, xp: xpDoHeroi, nivel: nivelDoHeroi });

    var resposta = prompt("Deseja inserir outro herói? (sim/não)").toLowerCase();
    if (resposta !== "sim") {
        continuar = false;
    }
}

// Exibir todos os heróis cadastrados
var listaDeHerois = "Heróis cadastrados:\n";
for (var i = 0; i < herois.length; i++) {
    listaDeHerois += "Nome: " + herois[i].nome + ", XP: " + herois[i].xp + ", Nível: " + herois[i].nivel + "\n";
}

// Exibir a lista usando um alerta
alert(listaDeHerois);
