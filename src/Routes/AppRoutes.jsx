import { Routes,Route } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
export  function AppRoutes() {
  return (
    <Routes>

      <Route exact path="/" element={<HomePage />} />
      <Route path="*" element={<h2 style={{color: "red"}}>Error 404 : Esta Página no existe</h2>} />
    </Routes>
  )
}
