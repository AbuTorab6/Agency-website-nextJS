var getData = async () => {
  try {
    let res = await fetch(process.env.BASE_URL + "api/HeroList");
    let data = await res.json();

    return data;
  } catch (ob) {
    throw new Error("error");
  }
};

const Hero = async () => {
  let data = await getData();

  return (
    <>
      <section className="hero-section">
        <div className="row">
          <div className="hero-grid">
            <div className="col hero-left-col">
              <div className="hero-text-content">
                <h2>{data.title}</h2>
                <p className="description">{data.description}</p>
                <button className="primary-btn">Get Started</button>
              </div>
            </div>
            <div className="col">
              <div className="right-top-flex">
                <div className="heroImage1">
                  <img className="heroImg1" src={data.image1} alt="" />
                </div>
                <div className="heroImage2">
                  <img className="heroImg2" src={data.image2} alt="" />
                </div>
              </div>
              <div className="right-bottom-flex">
                <div className="heroImage3">
                  <img className="heroImg3" src={data.image3} alt="" />
                </div>
                <div className="heroImage4">
                  <img className="heroImg4" src={data.image4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
