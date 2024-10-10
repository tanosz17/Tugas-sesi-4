// Sultan Nurfalah
// TI23H

let studentsScore = [
{
    name : "Andi",
    score : 90
},
{
    name : "Rudi",
    score : 80
},
{
    name : "Dira",
    score : 100
},
]

console.log(studentsScore[0])
console.log(studentsScore[1])
console.log(studentsScore[2])

// Tugas : Tampilkan hasil output berupa nama dan nilai siswa yang paling besar 

let bigScore = ""
let scoreStudent = 0

for(let i = 0; i < studentsScore.length; i++){
    if (studentsScore[i]["score"] > scoreStudent){
        scoreStudent = studentsScore[i]["score"]
        bigScore = studentsScore[i]["name"]
    }
}

console.log(`Nilai siswa yang paling besar adalah : ${bigScore} ${scoreStudent}`)
