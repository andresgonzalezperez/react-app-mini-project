import valentinImg from "../assets/valentin.jpg";
import andresImg from "../assets/andres.JPG";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>Our Team</h1>
      <p>
        Our team is made up of the best chefs in the world, specializing in the
        preparation of street food recipes.
      </p>

      <h2>Team</h2>
      <ul>
        <li className="team-member">
          <span className="team-name">Marian Valentín</span>
          <img src={valentinImg} alt="Marian Valentín" className="team-img" />
        </li>

        <li className="team-member">
          <span className="team-name">Andrés González</span>
          <img src={andresImg} alt="Andrés González" className="team-img" />
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
