var getData = async () => {
  try {
    let res = await fetch(process.env.BASE_URL + "api/AllService");
    let data = await res.json();

    return data;
  } catch (ob) {
    throw new Error("error");
  }
};

const Services = async () => {
  let data = await getData();
  // console.log("s-data", data);
  return (
    <>
      <section className="service-section">
        <div className="row">
          <div className="service-grid">
            <div className="col service-left-col">
              <div className="service-text-content">
                <p className="p-top">Dolor sit amet consectutar</p>
                <h2>Build & Launch withoutproblems</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque efficitur nisl sodales egestas lobortis.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="right-top-flex">
                <div className="serviceImage1">
                  <img
                    className="serviceImg1"
                    src="https://images.unsplash.com/photo-1557804483-ef3ae78eca57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=941&q=80"
                    alt=""
                  />
                </div>
                <div className="serviceImage2">
                  <img
                    className="serviceImg2"
                    src="https://images.unsplash.com/photo-1559136560-16ad036d85d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="right-bottom-flex">
                <div className="serviceImage3">
                  <img
                    className="serviceImg3"
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                    alt=""
                  />
                </div>
                <div className="serviceImage4">
                  <img
                    className="serviceImg4"
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
