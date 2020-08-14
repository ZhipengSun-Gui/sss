"use strict";

var scrabbleTiles = {
  A: {
    value: 1,
    "original-distribution": 9,
    "number-remaining": 9,
    image: "img/scrabble/Scrabble_Tile_A.jpg",
  },
  B: {
    value: 3,
    "original-distribution": 2,
    "number-remaining": 2,
    image: "img/scrabble/Scrabble_Tile_B.jpg",
  },
  C: {
    value: 3,
    "original-distribution": 2,
    "number-remaining": 2,
    image: "img/scrabble/Scrabble_Tile_C.jpg",
  },
  D: {
    value: 2,
    "original-distribution": 4,
    "number-remaining": 4,
    image: "img/scrabble/Scrabble_Tile_D.jpg",
  },
  E: {
    value: 1,
    "original-distribution": 12,
    "number-remaining": 12,
    image: "img/scrabble/Scrabble_Tile_E.jpg",
  },
  F: {
    value: 4,
    "original-distribution": 2,
    "number-remaining": 2,
    image: "img/scrabble/Scrabble_Tile_F.jpg",
  },
  G: {
    value: 2,
    "original-distribution": 3,
    "number-remaining": 3,
    image: "img/scrabble/Scrabble_Tile_G.jpg",
  },
  H: {
    value: 4,
    "original-distribution": 2,
    "number-remaining": 2,
    image: "img/scrabble/Scrabble_Tile_H.jpg",
  },
  I: {
    value: 1,
    "original-distribution": 9,
    "number-remaining": 9,
    image: "img/scrabble/Scrabble_Tile_I.jpg",
  },
  J: {
    value: 8,
    "original-distribution": 1,
    "number-remaining": 1,
    image: "img/scrabble/Scrabble_Tile_J.jpg",
  },
  K: {
    value: 5,
    "original-distribution": 1,
    "number-remaining": 1,
    image: "img/scrabble/Scrabble_Tile_K.jpg",
  },
  L: {
    value: 1,
    "original-distribution": 4,
    "number-remaining": 4,
    image: "img/scrabble/Scrabble_Tile_L.jpg",
  },
  M: {
    value: 3,
    "original-distribution": 2,
    "number-remaining": 2,
    image: "img/scrabble/Scrabble_Tile_M.jpg",
  },
  N: {
    value: 1,
    "original-distribution": 6,
    "number-remaining": 6,
    image: "img/scrabble/Scrabble_Tile_N.jpg",
  },
  O: {
    value: 1,
    "original-distribution": 8,
    "number-remaining": 8,
    image: "img/scrabble/Scrabble_Tile_O.jpg",
  },
  P: {
    value: 3,
    "original-distribution": 2,
    "number-remaining": 2,
    image: "img/scrabble/Scrabble_Tile_P.jpg",
  },
  Q: {
    value: 10,
    "original-distribution": 1,
    "number-remaining": 1,
    image: "img/scrabble/Scrabble_Tile_Q.jpg",
  },
  R: {
    value: 1,
    "original-distribution": 6,
    "number-remaining": 6,
    image: "img/scrabble/Scrabble_Tile_R.jpg",
  },
  S: {
    value: 1,
    "original-distribution": 4,
    "number-remaining": 4,
    image: "img/scrabble/Scrabble_Tile_S.jpg",
  },
  T: {
    value: 1,
    "original-distribution": 6,
    "number-remaining": 6,
    image: "img/scrabble/Scrabble_Tile_T.jpg",
  },
  U: {
    value: 1,
    "original-distribution": 4,
    "number-remaining": 4,
    image: "img/scrabble/Scrabble_Tile_U.jpg",
  },
  V: {
    value: 4,
    "original-distribution": 2,
    "number-remaining": 2,
    image: "img/scrabble/Scrabble_Tile_V.jpg",
  },
  W: {
    value: 4,
    "original-distribution": 2,
    "number-remaining": 2,
    image: "img/scrabble/Scrabble_Tile_W.jpg",
  },
  X: {
    value: 8,
    "original-distribution": 1,
    "number-remaining": 1,
    image: "img/scrabble/Scrabble_Tile_X.jpg",
  },
  Y: {
    value: 4,
    "original-distribution": 2,
    "number-remaining": 2,
    image: "img/scrabble/Scrabble_Tile_Y.jpg",
  },
  Z: {
    value: 10,
    "original-distribution": 1,
    "number-remaining": 1,
    image: "img/scrabble/Scrabble_Tile_Z.jpg",
  },
  _: {
    value: 0,
    "original-distribution": 2,
    "number-remaining": 2,
    image: "img/scrabble/Scrabble_Tile_Blank.jpg",
  },
};

