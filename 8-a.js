//Write an npm script having a function vowelCount() that takes a string as input and counts number of occurrences of each vowels in the string. 
//(Hint: run the program through npm start)
//For ex- Input vowelCount('Le Tour de France') Output: a, e, i, o, and u appear, respectively, 1, 3, 0, 1, 1 times

function vowelCount(str) {
  const vowels = 'aeiou';
  const count = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count[char]++;
    }
  }

  console.log(`${str}`);
  console.log(`a, e, i, o, and u appear, respectively, ${count.a}, ${count.e}, ${count.i}, ${count.o}, ${count.u} times`);
}

vowelCount('Le Tour de France');

mkdir vowelcount
cd vowelcount
npm init -y
go to package.json and add inside scripts:
"start": "node vowelCount.js"
to run: npm start
