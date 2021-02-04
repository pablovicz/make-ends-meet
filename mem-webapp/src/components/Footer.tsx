import CopyrightIcon from '@material-ui/icons/Copyright';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Footer(){
  return(
    <div className="footer-container">
      <div className="footer-content">
      <div className="copyright-container"> 
        <CopyrightIcon className="copyright-icon" fontSize="small"/>
        <h3 className="copyright-text">2021</h3>
        <h3 className="copyright-text">Make Ends Meet</h3>
      </div>
      <div className="contact-container">
        <a className="linkedin-icon" href="https://www.linkedin.com/in/pablo-woinarovicz/"  target="_blank" rel="noopener noreferrer">
          <LinkedInIcon  />
        </a>
        <a className="github-icon" href="https://github.com/pablovicz"  target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </div>
      </div>
    </div>
  );
}

export default Footer;