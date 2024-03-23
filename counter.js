function counter(word) {
   let numvowels = 0;
   const vowels = ["a", "e", "i", "o", "u"]
   for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (vowels.includes(letter)) {
         numvowels++;
      };
   }
   return numvowels;
}

console.log(counter("aeiou"));