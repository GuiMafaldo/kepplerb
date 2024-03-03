import InitialPage from "./components/Central-page/Header";
import LoginPage from "./components/Login";
import Aside from "./components/Central-page/Aside"
import NewsAndAtualizações from "./components/Central-page/NewsPage";

function App () {
  return(
    <>
      <LoginPage />
      <InitialPage />
      <Aside />
      <NewsAndAtualizações />
    </>
  )
}

export default App;


