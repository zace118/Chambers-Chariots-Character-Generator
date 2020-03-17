// // Something along these lines to get the disabled dropdown to enable
// $("select[name='mainRace']").change(function () {
//     $("select[name='subRace']").removeAttr("disabled");
// });

// On select of a certain race, different option will appear in the subrace dropdown. #charSubRace


// -----------------------
// Dwarf
// ---Hill Dwarf
// ---Mountain Dwarf
// -----------------------
// Elf
// ---High Elf
// ---Wood Elf
// ---Dark Elf (Drow)
// -----------------------
// Halfling
// ---Lightfoot Halfling
// ---Stout Halfling
// -----------------------
// Gnome
// ---Forest Gnome
// ---Rock Gnome
// -----------------------


// function addOption() {
//     optionText = 4;
// }

$("#charRace").change(function () {
    let charRace = ($("#charRace").val());
    console.log(charRace);

    switch (charRace) {
        case "dwarf":
            // $("#charSubRace").append($('<option>').val('hillDwarf').text('Hill Dwarf'));
            // $("#charSubRace").append($('<option>').val('mountainDwarf').text('Mountain Dwarf'));

            $("#charSubRace").append('<option value="hillDwarf" selected="selected">Hill Dwarf</option>');


            break;
        case "elf":
            console.log("summol' boosheeit");
            break;
        case "halfling":
            console.log("summol' boosheeit");
            break;
        case "gnome":
            console.log("summol' boosheeit");
            break;
    }
})

