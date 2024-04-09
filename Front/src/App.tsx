import "./App.css";
import Search from "./components/ui/searchBar";
import Logo from "./components/ui/logo_cap";
import Main from "./components/ui/main";
import {Routes, Route} from "react-router-dom";
import FeedContainer from "./components/ui/feedContainer";
import UnivPage from "./components/ui/university_page";
import { useState } from "react";
// import FeedContent from "./components/ui/feedContent";


function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Main>
        <Logo />
        <Search setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<FeedContainer search={search}/>}></Route>
          <Route path="/university/:_id" element={<UnivPage/>}></Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;
