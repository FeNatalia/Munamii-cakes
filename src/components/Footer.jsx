import EmailLogo from "../pictures/footer-header-logotypes/social-media-logo/email.png";
import InstagramLogo from "../pictures/footer-header-logotypes/social-media-logo/instagram.png";
import FacebookLogo from "../pictures/footer-header-logotypes/social-media-logo/facebook.png";


export default function Footer() {
    return (
    <footer class="footer">
        <span class="social-media">
        <a href="mailto:info@munamii.se" target="_blank" title="Email"><img class="social-media-logo" src={EmailLogo} title="Munamii"/>Email</a>
        <a href="https://www.instagram.com" target="_blank" title="Instagram"><img class="social-media-logo" src={InstagramLogo}title="Instagram"/>Instagram</a>
        <a href="https://www.facebook.com" target="_blank" title="Facebook"><img class="social-media-logo" src={FacebookLogo} title="Facebook"/>Facebook</a>
        </span>
    </footer>)
};