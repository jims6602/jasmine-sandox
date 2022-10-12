const fs = require('fs');

// Importing the jsdom module
const jsdom = require("jsdom");

//Delete the contains of the log file
fs.writeFileSync('log/log.txt', '');

function log( message ) {

   let d = new Date();

    try {
        fs.appendFileSync('log/log.txt', d.toLocaleString() + ' ' + message + '\n' );
        // file written successfully
    } catch (err) {
        console.error(err);
    }

    return message;
}

describe( log("Initial Suite"), function() {

    it(log("1 Checking file exists"), function() {
        let result = fs.existsSync('views/index.html');
        log('1 ' + result)

        expect( result ).toEqual(true);
    });

    it(log("2 Appending to the body"), function() {

        let page = `<!DOCTYPE html>
                        <body>
                            <h1 class="heading"> GeeksforGeeks</h1>
                        </body>
                    `;

        // Creating a window with a document
        const dom = new jsdom.JSDOM(page);

        // Importing the jquery and providing it with the window
        const jquery = require("jquery")(dom.window);

        // Appending a paragraph tag to the body
        jquery("body").append("<p>Is a cool Website</p>");

        // Getting the content of the body
        const content = dom.window.document.querySelector("body");

        // Printing the content of the heading and paragraph
        log( '2' + content.textContent);

        log( '2' + content.innerHTML);

        let result = content.textContent.includes("Is a cool Website");
        log( '2 '+ result);
        expect( result ).toEqual(true);

    });


});