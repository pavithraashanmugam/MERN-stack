import {Route,Routes,Navigate} from 'react-router-dom';
import Main from './component/Main';
import Signup from './component/Signup';
import Login from './component/Login';
import Python from './component/Python';
import Cprogramming from './component/Cprogramming';
import Java from "./component/Java";
import Html from './component/Html';
import Javascript from './component/Javascript';
import Kotlin from './component/Kotlin';
import Oracle from './component/Oracle';
import Cplus from './component/Cplus';
import Instructor from './component/Instructor';
import Oracleq from './component/Oracle/quiz';
import Pythonq from './component/Python/quiz';
import Kotlinq from './component/Kotlin/quiz';
import Javaq from './component/Kotlin/quiz';
import Htmlq from './component/Html/quiz';
import Cq from './component/Cprogramming/quiz';
import Cplusq from './component/Cplus/quiz';
import JavaScriptq from './component/Javascript/quiz';



function App() {
  const user = localStorage.getItem("token")
  return (
   <Routes>
    {user && <Route path="/"  exact element = {<Main/>} />}
     <Route path="/signup"  exact element = {<Signup/>} />
     <Route path="/login"  exact element = {<Login/>} />
     <Route path="/instructor"  exact element = {<Instructor/>} />
     <Route path="/python" exact element = {<Python/>} />
     <Route path="/c" exact element = {<Cprogramming/>} />
     <Route path="/java" exact element = {<Java/>} />
     <Route path="/html" exact element = {<Html/>} />
     <Route path="/js" exact element = {<Javascript/>} />
     <Route path="/kot" exact element = {<Kotlin/>} />
     <Route path="/orcl" exact element = {<Oracle/>} />
     <Route path="/cp" exact element = {<Cplus/>} />
     <Route path="/oq" exact element = {<Oracleq/>} />
     <Route path="/kq" exact element = {<Kotlinq/>} />
     <Route path="/pq" exact element = {<Pythonq/>} />
     <Route path="/jq" exact element = {<Javaq/>} />
     <Route path="/hq" exact element = {<Htmlq/>} />
     <Route path="/cq" exact element = {<Cq/>} />
     <Route path="/cpq" exact element = {<Cplusq/>} />
     <Route path="/jsq" exact element = {<JavaScriptq/>} />
     <Route path="/"  exact element = {<Navigate replace to ="/login" />} />
   </Routes>
  );
}

export default App;
