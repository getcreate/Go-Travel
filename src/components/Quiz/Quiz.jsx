import React, { useState } from "react";
import "./Quiz.scss";

import Arrow from "./arrow.svg";
import Check from "./check.svg";
import Gift from "./thanky.png";

import {
  Button,
  Icon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "../../components";

export const Quiz = () => {
  const DATA = [
    {
      questionText: "Какие места вы хотите посетить?",
      answerOptions: [
        {
          answerName: "question_01",
          answerImage: "./img/answer_01.jpg",
          answerText: "Европа",
          type: "checkbox"
        },
        {
          answerName: "question_01",
          answerImage: "./img/answer_02.jpg",
          answerText: "Азия",
          type: "checkbox"
        },
        {
          answerName: "question_01",
          answerImage: "./img/answer_03.jpg",
          answerText: "Америка",
          type: "checkbox"
        },
        {
          answerName: "question_01",
          answerImage: "./img/answer_04.jpg",
          answerText: "Африка",
          type: "checkbox"
        },
        {
          answerName: "question_01",
          answerImage: "./img/answer_05.jpg",
          answerText: "Австралия",
          type: "checkbox"
        },
        {
          answerName: "question_01",
          answerImage: "./img/answer_06.jpg",
          answerText: "Ещё не выбрал(а)",
          type: "checkbox"
        }
      ],
      type: "checkbox"
    },
    {
      questionText: "Сколько человек отправляется в путешествие?",
      answerOptions: [
        {
          answerName: "question_02",
          answerImage: "./img/answer_07.jpg",
          answerText: "1 человек",
          type: "radio"
        },
        {
          answerName: "question_02",
          answerImage: "./img/answer_08.jpg",
          answerText: "2 человека",
          type: "radio"
        },
        {
          answerName: "question_02",
          answerImage: "./img/answer_09.jpg",
          answerText: "3-5 человек",
          type: "radio"
        },
        {
          answerName: "question_02",
          answerImage: "./img/answer_10.jpg",
          answerText: "Более 5 человек",
          type: "radio"
        }
      ],
      type: "radio"
    },
    {
      questionText: "Какие отели вам подходят больше всего?",
      answerOptions: [
        {
          answerName: "question_03",
          answerImage: "./img/answer_11.jpg",
          answerText: "Отели премиум-класса",
          type: "checkbox"
        },
        {
          answerName: "question_03",
          answerImage: "./img/answer_12.jpg",
          answerText: "Отели среднего класса",
          type: "checkbox"
        },
        {
          answerName: "question_03",
          answerImage: "./img/answer_13.jpg",
          answerText: "Бюджетные  отдели",
          type: "checkbox"
        },
        {
          answerName: "question_03",
          answerImage: "./img/answer_14.jpg",
          answerText: "Бизнес-отели",
          type: "checkbox"
        }
      ],
      type: "checkbox"
    },
    {
      questionText: "Какой досуг для вас предпочтительнее во время отдыха? ",
      answerOptions: [
        {
          answerName: "question_04",
          answerImage: "./img/answer_15.jpg",
          answerText: "Пляжный отдых",
          type: "checkbox"
        },
        {
          answerName: "question_04",
          answerImage: "./img/answer_16.jpg",
          answerText: "Экскурсии с гидом",
          type: "checkbox"
        },
        {
          answerName: "question_04",
          answerImage: "./img/answer_17.jpg",
          answerText: "Активный отдых",
          type: "checkbox"
        },
        {
          answerName: "question_04",
          answerImage: "./img/answer_18.jpg",
          answerText: "Лечебный отдых",
          type: "checkbox"
        },
        {
          answerName: "question_04",
          answerImage: "./img/answer_19.jpg",
          answerText: "Отдых с детьми",
          type: "checkbox"
        },
        {
          answerName: "question_04",
          answerImage: "./img/answer_20.jpg",
          answerText: "Самостоятельный досуг",
          type: "checkbox"
        }
      ],
      type: "checkbox"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [upadtePercent, setUpdatePercent] = useState(0);
  const [buttonNextDisabled, setButtonNextDisabled] = useState(true);
  const [isFormDone, setIsFormDone] = useState(false);


  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    setUpdatePercent(0);
    setButtonNextDisabled(true);

    if (nextQuestion < DATA.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowForm(true);
		}
  };
  const handlePrevQuestion = () => {
    const prevQuestion = currentQuestion - 1;
    setCurrentQuestion(prevQuestion);
    setUpdatePercent(0);
    setButtonNextDisabled(true);
  };

  const handleChangeUpdatePercent = () => {
    setUpdatePercent(1);
    setButtonNextDisabled(false);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsFormDone(true);
  }

  const handleClickRestart = () => {
    setShowForm(false);
    setCurrentQuestion(0);
    setIsFormDone(false);
  }

  const percentMath = Math.round(
    (100 / (DATA.length + 1)) * (currentQuestion + upadtePercent)
  );

  return (
    <Modal>
      <ModalHeader>
        <div className="quiz-header">
          <ul className="quiz-header__helpers quiz-helpers">
            <li className="quiz-helpers__item">
              Вопрос {currentQuestion + 1} из {DATA.length + 1}
            </li>
            {!showForm ?
              <>
              {DATA[currentQuestion].type === "checkbox" ? (
                <li className="quiz-helpers__item">
                  Выберите один или несколько ответов
                </li>
              ) : null}
              </>
            : null}
          </ul>
          <p className="quiz-header__question">
          {!showForm ?
            <>
            {DATA[currentQuestion].questionText}
            </> : "Остался последний вопрос. Как с вами связаться?"}
          </p>
        </div>
      </ModalHeader>
      <ModalBody>
        {showForm ?
          <div className="quiz-answers">
            <form className="form form--quiz">
              <div className="form__row">
                <div className="form__col">
                  <input className="input-field" type="text"
                placeholder="Ваше имя"
                />
                </div>
                <div className="form__col">
                  <input className="input-field"
                placeholder="Ваш телефон"
                type="tel"/>
                </div>
                <div className="form__col form__col--control">
                  <Button
                    onClick={handleSubmitForm}
                    type="submit"
                    classes="btn--primary form__btn"
                    text="Отправить"
                    afterIcon={<Icon idIcon="arrow" pathIcon={ Arrow } ariaLabel="Отправить"
                    />}
                  />
                  <small className="form__helper">Отправляя заявку, вы соглашаетесь на обработку <a href="/">персональных данных</a></small>
                </div>
              </div>
            </form>
          </div>
          :
          <div className={DATA[currentQuestion].answerOptions.length > 4 ? "quiz-answers quiz-answers--grid" : "quiz-answers"}>
              {DATA[currentQuestion].answerOptions.map((item) => (
                <label className="quiz-answers__item" key={item.answerText} onChange={handleChangeUpdatePercent}>
                  <img className="quiz-answers__image" src={item.answerImage} alt={item.answerText}/>
                  <div className="quiz-answers__footer custom-check">
                    <input className="custom-check__origin" type={item.type} name={item.answerName} />
                    <span className="custom-check__new">
                      {item.type === 'checkbox' ? <Icon idIcon="check" pathIcon={Check} /> : null}
                    </span>
                    {item.answerText}
                  </div>
                </label>
              ))}
          </div>}
          {isFormDone ?
              <>
                <div className="modal-thanky">
                  <div className="modal-thanky__content">
                    <img src={Gift} alt=""/>
                    <div className="modal-thanky__text">
                      <p className="modal-thanky__title">​Спасибо! Результаты
теста приняты</p>
                      <p className="modal-thanky__subtitle">​Ваш подарок — список 5 туров, подходящих лично для вас</p>
                    </div>
                    <Button
                      onClick={handleClickRestart}
                      classes="btn--primary"
                      text="Закрыть"
                    />
                  </div>
                </div>
              </>
              : null}
      </ModalBody>
      <ModalFooter>
        <div className="quiz-nav">
          <div className="quiz-nav__progress quiz-progress">
            <div className="quiz-progress__info">
              <div className="quiz-progress__text">
                Тест пройден на:
                <span className="quiz-progress__percent">{percentMath}%</span>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress__bar"
                style={{ width: percentMath + "%" }}
              ></div>
            </div>
          </div>
          <div className="quiz-nav__controls">
            {currentQuestion !== 0 ? <Button
              onClick={handlePrevQuestion}
              classes="quiz-nav__control quiz-nav__control--prev"
              text="Назад"
              beforeIcon={<Icon idIcon="arrow" pathIcon={ Arrow } ariaLabel="Назад"/>}
              textHidden="true"
            /> : null}
            {!showForm ?
            <Button
              onClick={handleNextQuestion}
              classes="btn--primary quiz-nav__control quiz-nav__control--next"
              text="Далее"
              afterIcon={<Icon idIcon="arrow" pathIcon={ Arrow } ariaLabel="Далее"
              />}
              disabled={buttonNextDisabled}
            />
          : null}
          </div>
        </div>
      </ModalFooter>
    </Modal>
  );
};
