//Write an npm script having a function vowelCount() that takes a string as input and counts number of occurrences of each vowels in the string. 
//(Hint: run the program through npm start)
//For ex- Input vowelCount('Le Tour de France') Output: a, e, i, o, and u appear, respectively, 1, 3, 0, 1, 1 times

function vowelCount(input) {
  const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  const str = input.toLowerCase();

  for (let char of str) {
    if ('aeiou'.includes(char)) {
      vowels[char]++;
    }
  }

  console.log(`a, e, i, o, and u appear, respectively, ${vowels.a}, ${vowels.e}, ${vowels.i}, ${vowels.o}, ${vowels.u} times`);
}

vowelCount('Hello World');


mkdir vowels
cd vowels
npm init -y
go to package.json and add inside scripts:
"start": "node vowelCount.js"
to run: npm start
