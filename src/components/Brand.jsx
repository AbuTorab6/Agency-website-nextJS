var getData = async () => {
  try {
    let res = await fetch(process.env.BASE_URL + "api/BrandList");
    let data = await res.json();

    return data;
  } catch (ob) {
    throw new Error("error");
  }
};

const Brand = async () => {
  let data = await getData();

  return (
    <>
      <div className="brand-section">
        <div className="row">
          <div className="brand-grid">
            {data.map((item, index) => {
              return (
                <div key={index} className="brand-image">
                  <img className="brand-img" src={item.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
