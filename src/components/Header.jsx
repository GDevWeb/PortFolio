import "../sass/header.scss";
import myAvatar from "../../public/images/avatar2.jpg";
function Header() {
  return (
    <div id="headerContainer">
      <figure id="avatar">
        <img src={myAvatar} alt="" width={"125px"} className="avatar"/>
      </figure>

      <div id="headerText">
        <h1>Dammaretz Gaëtan</h1>
        <h2>Développeur web <span>en recherche d'une alternance</span></h2>
      </div>
    </div>
  );
}

export default Header;
