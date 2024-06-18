import React, { useEffect, useState } from "react";
import "./orders.css";

const Orders = () => {
  // Встановлюємо стан для збереження даних форми користувача
  const [formData, setFormData] = useState({});

  // Встановлюємо стан для збереження даних про ремонт
  const [repairData, setRepairData] = useState({});

  // Встановлюємо стан для збереження типу ремонту
  const [repairType, setRepairType] = useState("");

  // Використовуємо useEffect для завантаження даних з локального сховища при завантаженні компонента
  useEffect(() => {
    const formData = localStorage.getItem("formData");
    if (formData) {
      setFormData(JSON.parse(formData));
    }

    const repairData = localStorage.getItem("repairData");
    if (repairData) {
      setRepairData(JSON.parse(repairData));
    }

    const savedRepairType = localStorage.getItem("repairType");
    if (savedRepairType) {
      setRepairType(savedRepairType);
    }
  }, []);

  // Функція для очищення даних з локального сховища і стану
  const clearOrders = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("repairData");
    localStorage.removeItem("repairType");
    setFormData({});
    setRepairData({});
    setRepairType("");
  };

  return (
    <div className="container mt-5 order-container">
      <h1 className="mb-4">Ваша заявка</h1>

      {/* Виведення даних форми користувача, якщо вони існують */}
      {formData.name && (
        <div>
          <p>
            <strong>Ім'я:</strong> {formData.name}
          </p>
          <p>
            <strong>Телефон:</strong> {formData.phone}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
        </div>
      )}

      {/* Виведення даних про ремонт, якщо вони існують */}
      {repairData.name && (
        <div>
          <p>
            <strong>Ім'я:</strong> {repairData.name}
          </p>
          <p>
            <strong>Телефон:</strong> {repairData.phone}
          </p>
          <p>
            <strong>Опис проблеми:</strong> {repairData.problem}
          </p>
        </div>
      )}

      {/* Виведення типу ремонту, якщо він існує */}
      {repairType && (
        <div>
          <p>
            <strong>Вид ремонту:</strong> {repairType}
          </p>
        </div>
      )}

      {/* Кнопка для очищення даних заявки */}
      {(formData.name || repairData.name || repairType) && (
        <button className="btn btn-danger mt-4" onClick={clearOrders}>
          Очистити заявку
        </button>
      )}
    </div>
  );
};

export default Orders;
