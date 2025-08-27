import { Routes, Route } from "react-router"
import { PropertiesPage } from "./pages/properties"

function App() {
  return <Routes>
    <Route path="/" element={<PropertiesPage />} />
  </Routes>
}

export default App
