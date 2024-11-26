import AllRoutes from "./AllRoutes"
import ShopContextProvider from "./Context/ShopContext"


function App() {


  return (
  <>
  <ShopContextProvider>

  <AllRoutes/>
  
  </ShopContextProvider>
  
  </>
  )
}

export default App
