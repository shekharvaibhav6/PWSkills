import Counter from './Counter'
import './App.css'
import LogIn from './Login'
import SignUp from './SignUp'
import { BrowserRouter as Router, Route,Routes,Link, } from 'react-router-dom';
function App() {

  return (
    <>
    <Router>
      <Routes>
      
        <Route path="/SignUp" element={<SignUp/>} component={SignUp} />
        <Route path="/LogIn" element={<LogIn/>} component={LogIn} />
      </Routes>
   
    </Router>

    {/*Below Code for assignment 2 */}
    {/* <Counter/> */}
    </>
  )
}

export default App