let word = "";
let arrWord = new Array(7).fill(0);
let score = 0;
let remainingTiles = 100;
let highestScore = window.localStorage.getItem("highestScore") || 0;

let isDictionaryWord = {};
isDictionaryWord.dict = {};
// Do an ajax request for the dictionary file.
$.ajax({
  url: "dictionary.txt",
  success: function (result) {
    var words = result.split("\n");

    for (var i = 0; i < words.length; ++i) {
      isDictionaryWord.dict[words[i].toUpperCase()] = true;
    }
  },
});
isDictionaryWord.checkWord = function (words) {
  return this.dict[words.toUpperCase()];
};

let board = {};

board.slots = [
  {
    letterMultiplier: 1,
    wordMultiplier: 1,
    image: "img/scrabble/Scrabble_BlankSquare_81x87.jpg",
  },
  {
    letterMultiplier: 1,
    wordMultiplier: 2,
    image: "img/scrabble/Scrabble_DoubleWordScore_81x87.jpg",
  },
  {
    letterMultiplier: 1,
    wordMultiplier: 1,
    image: "img/scrabble/Scrabble_BlankSquare_81x87.jpg",
  },
  {
    letterMultiplier: 1,
    wordMultiplier: 1,
    image: "img/scrabble/Scrabble_BlankSquare_81x87.jpg",
  },
  {
    letterMultiplier: 1,
    wordMultiplier: 1,
    image: "img/scrabble/Scrabble_BlankSquare_81x87.jpg",
  },
  {
    letterMultiplier: 1,
    wordMultiplier: 2,
    image: "img/scrabble/Scrabble_DoubleWordScore_81x87.jpg",
  },
  {
    letterMultiplier: 1,
    wordMultiplier: 1,
    image: "img/scrabble/Scrabble_BlankSquare_81x87.jpg",
  },
];

board.word = "";

board.checkGap = function () {
  return /\s/.test(this.word);
};
board.checkLength = function () {
  return this.word.length >= 2;
};
board.checkWord = function () {

  if (isDictionaryWord.checkWord(this.word) && this.checkLength(this.word)) {
    $('#nextWordButton').attr({
      'disabled': false
    })
  } else {
    $('#nextWordButton').attr({
      'disabled': true
    })
  }

  if (!this.word) {
    $("#instruction img").css({
      filter: "grayscale(100%)",
      opacity: 0.2,
    });
    return true;
  }

  if (!this.checkGap()) {
    $("#oneWordCheckIcon").css({
      filter: "none",
      opacity: 1,
    });
  } else {
    $("#oneWordCheckIcon").css({
      filter: "grayscale(1)",
      opacity: 0.2,
    });
  }

  if (this.checkLength(this.word)) {
    $("#minLengthIcon").css({
      filter: "none",
      opacity: 1,
    });
  } else {
    $("#minLengthIcon").css({
      filter: "grayscale(1)",
      opacity: 0.2,
    });
  }

  if (isDictionaryWord.checkWord(this.word)) {
    $("#dictionaryCheckIcon").css({
      filter: "none",
      opacity: 1,
    });

    return true;
  } else {
    $("#dictionaryCheckIcon").css({
      filter: "grayscale(1)",
      opacity: 0.2,
    });
    return false;
  }

};

