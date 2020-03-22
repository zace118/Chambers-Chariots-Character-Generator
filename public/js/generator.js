$(document).ready(function () {

    // This .change function is what gives the sub-race drop down the ability to contain the appropriate choices per the character's race, the question before. 
    $("#charRace").change(function () {
        let charRace = $("#charRace").val().trim();
        console.log(charRace);
        // console.log(charRace === "dwarf");

        switch (charRace) {
            case "dwarf":
                // Clear the dropdown prior to appending sub race choices
                $("#charSubRace").empty();
                // Appending the sub race choices
                $("#charSubRace").append('<option value="hillDwarf" selected="selected">Hill Dwarf</option>');
                $("#charSubRace").append('<option value="mountainDwarf" selected="selected">Mountain Dwarf</option>');
                $("#charSubRace").append('<option value="" selected="selected"></option>');
                break;
            case "elf":
                // Clear the dropdown prior to appending sub race choices
                $("#charSubRace").empty();

                // Appending the sub race choices
                $("#charSubRace").append('<option value="highElf" selected="selected">High Elf</option>');
                $("#charSubRace").append('<option value="woodElf" selected="selected">Wood Elf</option>');
                $("#charSubRace").append('<option value="darkElf" selected="selected">Dark Elf (Drow)</option>');
                $("#charSubRace").append('<option value="" selected="selected"></option>');
                break;
            case "halfling":
                // Clear the dropdown prior to appending sub race choices
                $("#charSubRace").empty();

                // Appending the sub race choices
                $("#charSubRace").append('<option value="lightfootHalfling" selected="selected">Lightfoot Halfling</option>');
                $("#charSubRace").append('<option value="stoutHalfling" selected="selected">Stout Halfling</option>');
                $("#charSubRace").append('<option value="" selected="selected"></option>');
                break;
            case "gnome":
                // Clear the dropdown prior to appending sub race choices
                $("#charSubRace").empty();

                // Appending the sub race choices
                $("#charSubRace").append('<option value="forestGnome" selected="selected">Forest Gnome</option>');
                $("#charSubRace").append('<option value="rockGnome" selected="selected">Rock Gnome</option>');
                $("#charSubRace").append('<option value="" selected="selected"></option>');
                break;
        }
    });


    // This function is how the ability score roll is attained, but also function as a dice roller in general.
    // The num parameter refers to the amount of dice and the size parameter dictates the size of the dice. (ex.4d6, 1d100, 2d10)
    function dieRoll(num, size) {
        let rollResults = [];

        for (let i = 0; i < num; i++) {
            // Push into array
            rollResults.push(Math.floor(Math.random() * size) + 1);
        }

        console.log(rollResults);

        // Get the largest three results
        // CODE GOES HERE

        // Add them together
        // CODE GOES HERE

        // Return that new value
        // CODE GOES HERE

    }


    $("#str").click(function () {
        console.log("The click works");
        dieRoll(4, 6);

        // This is how the button will disappear after the user clicks on it.
        $("#str").hide();
    });


});