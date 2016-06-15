'use strict';
// entry point...
(function () {
    var link;
    var content;
    var composers = [];

    importComposers();

    var composerSetCount = content.getElementsByClassName("ComposerSet").length;
   
    for (var index = 0; index < composerSetCount; index++) {
        var composerSet = content.getElementsByClassName("ComposerSet")[index].innerHTML;
        var composersAsElements = htmlToElements(composerSet);

        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
        for (let composerAsElements of composersAsElements) {
            convertComposerTextToObject(composerAsElements, composers);
        };
    }

    composers.sort(function(a,b) {return (a.lastName > b.lastName) ? 1 : 
        ((b.lastName > a.lastName) ? -1 : 0);});

    for (let comp of composers) {
        var dates = [];
        dates = validateComposerDates(comp);
        
        document.writeln("<h1>" + comp.lastName + "</h1>");
        document.writeln("<h4>" + comp.firstNames + " " + comp.lastName + " " + 
            dates["Birth"] + " " + dates["Death"] + "</h4>");
    }

// functions...
    function htmlToElements(html) {
        var template = document.createElement('template');
        template.innerHTML = html;
        return template.content.childNodes;
    }

    function convertComposerTextToObject(composer, composersx) {
        var composerText = composer.innerText;
        if (composerText === undefined) {
            return;
        }
        // Treat the characters , and [ and - and ] as delimiters for splitting the string into tokens.
        // An example of a string to be split:
        // SMITH, John [4/21/1712-7/9/1768]
        var separators = [',', '\\[', '\\-', '\\]']
        console.log(composerText);
        var composerParts = composerText.split(new RegExp('[' + separators.join('') + ']', 'g'));

        var theComposer = {};
        theComposer.lastName = composerParts[0];
        theComposer.firstNames = composerParts[1];
        var dob = new Date(composerParts[2]);
        if (dob.isValid()) {
            theComposer.dateOfBirth = dob;
        }

        var dod = new Date(composerParts[3]);
        if (dod.isValid()) {
            theComposer.dateOfDeath = dod;
        }

        composersx.push(theComposer);
        console.log(theComposer);

    } // convertComposerTextToObject

    function importComposers() {
        link = document.querySelector('link[rel="import"]');
        content = link.import;
    }

    function validateComposerDates(currentComposer) {
        var composerDates = [];
        composerDates['Birth'] = currentComposer.dateOfBirth === undefined ? "[unknown]" : currentComposer.dateOfBirth.toLocaleDateString('en-GB');
        composerDates['Death'] = currentComposer.dateOfDeath === undefined ? "[unknown]" : currentComposer.dateOfDeath.toLocaleDateString('en-GB');
        //console.log(composerDates);
        return composerDates;
        
    }
        

})();

