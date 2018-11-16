let noun = ["house", "truck", "castle", "beer", "area", "book", "business", "case", "child", "company","country","day","eye","fact","family","government","group","hand","home","job","life","lot","man","money","month","mother","night","number","part","people","place","point","problem","program","question","right","room","school","state","story","student","study","system","thing","time","water","way","week","woman","word","work","world","year"]
let adj = ["big", "short", "incrdible", "", "", "bad","best","better","big","black","certain","clear","different","early","easy","economic","federal", "free","full","good","great","hard","high","human","important","international","large","late","little","local","long","low","major","military","national","new", "old","only","other","political","possible","public","real","recent","right","small","social","special","strong","sure","true","white","whole","young"]
let char = ["Gandalf", "Jack Ryan", "Thor", "Harry Potter", "the hero", "the protagontist", "the antagonist", "the villian", "the wiazrd", "the sugar plum fairy", "the architect"]
let noun2 = ["issues", "wrath", "unending joy", "frustration", ]


// var nounResult = noun[Math.floor(Math.random() * noun.length)];
// var adjResult = adj[Math.floor(Math.random() * adj.length)];
// var charResult = char[Math.floor(Math.random() * char.length)];
// var noun2Result = noun2[Math.floor(Math.random() * noun2.length)];


// console.log(nounResult)
function promtFunction() {
    let nounResult = noun[Math.floor(Math.random() * noun.length)];
    let adjResult = adj[Math.floor(Math.random() * adj.length)];
    let charResult = char[Math.floor(Math.random() * char.length)];
    let noun2Result = noun2[Math.floor(Math.random() * noun2.length)];


$("#prompt").html("The " + adjResult + " " + nounResult + " is dealing with the " + noun2Result + " of " + charResult)
}