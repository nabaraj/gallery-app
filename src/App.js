import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Album from "./view/album/Album";
import Gallery from "./view/gallery/Gallery";

function Page404() {
  return <div className="container text-center mt-5"><h2>Page Not Found</h2></div>
}

function App() {
  return (

    <Switch>
      <Route path='/' component={Album} exact />
      <Route path='/gallery/:id' component={Gallery} />
      <Route component={Page404} />
    </Switch>
  );
}

export default App;
