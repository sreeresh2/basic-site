import './App.css';
import Header from "./Components/Header"
import MenuContainer from "./Components/MenuContainer";
import {
    AccountBalanceWalletRounded,
    Chat,
    Favorite,
    HomeRounded,
    Settings,
    SummarizeRounded
} from "@mui/icons-material";

import {useEffect} from "react";
function App() {

    useEffect(() =>{
        const menuLi = document.querySelectorAll("#menu li");

        function setMenuActive() {
            menuLi.forEach((n)=> n.classList.remove("active"));
            this.classList.add("active");
        }

        menuLi.forEach((n)=> n.addEventListener("click", setMenuActive));
    })
  return (
    <div className="App">

      {/*Header Section*/}
      <Header/>
      {/*Main Container*/}
      <main>
          <div className="mainContainer"></div>
          <div className="rightMenu"></div>
      </main>

      {/*Bottom Menu*/}
      <div className="bottomMenu">
        <ul id="menu">
            <MenuContainer link={"#"} icon={<HomeRounded />}  />
            <MenuContainer link={"#"} icon={<Chat/>} />
            <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
            <MenuContainer link={"#"} icon={<Favorite />} />
            <MenuContainer link={"#"} icon={<SummarizeRounded/>} />
            <MenuContainer link={"#"} icon={<Settings />} />

            <div className="indicator"></div>

        </ul>
      </div>


    </div>
  );
}

export default App;
