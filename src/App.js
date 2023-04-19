import InformationUserForm from "./components/Forms/InformationUserView/InformationUserForm";
import RecommendationForm from "./components/Forms/SalaryRecommendationView/RecommendationForm";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SalaryView from "./components/Result/SalaryView";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={InformationUserForm} />
        <Route path="/recommendation" component={RecommendationForm} />
        <Route path="/recommendation-view" component={SalaryView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
