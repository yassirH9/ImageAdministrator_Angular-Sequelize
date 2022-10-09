module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("image", {
    filename: {
      type: Sequelize.STRING
    },
    story: {
      type: Sequelize.STRING
    },
    group: {
      type: Sequelize.STRING
    }
  });

  return Image;
}