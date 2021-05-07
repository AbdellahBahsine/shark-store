import {FooterContainer, Credit, Socials, Social} from './footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <Credit>© 2021 - Designed and Coded By <a href="#">Abdellah Bahsine</a></Credit>
            <Socials>
                <Social><i className="fab fa-linkedin-in"></i></Social>
                <Social><i className="fab fa-github-alt"></i></Social>
                <Social><i className="fab fa-medium-m"></i></Social>
            </Socials>
        </FooterContainer>
    )
}

export default Footer;