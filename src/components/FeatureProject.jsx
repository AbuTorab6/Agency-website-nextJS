var getData = async () => {
  try {
    let res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
    let data = await res.json();

    return data;
  } catch (ob) {
    throw new Error("error");
  }
};

const FeatureProject = async () => {
  let data = await getData();

  return (
    <>
      <section className="featuredProject-section">
        <div className="row">
          <p className="p-top-left">Dolor sit amet consectutar</p>
          <h2>Featured project</h2>

          <div className="featuredProject-grid">
            {data.map((item, index) => {
              if (index == 1) {
                return (
                  <div className="col">
                    <div className="featuredProject-image featuredProject-image-with-content">
                      <img
                        className="featuredProject-img"
                        src={item.image}
                        alt=""
                      />
                      <div className="featuredProject-image-content">
                        <div>
                          <span>2023</span>
                          <h4>Lorem ipsum dolor sit amet consectutar</h4>
                        </div>
                        <div>
                          <button className="primary-btn">Click</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="col">
                    <div className="featuredProject-image">
                      <img
                        className="featuredProject-img"
                        src={item.image}
                        alt=""
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureProject;
