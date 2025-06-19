/*Write a java script function named pluralize that:
takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Make it handle a few collective nouns like "sheep" and "geese".*/

function pluralize(noun,num)
{
  if(num==1){
    console.log(num+" : "+noun);
    }

  else{

    if(noun=="sheep"){
      console.log(num+" : "+noun);
    }

    else if(noun=="geese"){
      console.log(num+" : "+"goose");
    }
    
    else{
      console.log(num+" : "+noun+"s");}
    }
}

pluralize("cat", 1);
pluralize("dog", 5);
pluralize("car", 0);
pluralize("geese",4);
pluralize("sheep",3);

//HTML Code:
<html>
    <head>
        <title>Pluralize</title>
    </head>
    <body>
        <h2>Pluralize Function</h2>
        <input type="text" id="noun" placeholder="Enter the Noun"><br><br>
        <input type="text" id="num" placeholder="Enter the Number"><br><br>
        <button onclick="pluralize()">Click to Get Plural</button><br><br>
        <p id="res"></p>

        <script>
        function pluralize() {
            const word = document.getElementById("noun").value;
            const num = parseInt(document.getElementById("num").value);

            if (num === 1) {
            document.getElementById("res").innerHTML = `${num} ${word}`;
            } 
            else {
                if (word === "sheep") {
                    document.getElementById("res").innerHTML = `${num} sheep`;
                } 
                else if (word === "goose") {
                    document.getElementById("res").innerHTML = `${num} geese`;
                } 
                else {
                    document.getElementById("res").innerHTML = `${num} ${word}s`;
                }
            }
        }
        </script>
    </body>
</html>
