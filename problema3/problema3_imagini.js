$(document).ready(function () {
    var pairs = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
    var currentFlipped =[];
    var currentFlippedId=[];
    var correctFlipped=0;
    var noOfMoves = 0;
    alert("New game has just begun!");
    var mainDivContent = '';
    //fisher yates algorithm for shuffling pairs
    for(let i = pairs.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        const temp = pairs[i];
        pairs[i] = pairs[j];
        pairs[j] = temp;
    }
    for (let i=0;i<pairs.length;i++){
        mainDivContent += '<div id="elem'+i+'" , name="'+pairs[i]+'"></div>';
    }
    $('#mainDiv').html(mainDivContent);
    $("#mainDiv > div").click(function () {
        noOfMoves += 1;
        let elemValue;
        let elemId;
        if ($(this).html() === '' && currentFlipped.length < 2) {
            elemValue = $(this).attr('name');
            elemId = $(this).attr('id');
             $(this).css("background-image",'url(clicked'+elemValue+'.jpg)');
            if (currentFlipped.length === 0) {
                currentFlipped.push(elemValue);
                currentFlippedId.push(elemId);
            } else if (currentFlipped.length === 1) {
                currentFlipped.push(elemValue);
                currentFlippedId.push(elemId);
                if (currentFlipped[0] === currentFlipped[1]) {
                    correctFlipped += 2;
                    currentFlipped = [];
                    currentFlippedId = [];
                    if (correctFlipped === pairs.length) {
                        alert("END GAME IN "+noOfMoves.toString()+' MOVES!');
                        $('#mainDiv').html('');
                    }
                } else {
                    function hideAgain() {
                        var fstElemId = '#'+currentFlippedId[0];
                        var sndElemId = '#'+currentFlippedId[1];
                        $(fstElemId).attr('style','background-image:url(initial.jpg)');
                        $(sndElemId).attr('style','background-image:url(initial.jpg)');
                        currentFlipped = [];
                        currentFlippedId = [];
                    }

                    setTimeout(hideAgain, 1000);
                }
            }
        }
    })
});

