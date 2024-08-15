module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      // 테이블 이름을 소문자로 설정
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      social_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      social_type: {
        type: DataTypes.ENUM("kakao", "naver"),
        allowNull: false,
      },
      job: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      profile_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM("user", "admin"),
        allowNull: false,
        defaultValue: "user",
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
      last_login_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "user", // 테이블 이름을 소문자로 설정
      timestamps: false,
      paranoid: true,
      underscored: true,
    }
  );

  return User;
};
