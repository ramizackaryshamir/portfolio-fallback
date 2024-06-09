import Email from "../../assets/images/email-logo.png";
import LinkedIn from "../../assets/images/linkedin-logo.png";
import GitHub from "../../assets/images/github-logo.png";
import Layout from "../../components/shared/Layout/Layout.jsx";

const Contact = () => {
  return (
    <>
      <Layout>
        <section
        style={ {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '100vh',
          scrollSnapAlign: 'start',
          backgroundColor: '#036A87'
        }}
      >
          <a href="mailto:rzshamir@icloud.com">
            <img
              style={ {
                width: '20vw',
              }}
              src={Email}
              alt="Email: rzshamir@icloud.com"
            />
          </a>
          <a href="https://www.linkedin.com/in/ramizackaryshamir/">
            <img
                style={ {
                width: '20vw',
              }}
              src={LinkedIn}
              alt="LinkedIn: in/ramizackaryshamir"
            />
          </a>
          <a href="https://github.com/ramizackaryshamir/">
            <img
              style={ {
                width: '20vw',
              }}
              src={GitHub}
              alt="GitHub: ramizackaryshamir"
            />
          </a>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
