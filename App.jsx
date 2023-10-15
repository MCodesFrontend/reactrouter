import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaderContent from "./Components/HeaderContent/HeaderContent"

function App() {
  return (
    <> 
      <div id="wrapper">
        <HeaderContent />
        <BodyContent>
          <h3>Home page</h3>
        </BodyContent>
      </div>
    </>
  )
}

export default App


