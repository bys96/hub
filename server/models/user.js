module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      social_id: {
        type: DataTypes.STRING(255),
        allowNull: true, // 소셜 로그인에 따라 null 값 허용
      },
      social_type: {
        type: DataTypes.ENUM("Kakao", "Google", "Naver"),
        allowNull: true, // 소셜 로그인에 따라 null 값 허용
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          isEmail: true, // 이메일 형식 검사
        },
      },
      nickname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      job: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      profile_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM("User", "Admin"),
        defaultValue: "User",
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      last_login_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "Users",
      timestamps: false, // created_at, updated_at을 수동으로 관리하므로 Sequelize의 자동 타임스탬프 기능 비활성화
    }
  );

  return User;
};
