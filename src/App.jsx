import Header from "./Components/Header"
import UpperBody from "./Components/UpperBody"
import MainBody from "./Components/MainBody"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import FormHeader from "./Components/FormHeader"
import CenterTabs from "./Components/CenterTabs"
import QuestionForm from "./Components/QuestionForm"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<>
            <Header/> <UpperBody/> <MainBody/>
          </> } />
          <Route path="/form/:id" element={<><FormHeader /><CenterTabs/>  <QuestionForm/> </>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
