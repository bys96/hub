module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      project_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      host_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users", // 참조하는 모델 이름
          key: "user_id", // Users 테이블의 user_id 컬럼을 참조
        },
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM("Chat", "Kanban"),
        allowNull: false,
      },
      max_participants: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 4,
        validate: {
          min: 2,
          max: 10,
        },
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          max: 60,
        },
      },
      keywords: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      status: {
        type: DataTypes.ENUM("Active", "Completed", "Closed", "Open"),
        allowNull: false,
      },
    },
    {
      tableName: "Projects",
      timestamps: false, // created_at, updated_at을 수동으로 관리하므로 Sequelize의 자동 타임스탬프 기능 비활성화
    }
  );

  // Users 모델과의 관계 설정 (참조하는 부분은 models/index.js에서 설정할 수도 있음)
  Project.associate = function (models) {
    Project.belongsTo(models.User, {
      foreignKey: "host_id",
      targetKey: "user_id",
    });
  };

  return Project;
};
