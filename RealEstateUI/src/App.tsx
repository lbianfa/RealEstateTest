import { Routes, Route } from "react-router"
import { PropertiesPage } from "./pages/properties"
import { PropertyDetailsPage } from "./pages/property-details"
import { Navigate } from "react-router"
import "./app.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "react-toastify/dist/ReactToastify.css";

function App() {
  return <Routes>
    <Route path="/properties" element={<PropertiesPage />} />
    <Route path="/properties/:id" element={<PropertyDetailsPage />} />
    <Route path="*" element={<Navigate to="/properties" />} />
  </Routes>
}

export default App
