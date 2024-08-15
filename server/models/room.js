module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    "room",
    {
      // 테이블 이름을 소문자로 설정
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM("chat", "kanban"),
        allowNull: false,
      },
      max_member: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 4,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
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
      status: {
        type: DataTypes.ENUM("active", "completed", "closed", "open"),
        allowNull: false,
        defaultValue: "open",
      },
    },
    {
      tableName: "room", // 테이블 이름을 소문자로 설정
      timestamps: false,
      paranoid: true,
      underscored: true,
    }
  );

  Room.associate = (models) => {
    Room.hasMany(models.Keyword, { foreignKey: "room_id" });
    Room.hasMany(models.Member, { foreignKey: "room_id" });
    Room.hasMany(models.Chat, { foreignKey: "room_id" });
    Room.hasMany(models.Kanban, { foreignKey: "room_id" });
  };

  return Room;
};
