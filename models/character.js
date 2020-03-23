module.exports = function (sequelize, DataTypes) {
    const SubmitCharacter = sequelize.define("SubmitCharacter", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        race: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subrace: {
            type: DataTypes.STRING,
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