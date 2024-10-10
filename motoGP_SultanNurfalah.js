// Sultan Nurfalah
// TI23H

var motoGP = [
{
    circuit : 'Losail',
    location : 'Qatar',
    winner : {
        firstName : 'Andrea',
        lastName : 'Dovizioso',
        country : 'Italy'
    }
}, 
{
    circuit : 'Autodromo',
    location : 'Argentine',
    winner : {
        firstName : 'Cal',
        lastName : 'Crutchlow',
        country : 'UK'
    } 
},
{
    circuit : 'De Jerez',
    location : 'Spain',
    winner : {
        firstName : 'Valentino',
        lastName : 'Rossi',
        country : 'Italy'
    }
},
{
    circuit : 'Mugello',
    location : 'Italy',
    winner : {
        firstName : 'Andrea',
        lastName : 'Dovizioso',
        country : 'Italy'
    }
}
]

console.log(motoGP[0])
console.log(motoGP[1])
console.log(motoGP[2])
console.log(motoGP[3])

// Tugas : Kelompokan data tersebut berdasarkan negara pemenang

var groupedByCountry = motoGP.reduce(function(acc, race) {
    var country = race.winner.country;

    if (!acc[country]) {
        acc[country] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    acc[country].winningCircuits.push({
        name: race.winner.firstName + ' ' + race.winner.lastName,
        winLocation: race.circuit + ', ' + race.location
    });

    acc[country].totalWin++;

    return acc;
}, {});


for (var country in groupedByCountry) {
    console.log(country + ':');
    console.log('  winningCircuits:');
    groupedByCountry[country].winningCircuits.forEach(function(circuit) {
        console.log('    { name: \'' + circuit.name + '\', winLocation: \'' + circuit.winLocation + '\' },');
    });
    console.log('  totalWin: ' + groupedByCountry[country].totalWin);
}
