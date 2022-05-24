import APIContextProvider from "./context/apiContext";
import Header from "./components/Header";

import "../src/scss/general.scss";
import "../src/scss/variables.scss";
import "../src/scss/typography.scss";
import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <APIContextProvider>
      <div className="App">
        <Header title="Hey! Kafe Location" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SearchFilter />
            </div>
          </div>
        </div>
      </div>
    </APIContextProvider>
  );
}

export default App;
