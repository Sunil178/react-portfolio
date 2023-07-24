import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return(
       <section className="footer-section">
        <h3>@copyright 2023</h3>
        <ul>
            <li><EmailIcon/></li>
            <li><GitHubIcon/></li>
            <li><LinkedInIcon/></li>
        </ul>
       </section>
    )
}

export default Footer;
