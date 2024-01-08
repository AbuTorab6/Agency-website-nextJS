import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="row">
          <div className="footer-grid">
            <div className="col">
              <div className="footer-image">
                <img
                  className="footer-img"
                  src="atis-mono-light.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="col">
              <div className="footer-list">
                <Link className="footer-list-item" href={"/"}>
                  Home
                </Link>
                <Link className="footer-list-item" href={"/projects"}>
                  Project
                </Link>
                <Link className="footer-list-item" href={"/team"}>
                  Team
                </Link>
                <Link className="footer-list-item" href={"/services"}>
                  Service
                </Link>
                <Link className="footer-list-item" href={"/testimonial"}>
                  Testimonial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
