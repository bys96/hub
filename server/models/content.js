module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define(
    "content",
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
      kanban_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "kanban",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "content", // 테이블 이름을 소문자로 설정
      timestamps: false,
      paranoid: true,
      underscored: true,
    }
  );

  Content.associate = (models) => {
    Content.belongsTo(models.Room, { foreignKey: "room_id" });
    Content.belongsTo(models.Kanban, { foreignKey: "kanban_id" });
    Content.belongsTo(models.User, { foreignKey: "user_id" });
  };

  return Content;
};
