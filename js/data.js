const verbpast = ["joined", "ran at", "laughed at", "jumped at", "killed"];
const adverb = ["hopelessly", "abnormally", "unethically", "viciously", "solidly"];
const noun = ["He", "She", "They"];
const noun2 = ["him.", "her.", "them."];


function replaceNoun() {
    let n = Math.floor(Math.random() * noun.length);
    let wordNoun = document.getElementById('noun');
    document.getElementById('noun').innerHTML = wordNoun;
    wordNoun.innerHTML = noun[n];
    console.log(n);
}


function replaceNounTwo() {
    let nn = Math.floor(Math.random() * noun2.length);
    let wordNounTwo = document.getElementById('nountwo');
    document.getElementById('nountwo').innerHTML = wordNounTwo;
    wordNounTwo.innerHTML = noun2[nn];
    console.log(nn);
}

function replaceVerbpast() {
    let v = Math.floor(Math.random() * verbpast.length);
    let wordVerb = document.getElementById('verbpast');
    document.getElementById('verbpast').innerHTML = wordVerb;
    wordVerb.innerHTML = verbpast[v];
    console.log(v);
}


function replaceAdverb() {
    let a = Math.floor(Math.random() * adverb.length);
    let wordAdverb = document.getElementById('adverb');
    document.getElementById('adverb').innerHTML = wordAdverb;
    wordAdverb.innerHTML = adverb[a];
    console.log(a);
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