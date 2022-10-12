const jsdom = require("jsdom");
const fs = require('fs');
const Tools = require('../src/tools.js');

let tools = new Tools(fs, 'log/log.txt');
tools.clearsContains();

let  suitName = "Initial Spec";

describe( suitName, function() {

    let caseName1 = "Checking file exists";
    it( caseName1 , function() {

        let result = fs.existsSync('views/index.html');
        tools.log(suitName,caseName1,result);

        expect( result).toEqual(true);
    });

    let caseName2 = "Appending to the template body";
    it(caseName2, function() {

        // Creating a window with a document
        const dom = new jsdom.JSDOM(tools.page);

        // Importing the jquery and providing it with the window
        const jquery = require("jquery")(dom.window);

        let tagText = 'Is a cool Website';

        // Appending a paragraph tag to the body
        jquery("body").append("<p>"+tagText+"</p>");

        // Getting the content of the body
        const content = dom.window.document.querySelector("body");

        // Printing the content of the heading and paragraph
        tools.log( suitName,caseName2, content.textContent);
        tools.log( suitName,caseName2, content.innerHTML);

        let result = content.textContent.includes(tagText);
        tools.log( suitName,caseName2, result);
        expect( result ).toEqual(true);

    });




});