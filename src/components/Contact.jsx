import "../sass/contact.scss";
import icons from "../assets/icons/indexIcons";

function Contact() {
  return (
    <div id="contactContainer">
      <h2>Contactez-moi</h2>
      <div id="contactParagraph">
        <p>
          Vous pouvez me contacter par e-mail pour toute question, opportunité
          de collaboration ou simplement pour dire bonjour.
        </p>
        <p>N'hésitez pas à m'envoyer un e-mail à l'adresse suivante :</p>
      </div>
      <div id="contactMail">
        <a href="mailto:votre@email.com" className="contactLink">
          <img src={icons.iconEmail} alt="Icône e-mail" />
          <span>mon@email.com</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
