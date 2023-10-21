let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

string = ''
for (let x of pronoun) {
  for (let i of adj) {
    for(let z of noun){
      string=x + i + z
      console.log(string);
    } 
  }
}
