var z = 10

function generate() {
    var x = Math.random();
    var y = ( Math.floor(x * quotes.length) );
    console.log(y);

    if( y == z){
      generate()
    }
    else{
      z = y
      document.getElementById("one").innerHTML = quotes[y].quote
      document.getElementById("two").innerHTML = quotes[y].author
    }
}

var quotes = [

    { quote : ` "Resentment is like drinking poison and waiting for your enemies to die" `  , 
      author : `-- Nelson Mandela` }
    ,
    { quote : ` "It's not what happens to you, but how you react to it that matters." `  , 
      author : `-- Epictetus` }
    ,
    { quote : ` "You miss 100% of the shots you don't take." `  , 
      author : `-- Wayne Gretzy` }
    ,
    { quote : ` "The best revenge is massive success." `  , 
      author : `-- Frank Sinatra` }
    ,
    { quote : ` "Do not take life too seriously. You will not get out alive."`  , 
      author : `-- Elbert Hubbard` }
      
]
