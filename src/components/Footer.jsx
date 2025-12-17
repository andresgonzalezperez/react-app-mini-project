import logoGitHub from "../assets/github-logo.png"

function Footer() {
  return (
    <footer>
  <img src={logoGitHub} alt="GitHub Logo" />
  <a href="https://github.com/andresgonzalezperez/react-app-mini-project.git">
    GitHub Repository
  </a>
</footer>


  )
}

export default Footer