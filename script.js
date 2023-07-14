var allQuote = [
    {
        words: "“1e yourself; everyone else is already taken.”",
    writer: "― 1Oscar Wilde"
}
,
{
    words: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    writer: "― Albert Einstein    "
},
{
    words: "“You only live once, but if you do it right, once is enough.”",
    writer: "― Mae West    "
},
{
    words: "“So many books, so little time.”",
    writer: "―  Frank Zappa    "
},
{
    words: "“Be the change that you wish to see in the world.”",
    writer: "― Frank Zappa    "
},
{
    words: "“If you tell the truth, you don't have to remember anything.”",
    writer: "― Mark Twain    "
},
{
    words: "“A friend is someone who knows all about you and still loves you.”",
    writer: "― Elbert Hubbard    "
}
];
// Math.floor(Math.random(Quote.length))


var oldquote = "";


function getQuote() {
    var Quote = [];
    Quote = allQuote;
    var myindex = Math.floor(Math.random() * Quote.length);
    newQuote = Quote[myindex].words;
    writer = Quote[myindex].writer;

    oldquote = document.getElementById("myquote").textContent;



    if (newQuote != oldquote) {
        document.getElementById("myquote").innerHTML = newQuote;
        document.getElementById("writer").innerHTML = writer;

    }

    else {

        switch (myindex) {
            case 0:
                newQuote = Quote[(Math.floor(Math.random() * myindex)) + 1].words;
                newwriter = Quote[(Math.floor(Math.random() * myindex)) + 1].writer;

                document.getElementById("myquote").innerHTML = newQuote;   
                document.getElementById("writer").innerHTML = newwriter;

                break;

            default:
                newQuote = Quote[(Math.floor(Math.random() * myindex))].words;
                newwriter = Quote[(Math.floor(Math.random() * myindex))].writer;

                document.getElementById("myquote").innerHTML = newQuote;
                document.getElementById("writer").innerHTML = newwriter;


        }

    }





}



    // var deltedQuote = Quote.splice(myindex,1);

    // console.log( " deltedQuote)   
    // newQuote = Quote[(Math.floor(Math.random() *  myindex )) ]; 
    // console.log(  newQuote) 
    //  console.log(  deltedQuote)  
    //  newQuote = allQuote;
    //  console.log("dd"+ newQuote)  
    // // console.log(  Quote) 
    // newQuote = Quote[(Math.floor(Math.random() *  myindex )) ]; 


    
    //    var newv =deltedQuote.toString(); 
    //    Quote.push(newv)

    //    Quote.push(newv)
    // console.log(Quote    )
    // console.log("كل الاري"+ Quote)
    // document.getElementById("myquote").innerHTML = myquote;
    // Quote.push(myquote);
    // console.log("كل الاري"+ Quote)
    // console.log(Quote)
    // oldquote = document.getElementById("myquote").textContent;

    // if (newQuote !== oldquote) {
    //     document.getElementById("myquote").innerHTML = newQuote;
    //     document.getElementById("writer").innerHTML = wrirer[myindex];
    //     console.log("1" + newQuote)
    // }

    // else {

    //     if(myindex == 0)
    //     {
    //         newQuote = Quote[Math.floor(Math.random() * Quote.length+1)];
    //         document.getElementById("myquote").innerHTML = newQuote;
    //     }
    //     else if(  myindex == 4 )
    //     {
    //         newQuote = Quote[Math.floor(Math.random() * Quote.length-1)];
    //         document.getElementById("myquote").innerHTML = newQuote;
    //     }
    //     else {
    //         newQuote = Quote[Math.floor(Math.random() * Quote.length)];
    //     document.getElementById("myquote").innerHTML = newQuote;
    //     console.log("2" + newQuote)
    //     }

    // }


