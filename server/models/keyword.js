module.exports = (sequelize, DataTypes) => {
  const Keyword = sequelize.define(
    "keyword",
    {
      // 테이블 이름을 소문자로 설정
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "room",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      keyword: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      tableName: "keyword", // 테이블 이름을 소문자로 설정
      timestamps: false,
      underscored: true,
    }
  );

  Keyword.associate = (models) => {
    Keyword.belongsTo(models.Room, { foreignKey: "room_id" });
  };

  return Keyword;
};
