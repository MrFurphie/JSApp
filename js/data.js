const verbone = ["join", "run", "laugh", "jump", "kill"];
const adverb = ["hopelessly", "abnormally", "unethically", "viciously", "solidly"];
const noun = ["He", "She", "They"];
const noun2 = ["He", "She", "They"];


function replaceNoun() {
    let n = Math.floor(Math.random() * noun.length);
    let wordNoun = document.getElementById('noun');
    document.getElementById('poutput').innerHTML = wordNoun;
    wordNoun.innerHTML = noun[n];
    console.log(n);
}

// function replaceNoun() {
//     let n = Math.floor(Math.random() * verbone.length);
//     let wordNoun = document.getElementById('noun');
//     wordNoun.innerText = noun[n];
// };
// function replaceWords() {
//     let nn = Math.floor(Math.random() * verbone.length);
//     let wordNounTwo = document.getElementById('noun2');
//     wordNounTwo.innerText = noun2[nn];
// };
// function replaceWords() {
//     let v = Math.floor(Math.random() * verbone.length);
//     let wordVerbOne = document.getElementById('verbone');
//     wordVerbOne.innerText = verbone[v];
// };
// function replaceWords() {
//     let av = Math.floor(Math.random() * verbone.length);
//     let wordAdverb = document.getElementById('adverb');
//     wordAdverb.innerText = adverb[av];
// }

// <script>
// window.onload = function(){
//     document.getElementById('poutput').innerHTML = wordNoun};
//     </script>