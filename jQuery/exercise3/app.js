$(document).ready(function() {
    var wordCount = 10;
    var guessCount = 4;
    var password = '';

    var $start = $('#start');
    $start.click(function() {
        $('#start-screen').toggleClass('hide show');
        $('#game-screen').toggleClass('hide show');
        // toggleClasses(document.getElementById('game-screen'), );
        startGame();
    });

    function toggleClasses(element) {
        for (var i = 1; i < arguments.length; i++) {
            element.classList.toggle(arguments[i]);
        }
    }

    function startGame() {
        // get random words and append them to the DOM
        var $wordList = $('#word-list');
        // 'words' variable is from words.js
        var randomWords = getRandomValues(words, wordCount); // eslint-disable-line no-undef
        randomWords.forEach(function(word) {
            var $li = $('<li>');
            $li.text(word);
            $wordList.append($li);
        });

        // set a secret password and the guess count display
        password = getRandomValues(randomWords, 1)[0];
        setGuessCount(guessCount);

        // add update listener for clicking on a word
        $wordList.click(updateGame);
    }

    function getRandomValues(array, numberOfVals) {
        return shuffle(array).slice(0, numberOfVals);
    }

    function shuffle(array) {
        var arrayCopy = array.slice();
        for (var idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
            // generate a random index between 0 and idx1 (inclusive)
            var idx2 = Math.floor(Math.random() * (idx1 + 1));

            // swap elements at idx1 and idx2
            var temp = arrayCopy[idx1];
            arrayCopy[idx1] = arrayCopy[idx2];
            arrayCopy[idx2] = temp;
        }
        return arrayCopy;
    }

    function setGuessCount(newCount) {
        guessCount = newCount;
        $('#guesses-remaining').text('Guesses remaining: ' + guessCount + '.');
    }

    function updateGame(e) {
        if ($(e.target).is('li') && $(e.target).attr("class") !== 'disabled') {
            // grab guessed word, check it against password, update view
            var guess = $(e.target).text();
            var similarityScore = compareWords(guess, password);
            $(e.target).addClass('disabled');
            $(e.target).text(guess + ' --> Matching Letters: ' + similarityScore);
            setGuessCount(guessCount - 1);

            // check whether the game is over
            if (similarityScore === password.length) {
                $('#winner').toggleClass('hide show'); //toggleClasses(document.getElementById('winner'), 'hide', 'show');
                $(this).off('click', updateGame);
            } else if (guessCount === 0) {
                $('#loser').toggleClass('hide show'); //toggleClasses(document.getElementById('loser'), 'hide', 'show');
                $(this).off('click', updateGame);
            }
        }
    }

    function compareWords(word1, word2) {
        if (word1.length !== word2.length) {
            throw 'Words must have the same length';
        }
        var count = 0;
        var wordCopy = word1.split('');
        for (var i = 0; i < wordCopy.length; i++) {
            if (word2.includes(wordCopy[i])) {
                count++;
                wordCopy.splice(i, 1);
                i--;
            }
        }
        return count;
    }
});