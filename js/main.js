var quotes =[
    {
        quote :'“Be yourself; everyone else is already taken.” to your code',
        author: "― Oscar Wilde",
    },
    {
        quote :'“So many books, so little time.”',
        author: "― Frank Zappa",
    },
    {
        quote :'“A room without books is like a body without a soul.”',
        author: "― Marcus Tullius Cicero",
    },
    {
        quote :'“You only live once, but if you do it right, once is enough.”',
        author: "― Mae West",
    },
    {
        quote :'“Be the change that you wish to see in the world.”',
        author: "― Mahatma Gandhi",
    },

    {
        quote :'“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
        author: "― Maya Angelou",
    },
    {
        quote :'“A friend is someone who knows all about you and still loves you.”' ,
        author: "― Elbert Hubbard",
    },

    {
        quote :'“A day without sunshine is like, you know, night.”',
        author: "― Steve Martin",
    },
]



// function displayQuotes(){
//     var content ="";
//     var x = Math.floor((Math.random()*quotes.length));
//     content+=`
//     <p>${quotes[x].quote}</p>
//     <span > ${quotes[x].author} </span>
//     `
//     document.getElementById("content").innerHTML=content
// }
// ---------------------------------------------------
// دي طريقه تانيه برضو شغاله امتي اشتغل بدي وامتي بدي 
// غالبا يعني كل ما كود الجافا صغر هيبقي افضل وكمان الhtml بتتقرا الاول 
// محتاج تاكيد علي المعلومه بس مش اكتر 
// ---------------------------------------------------
var copyOfArray = quotes //or slice 
function displayQuotes(){
    if(copyOfArray.length ===0){
        copyOfArray = quotes ;
    }
    var quoteRandom = Math.floor( Math.random()*copyOfArray.length  );
document.getElementById("quote").innerHTML=copyOfArray[quoteRandom].quote;
document.getElementById("authorName").innerHTML=copyOfArray[quoteRandom].author;
}
copyOfArray.splice(quoteRandom,1)
// هكتب انجلش علي متتزاولش زي فوق
//  the random number can`t be repeat in currant cycle until the cycle finished
// but after the cycle finished can repeat in the new cycle
// in one case can repeat if the last random number of this cycle is the first number in new cycle
// after search to solve this problem we should store in localstorage and ask with if or while 
// > if the localstorage includes this random number or not .......... but i don`t need to copy past it 