$(document).ready(function(){
    var characterTemplate = $("#character-template").html(); // var contains our character template (html)
    
    var compiledCharacterTemplate = Handlebars.compile(characterTemplate); //func that accepts data object

    $.ajax("./data/cast.json").done(function(data){
        console.log(data);
    });
    
    // put the content of the variable above w/ argument cast.characters[2] in .character-list-container
    //$(".character-list-container").html(compiledCharacterTemplate(cast)); // example of the above
});