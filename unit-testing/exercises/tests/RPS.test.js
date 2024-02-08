const rpstest = require('../RPS.js');



describe("WhoWon", () => {
    test("returns 'Players tied!' if P1 = rock & P2 = rock", function() {
            let output = rpstest.whoWon('rock','rock');
            expect(output).toBe("TIE!");
    });

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = rpstest.whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
    });

});