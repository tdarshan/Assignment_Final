let cards =[
    {
        Image: "https://toppng.com/uploads/preview/ironman-11530959568p37w0vum8e.png",
        value: 1,
        status: "closed"
    },

    {
        Image: "https://toppng.com/uploads/preview/ironman-11530959568p37w0vum8e.png",
        value: 1,
        status: "closed"
    },

    {
        Image: "https://www.nicepng.com/png/detail/2-25929_aou-thor-thor-png.png",
        value: 2,
        status: "closed"
    },

    {
        Image: "https://www.nicepng.com/png/detail/2-25929_aou-thor-thor-png.png",
        value: 2,
        status: "closed"
    },

    {
        Image: "https://toppng.com/uploads/preview/captain-america-11530961268fleftbwmf0.png",
        value: 3,
        status: "closed"
    },

    {
        Image: "https://toppng.com/uploads/preview/captain-america-11530961268fleftbwmf0.png",
        value: 3,
        status: "closed"
    },

    {
        Image: "https://www.pngitem.com/pimgs/m/9-94994_doctor-strange-download-transparent-png-image-avengers-infinity.png",
        value: 4,
        status: "closed"
    },

    {
        Image: "https://www.pngitem.com/pimgs/m/9-94994_doctor-strange-download-transparent-png-image-avengers-infinity.png",
        value: 4,
        status: "closed"
    },

    {
        Image: "https://www.kindpng.com/picc/m/111-1118525_marvel-thanos-png-free-download-thanos-png-transparent.png",
        value: 5,
        status: "closed"
    },

    {
        Image: "https://www.kindpng.com/picc/m/111-1118525_marvel-thanos-png-free-download-thanos-png-transparent.png",
        value: 5,
        status: "closed"
    }
];


let temp;
for(let i = cards.length-1; i >= 0; i--){

    let j = Math.floor(Math.random()*(i+1));

    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;

}

let cardsCopy = cards;


function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString += `
            <div class="card" style="background-image: url('${card.Image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });

    document.getElementById('cards').innerHTML = cardsString;

}

displayCards(cards);

let cardCount = 1;
let val1 = null, val2 = null;
let score = 0;

function openCard(index){


    cards[index].status = "opened";

    if (cardCount===1) {
        val1 = cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2 = cards[index].value;

        if (val1 === val2) {
            score++;
            document.getElementById('score').innerText = score;

            val1 = null;
            val2 = null;
            cardCount = 1;
        }
        else{

            alert("Oh no, GameOver!!! ");
            location.reload();

        }

    }


    displayCards(cards);

}
