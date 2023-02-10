import {
  FooterStyled,
  AboutStyled,
  ContactsStyled,
  AboutTitle,
  ContactsTitle,
  DevelopedBy,
  AboutContacts,
} from "./Style";

export default function Footer() {
  return (
    <FooterStyled>
      <DevelopedBy>
        Developed by: Carlos Eduardo Cruzeiro Scaldaferri
      </DevelopedBy>
      <AboutContacts>
        <AboutStyled>
          <AboutTitle>About</AboutTitle>
          Welcome to the final frontier of space exploration! At Space Suit
          Inc., we believe in the limitless potential of the universe and the
          power of human innovation to unlock its secrets. Our space suits are
          designed for the brave pioneers who venture into the unknown,
          venturing out into the great beyond in search of discovery and
          knowledge. Engineered with the latest technology, our space suits
          provide unparalleled protection, comfort and mobility, enabling you to
          explore the galaxy like never before. Join us on our mission to
          explore the universe, and make history with Space Suit Inc.
        </AboutStyled>
        <ContactsStyled>
          <ContactsTitle>Contacts</ContactsTitle>
          <div>
            Linkedin: <a>linkedin.com/in/carlos-scaldaferri-08abb4247</a>
          </div>
          <div>
            GitHub: <a>https://github.com/CarlosScaldaferri</a>
          </div>
          <div>
            e-mail: <a>carlosscaldaferri@gmail.com</a>
          </div>
          <div>Phone: (55) 32988332070</div>
        </ContactsStyled>
      </AboutContacts>
    </FooterStyled>
  );
}
