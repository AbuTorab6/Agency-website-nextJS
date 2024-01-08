var getData = async () => {
  try {
    let res = await fetch(process.env.BASE_URL + "api/TestimonialList");
    let data = await res.json();

    return data;
  } catch (ob) {
    throw new Error("error");
  }
};
const Testimonail = async () => {
  let data = await getData();
  console.log("tes-data", data);
  return (
    <>
      <section className="testimonial-section">
        <div className="row">
          <p className="p-top-left">Dolor sit amet consectutar</p>
          <h2>Testimonial</h2>
          <div className="tertimonial-grid">
            {data.map((item, index) => {
              return (
                <div key={index} className="col">
                  <p>{item.msg}</p>
                  <div className="testimonial-image">
                    <img
                      className="testimonial-img"
                      src={item.image}
                      alt="testimonial"
                    />
                  </div>
                  <h3>{item.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonail;
