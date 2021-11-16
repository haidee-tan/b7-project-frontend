import facebook from "../assets/imgs/links/facebook.png";
import twitter from "../assets/imgs/links/twitter.png";
import instagram from "../assets/imgs/links/instagram.png";
import logo from "../assets/imgs/kaserolla-landscape.png";

const Footer  = (props) => {
    return(
        <footer>
            <div className="link-box">
                <a href="https://www.facebook.com/">
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="https://www.twitter.com/">
                    <img src={twitter} alt="twitter" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagram} alt="instagram" />
                </a>
            </div>
            <div className="logo-box">
                <img src={logo} alt="logo" />
            </div>
        </footer>
    )
}

export default Footer;