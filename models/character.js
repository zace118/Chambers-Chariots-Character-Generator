module.exports = function (sequelize, Datatypes) {
    const SubmitCharacter = sequelize.define("SubmitCharacter", {
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        race: {
            type: Datatypes.STRING,
            allowNull: false
        },
        subrace: {
            type: Datatypes.STRING,
            allowNull: true,
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alignment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        strScore: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dexScore: {
            type: DataTypes.STRING,
            allowNull: false
        },
        conScore: {
            type: DataTypes.STRING,
            allowNull: false
        },
        intScore: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wisScore: {
            type: DataTypes.STRING,
            allowNull: false
        },
        chaScore: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return SubmitCharacter;

}