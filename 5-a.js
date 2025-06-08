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
