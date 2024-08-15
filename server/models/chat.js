module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    "chat",
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
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "chat", // 테이블 이름을 소문자로 설정
      timestamps: false,
      underscored: true,
    }
  );

  Chat.associate = (models) => {
    Chat.belongsTo(models.Room, { foreignKey: "room_id" });
    Chat.belongsTo(models.User, { foreignKey: "user_id" });
  };

  return Chat;
};
