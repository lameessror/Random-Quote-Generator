
var usedQuotes = [];

function randomQuotes(){
        var quotesArray = [
                { quote: '“It does not do to dwell on dreams and forget to live.”', 
                author: '― J.K. Rowling'
                },
                { quote: '“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”', 
                author: '― Bill Keane'
                },
                { quote: '“The man who does not read has no advantage over the man who cannot read.”', 
                author: '― Mark Twain'
                },
                { quote: '“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”', 
                author: '― Dr. Seuss'
                },
                { quote: '“That which does not kill us makes us stronger.”', 
                author: '― Friedrich Nietzsche'
                },
                { quote: '“It is never too late to be what you might have been.”', 
                author: '― George Eliot'
                },
                { quote: '“For every minute you are angry you lose sixty seconds of happiness.”', 
                author: '― Ralph Waldo Emerson'
                },
                { quote: '“If you judge people, you have no time to love them.”', 
                author: '― Mother Teresa'
                },
                { quote: '“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”', 
                author: '― Haruki Murakami'
                },
                { quote: '“Everything you can imagine is real.”', 
                author: '― Pablo Picasso'
                }
                ];
                
                var random = Math.floor(Math.random() * quotesArray.length );
                // console.log(quotesArray[random])
                document.getElementById("quoteOutput").innerHTML = quotesArray[random].quote;
                document.getElementById("authorOutput").innerHTML = quotesArray[random].author;

}
// randomQuotes();
