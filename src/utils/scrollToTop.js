import { useEffect } from "react"; 
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // Використання хука useLocation для отримання поточного маршруту
  const { pathname } = useLocation();

  // Використання хука useEffect для виконання побічного ефекту при зміні pathname
  useEffect(() => {
    // Прокручування вікна до верхнього краю при зміні маршруту
    window.scrollTo(0, 0);
  }, [pathname]); // Хук буде виконуватись при кожній зміні pathname

  return null;
}
