import { GlobalStyle } from "./constants/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HabitsPage from "./pages/habitsPage/HabitsPage";
import TodayPage from './pages/todayPage/TodayPage'
import HistoryPage from "./pages/historyPage/HistoryPage";
import { UserProvider } from "./constants/Context";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cadastro" element={<SignUpPage />} />
          <Route path='habitos' element={<HabitsPage />} />
          <Route path='hoje' element={<TodayPage />} />
          <Route path="historico" element={<HistoryPage />} />
        </Routes>

      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
