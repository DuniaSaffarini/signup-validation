import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom"
import Signup from "./Signup/Signup.js"
import LoginPage from "./LogIn/Login.js"
function App() {
  return (
    <div className="App">
         <BrowserRouter>
                <Switch>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                    <Route exact path="/">
                        <LoginPage />
                    </Route>
                </Switch>
            </BrowserRouter>
    </div>
  );
}

export default App;
