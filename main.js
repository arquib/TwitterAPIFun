//Get the APIKey and any settings
let settings = {}

getSettings = function(path){
    $.getJSON(path).done(function(data){
        settings = data;
    });
}

$(function(){
    //get Settings from file
    getSettings("settings.json");


})