board.initScoreboard = function () {
  $("#board").html(`
        ${this.slots
          .map(
            (item, index) => `<div class="boardSlot" 
        data-index="${index}"
        style="
        background-image: url('${item.image}');
        width: 81px;
        height: 87px;
        margin: 1px;
        border-width: 1px;" ></div>`
          )
          .join("")}
    `);
  $(".boardSlot").droppable({
    activeClass: "dragActive",
    hoverClass: "hoverActiove",
    // accept: function (draggable) {
    //   return true;
    // },
    drop: function (event, ui) {
      if (arrWord[$(ui.draggable).data("index")]) {
        arrWord[$(ui.draggable).data("index")] = 0;
      }
      $(event.target).append($(ui.draggable));
      $(ui.draggable).data("index", event.target.dataset.index);
      $(ui.draggable).css({
        top: 3,
        left: 3,
      });
      setWord(event.target.dataset.index, {
        letter: $(ui.draggable).data("letter"),
        value: $(ui.draggable).data("value"),
      });
    },
  });
};

function initScore() {
  $("#word").text('');
  $("#score").text(0);
  $("#currentScore").text(0);
  $("#remainingTiles").text(93);
  $("#highestScore").text(highestScore);
  $("#instruction img").css({
    filter: "grayscale(100%)",
    opacity: 0.2,
  });
}

function initLetter() {
  let letters;
  if (remainingTiles > 7) {
    letters = getRandomLetter(7);
    remainingTiles -= 7;
  } else if (remainingTiles > 0) {
    letters = getRandomLetter(remainingTiles);
    remainingTiles = 0;
  }

  $("#letterRack").html(
    letters
      .map(
        (item, index) => `
            <img 
                id="tile${index}"
                src="${item.image}"
                class="letterTile"
                data-letter="${item.letter}"
                data-value="${item.value}"
                style="position: relative;
                width: 75px;
                right: auto;
                height: 81px;
                bottom: auto;
                left: 0px; top: 0px;">
        `
      )
      .join("")
  );

  $("#remainingTiles").text(remainingTiles);
  $(".letterTile").draggable();
}

function getRandomLetter(n) {
  var letters = [];
  var allLetters = [];

  // Make an array of all remaining tiles for a random selection.
  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      var remaining = scrabbleTiles[key]["number-remaining"];
      for (var i = 0; i < remaining; ++i) {
        allLetters.push(key);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    const randomNum = getRandomNum(allLetters.length);
    const letterInfo = allLetters[randomNum];
    if (scrabbleTiles[letterInfo]["number-remaining"] > 0) {
      letters.push({
        ...scrabbleTiles[letterInfo],
        letter: letterInfo,
      });
      scrabbleTiles[letterInfo]["number-remaining"]--;
      allLetters.splice(randomNum, 1);
    }
  }
  return letters;
}

function getRandomNum(len) {
  return Math.floor(Math.random() * len);
}
function restart() {}

function setWord(index, wordInfo) {
  if (wordInfo) {
    arrWord[index] = wordInfo;
  } else {
    arrWord[index] = 0;
  }
  board.word = arrWord
    .map((item) => (item === 0 ? 0 : item.letter))
    .join("")
    .replace(/0/g, " ")
    .trim();
  $('#word').text(board.word);
  if (board.checkWord()) {
    calcScore();
  }
}

function calcScore() {
  let currentScore;
  if (arrWord.length) {
    currentScore = arrWord.reduce(function (acc, cur, index) {
      if ((index === 1 || index === 5) && cur !== 0) {
        return acc + cur.value * 2;
      } else if (cur !== 0) {
        return acc + cur.value;
      }
      return acc;
    }, 0);
  } else {
    currentScore = 0;
  }
  $("#currentScore").text(currentScore);

}

function nextWord() {
  arrWord = new Array(7).fill(0);
  $('#word').text('');
  $('#nextWordButton').attr({
    'disabled': true
  })

  score = score + +$("#currentScore").text();
  $("#score").text(score);

  $("#currentScore").text(0);

  initLetter();
  if (score > highestScore) {
    $("#highestScore").text(score);
    window.localStorage.setItem("highestScore", score);
  }
  $('.boardSlot').children().remove();
  $("#instruction img").css({
    filter: "grayscale(100%)",
    opacity: 0.2,
  });
}

$(function () {
  initScore();
  board.initScoreboard();
  initLetter();

  $("#letterRack").droppable({
    activeClass: "dragActive",
    hoverClass: "hoverActiove",
    drop: function (event, ui) {
      console.log(event, ui, "letterRack");
      $(event.target).append($(ui.draggable));
      $(ui.draggable).css({
        top: "",
        left: "",
      });
      setWord($(ui.draggable).data("index"), null);
    },
  });
});
