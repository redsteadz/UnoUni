import { Button } from "./components/ui/button";
import "./App.css";
import Search from "./components/ui/searchBar";
import Logo from "./components/ui/logo_cap";
import Main from "./components/ui/main";
import FeedContainer from "./components/ui/feedContainer";
// import FeedContent from "./components/ui/feedContent";

function App() {
  return (
    <>
      <Main>
        <Logo />
        <Search />
        <FeedContainer/>
      </Main>
    </>
  );
}

export default App;
