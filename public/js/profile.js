$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.name);
    });


    // --------------------------------------------------


    $.get("/api/post_character", function (characters) {
        console.log(characters);

        // This if statement will only post the most recent 10 characters created
        if (characters.length < 10) {
            for (let i = characters.length - 1; i >= 0; i--) {
                // console.log("Line 14 IF profile.js: " + characters.length);
                let name = characters[i].name;
                let race = `${characters[i].race}/ ${characters[i].subrace}`;
                let charClass = characters[i].class;
                let alignment = characters[i].alignment;
                let str = characters[i].strScore;
                let dex = characters[i].dexScore;
                let con = characters[i].conScore;
                let int = characters[i].intScore;
                let wis = characters[i].wisScore;
                let cha = characters[i].chaScore;

                // Generates the div tag to begin creating the cards
                const parentDiv = $("<div>");
                // Adds class and ID to parentDiv
                parentDiv.addClass("card").attr("id", "character" + i);

                // Generates the h1 tag for the name of the characters. Then we add an id to it.
                const nameSlot = $("<h1><b>Name: </b></h1>");
                nameSlot.attr("id", "name" + i);

                // Generates the h3 tags for the race, class and alignment for the characters, then append an ID to each.
                const raceSlot = $("<h3>Race/SubRace: </h3>");
                raceSlot.attr("id", "race" + i);

                const classSlot = $("<h3>Class: </h3>");
                classSlot.attr("id", "charClass" + i);

                const alignmentSlot = $("<h3>Alignment: </h3>");
                alignmentSlot.attr("id", "alignment" + i);

                // Generates the h5 tags for the ability rolls and appends an ID to each.
                const strSlot = $("<h5>Strength: </h5>");
                strSlot.attr("id", "str" + i);
                const dexSlot = $("<h5>Dexterity: </h5>");
                dexSlot.attr("id", "dex" + i);
                const conSlot = $("<h5>Constitution: </h5>");
                conSlot.attr("id", "con" + i);
                const intSlot = $("<h5>Intelligence: </h5>");
                intSlot.attr("id", "int" + i);
                const wisSlot = $("<h5>Wisdom: </h5>");
                wisSlot.attr("id", "wis" + i);
                const chaSlot = $("<h5>Charisma: </h5>");
                chaSlot.attr("id", "cha" + i);

                // Creating the card dynamically
                $(parentDiv).append(nameSlot).append(raceSlot).append(classSlot).append(alignmentSlot).append(strSlot).append(dexSlot).append(conSlot).append(intSlot).append(wisSlot).append(chaSlot);

                // Appending the cards to the .characterCards in the HTML
                $(".characterCards").append(parentDiv);

                // Pasting all the indo onto the cards, dynamically
                $("#name" + i).append(name);
                $("#race" + i).append(race);
                $("#charClass" + i).append(charClass);
                $("#alignment" + i).append(alignment);
                $("#str" + i).append(str);
                $("#dex" + i).append(dex);
                $("#con" + i).append(con);
                $("#int" + i).append(int);
                $("#wis" + i).append(wis);
                $("#cha" + i).append(cha);

            }
        }
        else {
            for (let i = characters.length - 1; i > characters.length - 11; i--) {
                console.log("ELSE profile.js:  " + characters.length);
            }
        }
    })

})