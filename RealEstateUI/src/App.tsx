import { Routes, Route } from "react-router"
import { PropertiesPage } from "./pages/properties"
import "./app.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "react-toastify/dist/ReactToastify.css";

function App() {
  return <Routes>
    <Route path="/" element={<PropertiesPage />} />
  </Routes>
}

export default App
