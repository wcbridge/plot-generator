let noun = ["house", "truck", "castle", "beer"]
let adj = ["big", "short", "incrdible"]
let char = ["Gandalf", "Jack Ryan", "Thor", "Harry Potter"]
let noun2 = ["issues", "wrath", "unending joy", "frustration"]


var nounResult = noun[Math.floor(Math.random() * noun.length)];
var adjResult = adj[Math.floor(Math.random() * adj.length)];
var charResult = char[Math.floor(Math.random() * char.length)];
var noun2Result = noun2[Math.floor(Math.random() * noun2.length)];


console.log(nounResult)

$("#prompt").append("The " + adjResult + " " + nounResult + " is dealing with the " + noun2Result + " of " + charResult)
