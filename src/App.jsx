import './App.css'
import { AppRoutes } from './Routes/AppRoutes'
import { AuthContext } from './Context/AuthContext'
function App() {
  

  return (
    <>
     <AuthContext>
      <AppRoutes/>
     </AuthContext>
      
    </>
  )
}

export default App
