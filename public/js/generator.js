$(document).ready(function () {

    // -----------------------------------------------------------

    // This .change function is what gives the sub-race drop down the ability to contain the appropriate choices per the character's race, the question before. 
    // -----------------------------------------------------------

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

            case "human":
            case "dragonborn":
            case "halfElf":
            case "halfOrc":
            case "tiefling":
                $("#charSubRace").empty();

                break;
        }
    });
    // -----------------------------------------------------------



    // -----------------------------------------------------------

    // This function is how the ability score roll is attained, but also function as a dice roller in general.
    // The num parameter refers to the amount of dice and the size parameter dictates the size of the dice. (ex.4d6, 1d100, 2d10)
    function dieRoll(num, size) {
        let rollResults = [];

        for (let i = 0; i < num; i++) {
            // Push into array
            rollResults.push(Math.floor(Math.random() * size) + 1);
        }

        console.log(rollResults);

    };
    // -----------------------------------------------------------




    // -----------------------------------------------------------

    // The num parameter refers to the amount of dice and the size parameter dictates the size of the dice. (ex.4d6, 1d100, 2d10)
    // -----------------------------------------------------------

    function abilityScoreRoll(num, size, ability) {
        let rollResults = [];

        for (let i = 0; i < num; i++) {
            // Push into array
            rollResults.push(Math.floor(Math.random() * size) + 1);
        };

        // Get the largest three results
        const ordered = rollResults.sort(function (a, b) {
            if (a > b) {
                return 1;
            } else {
                return -1;
            }
        });

        // Add them together
        const abilityScore = rollResults[1] + rollResults[2] + rollResults[3];

        // Append that new value to the appropriate input field
        $(`#${ability}Input`).text(abilityScore);

    };
    // -----------------------------------------------------------




    // -----------------------------------------------------------

    // These are the .click functions that will run the abilityScoreRoll functions per whatever ability score the user wants to roll
    // -----------------------------------------------------------

    $("#str").click(function () {
        // console.log("The str click works");
        abilityScoreRoll(4, 6, 'str');
        // This is how the button will disappear after the user clicks on it.
        $("#str").hide();
    });

    $("#dex").click(function () {
        // console.log("The dex click works");
        abilityScoreRoll(4, 6, 'dex');
        // This is how the button will disappear after the user clicks on it.
        $("#dex").hide();
    });

    $("#con").click(function () {
        // console.log("The con click works");
        abilityScoreRoll(4, 6, 'con');
        // This is how the button will disappear after the user clicks on it.
        $("#con").hide();
    });

    $("#int").click(function () {
        // console.log("The int click works");
        abilityScoreRoll(4, 6, 'int');
        // This is how the button will disappear after the user clicks on it.
        $("#int").hide();
    });

    $("#wis").click(function () {
        // console.log("The wis click works");
        abilityScoreRoll(4, 6, 'wis');
        // This is how the button will disappear after the user clicks on it.
        $("#wis").hide();
    });

    $("#cha").click(function () {
        // console.log("The cha click works");
        abilityScoreRoll(4, 6, 'cha');
        // This is how the button will disappear after the user clicks on it.
        $("#cha").hide();
    });

    // -----------------------------------------------------------


    const submitCharacterForm = $("form#characterCreator");

    submitCharacterForm.on("submit", function (event) {

        event.preventDefault();
        // console.log("Submit button works");

        const charName = $("#charName").val().trim();
        const charRace = $("#charRace").val().trim();
        const charSubRace = $("#charSubRace").val();
        const charClass = $("#charClass").val().trim();
        const charAlignment = $("#charAlignment").val().trim();
        // ------------------------------------------------------
        const str = $("#strInput").text();
        const dex = $("#dexInput").text();
        const con = $("#conInput").text();
        const int = $("#intInput").text();
        const wis = $("#wisInput").text();
        const cha = $("#chaInput").text();


        // console.log(`Name: ${charName}\nRace: ${charRace}\nSubRace: ${charSubRace}\nClass: ${charClass}\nAlignment: ${charAlignment}`);
        // console.log(str, dex, con, int, wis, cha);

        const characterData = {
            name: charName,
            race: charRace,
            subrace: charSubRace,
            class: charClass,
            alignment: charAlignment,
            strScore: str,
            dexScore: dex,
            conScore: con,
            intScore: int,
            wisScore: wis,
            chaScore: cha
        };

        // console.log(characterData)

        if (!characterData.name || !characterData.race || !characterData.class || !characterData.alignment || !characterData.strScore || !characterData.dexScore || !characterData.conScore || !characterData.intScore || !characterData.wisScore || !characterData.chaScore) {
            // console.log("This Works!!!")
            return;
        };
        // If we have all the appropriate data, run the submitCharacter function
        postCharacter(characterData.name, characterData.race, characterData.subrace, characterData.class, characterData.alignment, characterData.strScore, characterData.dexScore, characterData.conScore, characterData.intScore, characterData.wisScore, characterData.chaScore)
        console.log("This Works!!!")


    });


    function postCharacter(name, race, subrace, charClass, alignment, str, dex, con, int, wis, cha) {
        $.post("api/post_character", {
            name: name,
            race: race,
            subrace: subrace,
            class: charClass,
            alignment: alignment,
            strScore: str,
            dexScore: dex,
            conScore: con,
            intScore: int,
            wisScore: wis,
            chaScore: cha
        }).then(function (data) {
            console.log(`Line 223.gen.js DATA: ${data}`);
            // Need to change route to where ever we want users redirected after charcter has been posted
            window.location.pathname = "/profile"

        })
    }

});