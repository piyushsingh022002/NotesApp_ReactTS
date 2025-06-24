import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaStickyNote } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Styled components
const Page = styled.div`
  font-family: 'Segoe UI', sans-serif;
  color: #333;
  background: linear-gradient(135deg, #EEF2FF,rgb(98, 211, 233));
  min-height: 100vh;
`;
const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 4rem;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.6rem;
  font-weight: bold;
  background: linear-gradient(90deg, #3B82F6, #60A5FA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    font-weight: 800;
    border: 2px solid transparent;
    border-radius: 6px;
    transition: all 0.3s ease;
    color: #333;

    &:hover {
      color: #6C5DD3;
      border-color: #6C5DD3;
      background-color: rgba(108, 93, 211, 0.1);
    }
  }
`;
const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  background: #fff;
  border-radius: 12px;
  margin: 3rem 4rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
`;
const HeroText = styled.div`
  max-width: 480px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    transition: color 0.3s ease;
    &:hover {
      color: #6C5DD3;
    }
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #555;
    transition: color 0.3s ease;
    &:hover {
      color: #4B5563;
    }
  }

  button {
    padding: 0.9rem 2rem;
    font-size: 1.05rem;
    background: linear-gradient(to right, #6C5DD3, #8B5CF6);
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(108, 93, 211, 0.3);
    }
  }
`;

const Features = styled.section`
  padding: 4rem;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const FeatureCard = styled.div`
  width: 300px;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid transparent;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  backdrop-filter: blur(14px);
  transition: all 0.4s ease;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    border-image: linear-gradient(135deg, #6C5DD3, #8B5CF6) 1;
    box-shadow: 0 12px 28px rgba(108, 93, 211, 0.3);
  }

  &:hover h3 {
    color: #6C5DD3;
  }

  &:hover::after {
    content: "✨ Try it now!";
    position: absolute;
    bottom: 12px;
    left: 0;
    right: 0;
    color: #8B5CF6;
    font-size: 0.9rem;
    opacity: 0.8;
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FeatureTitle = styled.h3`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  transition: color 0.3s ease;
`;

const FeatureText = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin-top: 0.5rem;
`;

const Footer = styled.footer`
  background: #1F2937; color: #CBD5E1;
  padding: 3rem 4rem; display: flex; justify-content: space-between;
  flex-wrap: wrap;
`;
const FooterCol = styled.div`flex: 1; min-width: 200px; margin: 1rem;
 h4 { color: #fff; margin-bottom: 1rem; }
 a, p { color: #9CA3AF; display: flex; align-items: center; gap: 0.5rem;
  margin-bottom: 0.75rem; text-decoration: none;
  &:hover { color: #6C5DD3; } }
`;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const featureData = [
  {
    title: 'Sync Across Devices',
    description: 'Seamlessly access your notes on mobile, tablet, or desktop.',
    img: 'https://cdn.pixabay.com/photo/2016/11/29/04/17/ipad-1867461_1280.jpg',
  },
  {
    title: 'Markdown Support',
    description: 'Use Markdown syntax for fast and flexible formatting.',
    img: 'https://cdn.pixabay.com/photo/2020/02/17/18/52/website-4851318_1280.jpg',
  },
  {
    title: 'Smart Tags & Search',
    description: 'Organize and find notes easily with tags and instant search.',
    img: 'https://cdn.pixabay.com/photo/2018/01/18/07/12/technology-3087585_1280.jpg',
  },
];

  return (
    <Page>
      <Header>
        <Logo><FaStickyNote /> NoteApp</Logo>
        <Nav>
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </Nav>
      </Header>

      <Hero>
        <HeroText>
          <h1>Beautiful notes, everywhere you go</h1>
          <p>Capture ideas seamlessly across devices with modern design and smart syncing.</p>
          <button onClick={() => navigate('/register')}>Get Started</button>
        </HeroText>
        <ImageWrapper>
          <img
            src="https://dummyimage.com/420x280/6c5dd3/ffffff&text=NoteApp+Preview"
            alt="NoteApp preview"
          />
        </ImageWrapper>
      </Hero>
<Features>
  {featureData.map(({ title, description, img }, idx) => (
    <FeatureCard key={idx}>
      <ImageWrapper>
        <img src={img} alt={title} />
      </ImageWrapper>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureText>{description}</FeatureText>
    </FeatureCard>
  ))}
</Features>


      <Footer>
        <FooterCol>
          <h4>Contact</h4>
          <p><FaPhoneAlt /> +1 234 567 890</p>
          <a href="mailto:you@example.com"><FaEnvelope /> you@example.com</a>
        </FooterCol>
        <FooterCol>
          <h4>Follow Me</h4>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </FooterCol>
        <FooterCol>
          <h4>Quick Links</h4>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <a href="/">Home</a>
        </FooterCol>
      </Footer>
    </Page>
  );
};

export default LandingPage;
