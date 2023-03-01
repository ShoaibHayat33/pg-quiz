import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
  class Quiz extends Model {
    // static associate(models) {
    //   Quiz.hasMany(models.question, { foreignKey: 'quizId' });
    // }
  }

  Quiz.init({
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    questions: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false,
      question: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      isMandatory: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      answers: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: false,
        answer: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        isRightChoice: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        },
      }
    },
    isActive: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      default: true
    },
  }, {
    modelName: 'quiz',
    sequelize,
  });

  return Quiz;
}
