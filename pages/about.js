import styles from "../styles/about.module.css";
import MobileNav from "../components/home/navBar";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Footer from "../components/home/footer";

export default function AboutMe() {
  function callMe() {
    console.log("clicked on call");
  }

  function emailMe() {
    console.log("clicked on email");
  }

  return (
    <div className={styles.container}>
      <MobileNav />
      <div className={styles.main}>
        <div className={styles.background}>
          <img
            src="pics/image.jpg"
            style={{
              marginTop: "10vh",
              width: "30vh",
              height: "30vh",
              borderRadius: "20vh",
              border: "3pt solid white",
              // position: "absolute",
              // top: "25vh",
              // left: "500px",
            }}
          ></img>
        </div>
        <h1>Brian J Han</h1>
        <h2>Realtor in the Greater Dallas area</h2>
      </div>
      <br />
      <div className={styles.body}>
        <h1>About Me</h1>
        <p>* Some info about me *</p>
      </div>
      <div className={styles.body}>
        <h1>Past Sales</h1>
        <p>* Get some past sales in here *</p>
      </div>
      <div className={styles.buttons}>
        <CallIcon style={{ marginTop: "1vh" }} />
        <button className={styles.button} onClick={callMe}>
          253-306-0396
        </button>
        <EmailIcon style={{ marginTop: "1vh" }} />
        <button className={styles.button} onClick={emailMe}>
          brianhan@skylineproperties.com
        </button>
      </div>
      <Footer />
    </div>
  );
}
