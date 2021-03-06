module.exports = function (sequelize, DataTypes) {
    //Defines table and columns
    let Questions = sequelize.define('jeopardize_q', {
        // episodeNum: {
        //     type: DataTypes.STRING,
        // },
        // airDate: {
        //     type: DataTypes.DATE,
        // },
        // roundType: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
        {
            freezeTableName: true
        });

    return Questions;
}