console.log("\nThis is where the fun begins.\n                       -Anakin SkyWalker\n");



function makeLine(size) {
    let line = ''
        for (let i = 0; i < size; i++) {
            line += '#'
        }
                return line;
}
    makeLine(5);
        console.log(makeLine(5));

    console.log("\n<><><><><><><><><><><><><><><><><><><>\n")




    function makeSquare(rows) {
    let square = ''
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < rows; j++) {
                square += '#'
            }
                    square += '\n'
        }
            return square;
}
    makeSquare(5);
console.log(makeSquare(5));

    console.log("\n<><><><><><><><><><><><><><><><><><><>\n")




        function makeRectangle(width, height) {  //You don't know the POWER of the Dark Side. You did this solo
    let rectangle = ''
        for (let i = 0; i < height; i++) {
            // for (let j = 0; j < height; j++ ) {
                rectangle += (makeLine(width) + '\n');
            }
                    rectangle += '\n'
                        return rectangle;
        }

    makeRectangle(5, 3);
        console.log(makeRectangle(15,3));

        console.log("\n<><><><><><><><><><><><><><><><><><><>\n")




        function makeStairs(height) {
    let stairs = ''
        for (let i = 0; i < height; i++) {
            stairs += (makeLine(i+1) + '\n');
        }
                return stairs.slice(0, -1);
}
console.log(makeStairs(5));

console.log("\n<><><><><><><><><><><><><><><><><><><>\n")




function makeSpaceLine(nOS, nOC) {
    let spaceLine = ''
        for (let i = 0; i < nOS; i++){
            spaceLine += ' ';
        }
        spaceLine += (makeLine(nOC));
            for (let i = 0; i < nOS; i++){
                spaceLine += ' '
            }
            return spaceLine

                
}
console.log(makeSpaceLine(3, 5));

console.log("\n<><><><><><><><><><><><><><><><><><><>\n");




function makeIsoscelesTriangle(height) {
    let triangle = ''
        for (let i = 0; i < height; i++) {
            triangle += makeSpaceLine(height - i - 1, 2 * i + 1) + '\n';
        }
                return triangle
}

console.log(makeIsoscelesTriangle(5));

console.log("\n<><><><><><><><><><><><><><><><><><><>\n");




function makeDiamond(height) {
    let diamond = ''
diamond += makeIsoscelesTriangle(5);
        for (let i = height; i >= 1; i--) {
            diamond += makeSpaceLine(height - i, 2 * i - 1) + '\n';
}
                return diamond
}
console.log(makeDiamond(5));