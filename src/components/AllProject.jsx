var getData = async () => {
  try {
    let res = await fetch(process.env.BASE_URL + "api/AllProject");
    let data = await res.json();

    return data;
  } catch (ob) {
    throw new Error("error");
  }
};

const AllProject = async () => {
  let data = await getData();

  return (
    <>
      <section className="allProject-section">
        <div className="row">
          <p className="p-top-left">Dolor sit amet consectutar</p>
          <h2>All project</h2>

          <div className="allProject-grid">
            {data.map((item, index) => {
              if (index == 1) {
                return (
                  <div className="col">
                    <div className="allProject-image allProject-image-with-content">
                      <img className="allProject-img" src={item.image} alt="" />
                      <div className="allProject-image-content">
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
                  <div key={index} className="col">
                    <div className="allProject-image">
                      <img className="allProject-img" src={item.image} alt="" />
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

export default AllProject;
