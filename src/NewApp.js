import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Link_btn from "./pages/link_button"
import routers from "./router/config"
import Demoredux from './pages/demo_redux/index'
function App(props) {
  console.log('routers',routers)
  return (
    <div className="App">
            {/* <BrowserRouter>
               <Link_btn path={"/all/a"} key={"/all/a"}>a</Link_btn>
               <Link_btn path={"/all/b"} key={"/all/b"}>b</Link_btn>
              <Route path={'/all'} component={All_page}>
                <span>这是all页面</span>
                <Route path="/all/a" component={A_page}></Route>
                <Route path="/all/b" component={B_page}></Route>
              </Route>
            </BrowserRouter> */}
            <Demoredux></Demoredux>
    </div>
  );
}

export default App;
