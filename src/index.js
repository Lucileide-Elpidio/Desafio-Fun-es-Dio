function calculateLevel(victories, defeats) {
    let  balanceWins =victories - defeats;
    let level;

    switch (true) {
        case  balanceWins < 10:
            level= "Iron";
            break;
        case balanceWins <= 20:
            level= "Bronze";
            break;
        case  balanceWins <= 50:
            level = "Silver";
            break;
        case balanceWins <= 80:
            level= "Gold";
            break;
        case  balanceWins <= 90:
            level = "Diamond";
            break;
        case  balanceWins <= 100:
            level = "Legendary";
            break;
        default:
            level = "Immortal";
    }

    return `The Hero has a balance of ${balanceWins} and is at the level of ${level}`;
}


const mensage = calculateLevel(100, 32);
console.log(mensage);
