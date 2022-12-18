import React from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import Sidebar from "./components/layout/Sidebar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Create from "./student/Create";
import Edit from "./student/Edit";
import List from "./student/List";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/add" component={Create} />
          <Route exact path="/student/edit/:id" component={Edit} />
          <Route exact path="/student/list/:id" component={List} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
