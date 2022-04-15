var firstLis = Array.from(document.querySelectorAll("#firstQ ul li"));
var secondLis = Array.from(document.querySelectorAll("#secQ ul li"));
var thirdLis = Array.from(document.querySelectorAll("#thQ ul li"));
var fourthLis = Array.from(document.querySelectorAll("#frQ ul li"));
var result = "";
var score = 0;
var maxScore = 20;

function getActive(list) {
    const handleClick = (e) => {
//   e.preventDefault();
        list.forEach(node => {
    node.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
    }
    list.forEach(node => {
  node.addEventListener('click', handleClick)
    });
    
}

getActive(firstLis);
getActive(secondLis);
getActive(thirdLis);
getActive(fourthLis);


function getScore(list) {
    for (var i = 0; i < list.length; i++) {
        list[i].onclick = function(index) {
            return function(e) {
                if (index == 0) {
                    score = score + 5;
                }
                if (index == 1) {
                    score = score + 4;
                }
                if (index == 2) {
                    score = score + 3;
                }
                if (index == 3) {
                    score = score + 2;
                }
                if (index == 4) {
                    score = score + 1;
                }
            };
        }(i);
    }
}

getScore(firstLis);
getScore(secondLis);
getScore(thirdLis);
getScore(fourthLis);


function getResult() {
    if (score == maxScore) {
        result = "Máš sa skvele!"
    }
    if (score < maxScore && score > maxScore / 2) {
        result = "Oddýchni si, zaslúžiš si to."
    }
    if (score < maxScore / 2) {
        result = "Dnes nie je tvoj deň, zaslúžiš si pauzu."
    }
  
    document.getElementById('resultText').innerText = result;
    document.getElementById('resultContent').style.display = "block";
}


