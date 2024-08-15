module.exports = (sequelize, DataTypes) => {
  const Kanban = sequelize.define(
    "kanban",
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
      section: {
        type: DataTypes.STRING(50),
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
      tableName: "kanban", // 테이블 이름을 소문자로 설정
      timestamps: false,
      paranoid: true,
      underscored: true,
    }
  );

  Kanban.associate = (models) => {
    Kanban.belongsTo(models.Room, { foreignKey: "room_id" });
    Kanban.belongsTo(models.User, { foreignKey: "user_id" });
    Kanban.hasMany(models.Content, { foreignKey: "kanban_id" });
  };

  return Kanban;
};
