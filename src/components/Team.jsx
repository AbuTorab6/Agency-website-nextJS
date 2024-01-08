var getData = async () => {
  try {
    let res = await fetch(process.env.BASE_URL + "api/TeamList");
    let data = await res.json();

    return data;
  } catch (ob) {
    throw new Error("error");
  }
};

const Team = async () => {
  let data = await getData();

  return (
    <>
      <section className="team-section">
        <div className="row">
          <p className="p-top">Dolor sit amet consectutar</p>
          <h2>Check our awesome team members</h2>
          <div className="team-grid">
            {data.map((item, index) => {
              return (
                <div key={index} className="col">
                  <div className="team-image">
                    <img className="team-img" src={item.image} alt="" />
                  </div>
                  <div className="team-member-detail">
                    <h3>{item.name}</h3>
                    <p>{item.bio}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
