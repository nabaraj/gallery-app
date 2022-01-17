import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Conunter from "./components/counter/Conunter";
import ConunterSecond from "./components/ConunterSecond";
import Album from "./view/album/Album";
import Gallery from "./view/gallery/Gallery";
import FormHooks from "./components/counter/form-hooks/FormHooks";

function Page404() {
  return <div className="container text-center mt-5"><h2>Page Not Found</h2></div>
}

function App() {
  return (
    <div className="container">
      <Conunter></Conunter>
      <ConunterSecond></ConunterSecond>
      {/* <FormHooks /> */}
    </div>
    // <Switch>
    //   <Route path='/' component={Album} exact />
    //   <Route path='/gallery/:id' component={Gallery} />
    //   <Route component={Page404} />
    // </Switch>
  );
}

export default App;
