'use strict';
module.exports = function (sequelize, DataTypes) {
    var Skill = sequelize.define('Skill', {
        name: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
                Skill.hasMany(models.User);
            }
        }
    });
    return Skill;
};
