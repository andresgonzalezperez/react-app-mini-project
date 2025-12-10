import logoGitHub from "../assets/github-logo.png"

function Footer() {
  return (
    <footer>
        <a href="https://github.com/andresgonzalezperez/react-app.git">
        <img src ={logoGitHub}  alt = "Git Hub Logo"/>
        <p>GitHub Repository</p>
        </a>
    </footer>

  )
}

export default Footer