import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";

import CharacterList from "./characters/CharacterList";
import CharacterDetails from "./characters/CharacterDetails";
import CharacterCreate from "./characters/CharacterCreate";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">
        <Route exact path="/" component={CharacterList} />
        <Switch>
          <Route exact path="/character/create" component={CharacterCreate} />
          <Route path="/character/:id" component={CharacterDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
