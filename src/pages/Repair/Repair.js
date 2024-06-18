import "./repair.css";
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const addPrefix = (event) => {
  const input = event.target;
  if (!input.value.startsWith("+38 ")) {
    input.value = "+38 " + input.value;
  }
};

const validateForm = (event) => {
  event.preventDefault();

  const nameValue = document.getElementById("name").value;
  const phoneValue = document.getElementById("phone").value;
  const problemValue = document.getElementById("problem").value;

  const nameRegex = /^[а-яА-ЯІіЇїЄєҐґ']+$/;

  const nameWarning = document.getElementById("name-warning");
  const phoneWarning = document.getElementById("phone-warning");
  const problemWarning = document.getElementById("problem-warning");

  if (nameValue === "") {
    nameWarning.innerText = "Будь ласка, введіть своє ім'я!";
  } else if (!nameRegex.test(nameValue)) {
    nameWarning.innerText = "Будь ласка, введіть лише кирилицю!";
  } else {
    nameWarning.innerText = "";
  }

  if (!phoneValue.startsWith("+38 ") || !/^\+38 \d{10}$/.test(phoneValue)) {
    phoneWarning.innerText = "Будь ласка, введіть правильний номер телефону!";
  } else {
    phoneWarning.innerText = "";
  }

  if (problemValue === "") {
    problemWarning.innerText = "Будь ласка, заповніть це поле!";
  } else {
    problemWarning.innerText = "";
  }

  const warnings = [nameWarning, phoneWarning, problemWarning];
  const hasWarnings = warnings.some((warning) => warning.innerText !== "");

  if (
    !hasWarnings &&
    nameRegex.test(nameValue) &&
    phoneValue.startsWith("+38 ") &&
    /^\+38 \d{10}$/.test(phoneValue) &&
    problemValue !== ""
  ) {
    // Зберігаємо дані у localStorage
    localStorage.setItem(
      "repairData",
      JSON.stringify({
        name: nameValue,
        phone: phoneValue,
        problem: problemValue,
      })
    );
    // Перенаправлення на Result.js
    window.location.href = "/result";
  }
};

const handleRepairClick = (repairType) => {
  localStorage.setItem("repairType", repairType);
};

const Repair = () => {
  return (
    <header className="header3">
      <div className="header3__wrapper">
        <h1 className="header3__title">Ремонт комп'ютерів</h1>
        <div className="line"></div>
        <div className="about1">
          <p>
            Ремонт комп'ютерів (ПК) – це технічно складний процес, який слід
            довірити профільним фахівцям. Спроби самостійно провести діагностику
            та усунути несправність у переважній більшості випадків не тільки не
            приносять бажаних результатів, а й можуть обернутися різними
            проблемами, починаючи від поломки інших модулів комп'ютера і
            закінчуючи доведенням техніки до повної непридатності до ремонту.
            Наші фахівці можуть швидко і якісно здійснити ремонт ПК як у
            сервісному центрі так і у вас вдома.
          </p>
        </div>

        <div className="header3__titles">
          <h2 className="header3__subtitle">Професійний ремонт ПК</h2>
        </div>

        <div className="form-container">
          <div className="form-group">
            <label htmlFor="name">Ім'я*</label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-field"
              required
            />
            <div id="name-warning" style={{ color: "red" }}></div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Телефон*</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="input-field"
              placeholder="+38 "
              onFocus={addPrefix}
            />
            <div id="phone-warning" style={{ color: "red" }}></div>
          </div>
          <div className="form-group1">
            <label htmlFor="problem">Короткий опис проблеми*</label>
            <textarea
              id="problem"
              name="problem"
              className="input-field1"
              required
            ></textarea>
            <div id="problem-warning" style={{ color: "red" }}></div>
          </div>

          <a href="#" className="btn5" onClick={validateForm}>
            Викликати майстра
          </a>

          <div id="warning-message" style={{ color: "red" }}></div>
        </div>

        <div className="header3__titles">
          <h2 className="header3__subtitle">Найпоширеніші види ремонтів</h2>
        </div>
        <div className="repair-item">
          <div className="title1">Ремонт відеокарти</div>
          <Link
            to="/oformlennya"
            className="btn1"
            onClick={() => handleRepairClick("Ремонт відеокарти")}
          >
            Залишити заявку
          </Link>
          <div className="price">від 200 грн</div>
          <div className="line1"></div>
        </div>
        <div className="repair-item">
          <div className="title2">Ремонт блоку живлення</div>
          <Link
            to="/oformlennya"
            className="btn2"
            onClick={() => handleRepairClick("Ремонт блоку живлення")}
          >
            Залишити заявку
          </Link>
          <div className="price">від 500 грн</div>
          <div className="line1"></div>
        </div>
        <div className="repair-item">
          <div className="title3">Чистка та профілактика ПК</div>
          <Link
            to="/oformlennya"
            className="btn3"
            onClick={() => handleRepairClick("Чистка та профілактика ПК")}
          >
            Залишити заявку
          </Link>
          <div className="price">від 300 грн</div>
          <div className="line1"></div>
        </div>
        <div className="repair-item">
          <div className="title4">Модернізація комп'ютера</div>
          <Link
            to="/oformlennya"
            className="btn4"
            onClick={() => handleRepairClick("Модернізація комп'ютера")}
          >
            Залишити заявку
          </Link>
          <div className="price">від 400 грн</div>
          <div className="line1"></div>
        </div>

        <h2 className="header3__subtitle1">
          <strong>Переваги звернення до нас</strong>
        </h2>
        <div className="about1">
          <p>
            Наш сервісний центр з ремонту комп'ютерів надає повний спектр послуг
            з відновлення працездатності ПК і його профілактики. Перш, ніж
            приступити до роботи, наші майстри проводять професійну
            експрес-діагностику, під час якої виявляються всі несправності.
            <br />
            <br />
            Після цього ми запропонуємо вам оптимальний варіант вирішення
            проблеми. Це може бути ремонт окремих комплектуючих або повна заміна
            модуля, що вийшов з ладу, на аналогічний або більш продуктивний за
            умови сумісності з іншим "залізом".
            <br />
            <br />
            Завдяки великому практичному досвіду і високій кваліфікації, наші
            інженери можуть усунути несправність будь-якого типу, починаючи від
            заміни кулера і закінчуючи ремонтом материнських плат.
            <br />
            <br />
            Звертатися до фахівців нашої комп'ютерної майстерні зручно і
            вигідно, тому що:
            <br />
            <br />
            1. Ми здійснюємо ремонт ПК будь-яких виробників.
            <br />
            2. Ми усуваємо більшість несправностей протягом 1-2 годин.
            <br />
            3. Наші майстри проводять усі необхідні ремонтні роботи вдома у
            замовника, в офісі або в умовах сервісного центру.
            <br />
            4. Ми надаємо гарантію на всі замінені або відремонтовані
            комплектуючі. <br />
            5. На нові запчастини поширюється офіційна гарантія від виробника.
            <br />
            6. Наші фахівці можуть виїхати в будь-який район міста у зручний для
            вас час.
            <br />
            <br />
            Щоб замовити послуги з налаштування та ремонту ПК (комп'ютера) –
            залиште заявку на виїзд фахівця на сайті.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Repair;
