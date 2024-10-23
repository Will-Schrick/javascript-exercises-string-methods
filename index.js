// =============================================================================
// 1. Dada la siguiente string, usa .charAt() para devolver letra
//    'b' de cada uno de los elementos de la string en la palabra the-bridge.
// =============================================================================
function getCharAt(string) {
  //const string = "the-bridge";
  const letter = string.charAt(4);
  return letter;

 // console.log(string);

  // Aquí tu código
}

// =============================================================================
// 2. Dada la siguiente string, usa .substring() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getSubstring(string) {
  // Aquí tu código
  //console.log(string);
  //the-bridge-is-here
  const answer = string.substring(0,10);
  return answer;
}

// =============================================================================
// 3. Dada la siguiente string, usa .substr() para devolver palabra
//    'bridge'.
// =============================================================================
function getSubstr(string) {
  // Aquí tu código
  //console.log(string);
  //the-bridge-is-here
    const answer = string.substr(4,6);
    return answer;

}

// =============================================================================
// 4. Dada la siguiente string, usa .toUpperCase() para devolver
//    palabra 'THE-BRIDGE'.
// =============================================================================
function getUpperCase(string) {
  // Aquí tu código
  //console.log(string);
  const answer = string.toUpperCase();
  return answer;
}

// =============================================================================
// 5. Dada la siguiente string, usa .toLowerCase() para devolver
//    palabra 'the-bridge'.
// =============================================================================
function getLowerCase(string) {
  // Aquí tu código
  const answer = string.toLowerCase();
  return answer;
}

// =============================================================================
// 6. Dada la siguiente string, usa .trim() para devolver palabra
//    'the-bridge'.
// =============================================================================
function getTrim(string) {
  // Aquí tu código
  const answer = string.trim();
  console.log(string);
  return answer;
 
}

// =============================================================================
// 7. Dada la siguiente string, usa .split() para devolver un array
//    con las palabras que forman la frase.
// =============================================================================
function getSplit(string) {
  // Aquí tu código
  console.log(string);
  const answerSplit = string.split(' ')
  
 return answerSplit;
}



// =============================================================================
// 8. Dada la siguiente string, usa .replace() para devolver un string
//    con las palabras que forman la frase.
// =============================================================================
function getReplace(string,wordToReplace,wordToAdd) {
   //
  // Aquí tu código
  //console.log(string);
  //The Bridge is great

  const answer1 = string.replace( "great","amazing");
  console.log(answer1);
  const answer2 = string.replace(wordToReplace,wordToAdd);
  
  return answer2;
}

console.log(getReplace("The Bridge is great", "Bridge", "Apple"));




// =============================================================================
// 9. Dada la siguiente string, usa .indexOf() para devolver posición
//    de la palabra 'The'.
// =============================================================================
function getIndexOf(string) {
  // Aquí tu código
  const indexThe = string.indexOf('The');
  return indexThe;
}



// =============================================================================
// 10. Dada la siguiente string, usa .startsWith() para devolver true
//     si la palabra 'the' está al principio de la frase.
// =============================================================================
function getStartsWith(string) {
  // Aquí tu código
  return string.toLowerCase().startsWith('the');
}

// =============================================================================
// 11. Dada la siguiente string, usa .endsWith() para devolver true
//     si la palabra 'here' está al final de la frase.
// =============================================================================
function getEndsWith(string) {
  // Aquí tu código
  console.log(string);
  return string.toLowerCase().endsWith('here');
  
}

//console.log(getEndsWith(string)); 
// I can't see True and I would like to see it print in console. ? 

// =============================================================================
// 12. Dada la siguiente string, usa .includes() para devolver true
//     si la frase contiene la palabra 'the'.
// =============================================================================
function getIncludes(string) {
  // Aquí tu código
}

// =============================================================================
// 13. Dada la siguiente string, usa .concat() para devolver string
//     con la palabra 'the' y la palabra 'bridge'.
// =============================================================================
function getConcat(string1, string2) {
  // Aquí tu código
}

// =============================================================================
