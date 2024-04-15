import "../sass/header.scss";
import myAvatar from "../../public/images/avatar2.jpg";
function Header() {
  // 1.State:

  // 2.Comportement:

  // 3.Render:
  return (
    <div id="headerContainer">
      <figure id="avatar">
        <img src={myAvatar} alt="ma phot de profil" className="avatar"/>
      </figure>

      <div id="headerText">
        <h1>Dammaretz Gaëtan</h1>
        <h2>Développeur Web</h2>
      </div>
    </div>
  );
}

export default Header;
