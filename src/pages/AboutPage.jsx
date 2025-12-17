import valentinImg from "../assets/valentin.png";
import andresImg from "../assets/andres.png";
import remyImg from "../assets/remy-chef.jpg";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>Our Team</h1>
      <p>
        Our team is made up of the best chefs in the world, specializing in the
        preparation of street food recipes.
      </p>
      <ul>
        <li className="team-member">
          <span className="team-name">Chef Remy</span>
          <p className="team-description">Our star chef comes from Paris and has extensive experience in top-level restaurants. We have convinced him to join us on this road trip adventure. His signature dish is ratatouille.</p>
          <img src={remyImg} alt="Remy-chef" className="team-img" />
        </li>
        <li className="team-member">
          <span className="team-name">Chef Marian Valentín</span>
          <p className="team-description">He cooks like he codes, placing special importance on the visual aspect. He's a genius when it comes to presenting dishes (the CSS of cooking). His creations look so good that you want to try them right away.</p>
          <img src={valentinImg} alt="Marian Valentín" className="team-img" />
        </li>

        <li className="team-member">
          <span className="team-name">Chef Andrés González</span>
          <p className="team-description">If music is playing, he is capable of making dishes as well as developing code. He claims that listening to music while tasting his dishes adds flavor to the food.</p>
          <img src={andresImg} alt="Andrés González" className="team-img" />
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
