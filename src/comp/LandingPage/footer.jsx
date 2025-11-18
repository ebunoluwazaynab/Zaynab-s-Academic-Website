import { Footer } from '../../assets/styles';

const FooterComponent = () => {
  return (
    <Footer>
      <p>
        © Copyright {new Date().getFullYear()} Zaynab Awofeso. 
        Last updated: November 18, 2025.
      </p>
    </Footer>
  );
};

export default FooterComponent;
