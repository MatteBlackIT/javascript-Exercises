const checkFive = require('../checkFive.js');



describe("checkFive", () => {

        test("returns 'num is less than 5' when num < 5", function () {
            let output = checkFive(2);
            expect(output).toEqual("2 is less than 5.")
        });
});