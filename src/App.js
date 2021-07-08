import logo from './logo.svg';
import './App.css';
import {All_page} from './pages/all.tsx'
import {indexApp} from './pages/index.tsx'
import { A_page } from "./pages/a";
import { B_page } from "./pages/b";
import { C_page } from "./pages/c";
import { D_page } from "./pages/d";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Link_btn from "./pages/link_button"
import routers from "./router/config"
function App(props) {
  console.log('routers',routers)
  return (
    <div className="App">
      <header className="App-header">
        <span>这是第一个页面</span>
            <BrowserRouter>
             {/* <div style={{display:'flex'}}>
             {
               routers[0].routers[0].routers.map((item) => {
                  return (
                    <Link_btn path={item.path} key={item.path}>{item.nameCN}</Link_btn>
                  )
               })
             }
             </div>
              {
                routers[0].routers[0].routers.map((item) => {
                  return (
                    <Route path={item.path} component={item.components}></Route>
                  )
               })
              }
              <Route path={'/all'} component={All_page}>
                <span>这是all页面</span>
                <Route path="/all/a" component={A_page}></Route>
                <Route path="/all/b" component={B_page}></Route>
                <Route path="/all/c" component={C_page}></Route>
                <Route path="/all/d" component={D_page}></Route>
              </Route> */}
               <Link_btn path={"/all/a"} key={"/all/a"}>a</Link_btn>
               <Link_btn path={"/all/b"} key={"/all/b"}>b</Link_btn>
              <Route path={'/all'} component={All_page}>
                <span>这是all页面</span>
                <Route path="/all/a" component={A_page}></Route>
                <Route path="/all/b" component={B_page}></Route>
              </Route>
            </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
