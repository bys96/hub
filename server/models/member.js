module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    "member",
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
      role: {
        type: DataTypes.ENUM("host", "guest"),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "member", // 테이블 이름을 소문자로 설정
      timestamps: false,
      paranoid: true,
      underscored: true,
    }
  );

  Member.associate = (models) => {
    Member.belongsTo(models.Room, { foreignKey: "room_id" });
    Member.belongsTo(models.User, { foreignKey: "user_id" });
  };

  return Member;
};
