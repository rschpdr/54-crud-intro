import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";

import CharacterList from "./characters/CharacterList";
import CharacterDetails from "./characters/CharacterDetails";
import CharacterCreate from "./characters/CharacterCreate";
import CharacterUpdate from "./characters/CharacterUpdate";
import CharacterDelete from "./characters/CharacterDelete";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">
        <Route exact path="/" component={CharacterList} />
        <Switch>
          <Route exact path="/character/create" component={CharacterCreate} />
          <Route
            exact
            path="/character/update/:id"
            component={CharacterUpdate}
          />
          <Route
            exact
            path="/character/delete/:id"
            component={CharacterDelete}
          />
          <Route path="/character/:id" component={CharacterDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
