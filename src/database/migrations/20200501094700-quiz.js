export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('quizzes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING(30),
    },
    description: {
      allowNull: true,
      type: Sequelize.STRING(250),
    },
    questions: {
      allowNull: false,
      type: Sequelize.ARRAY(Sequelize.JSONB),
      question: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      isMandatory: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        default: false
      },
      answers: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
        allowNull: false,
        answer: {
          allowNull: false,
          type: Sequelize.STRING(250)
        },
        isRightChoice: {
          allowNull: false,
          type: Sequelize.BOOLEAN
        },
      }
    },
    isActive: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      default: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    }
  });
}

export const down = async (queryInterface) => {
  await queryInterface.dropTable('quizzes');
}
