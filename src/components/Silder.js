function Silder() {
  let carouselImage = {
    // height: "40vw",
    objectFit: "cover",
  };

  return (
    <>
      <section className="container pt-5 mt-5">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img
                src="https://sslimages.shoppersstop.com/sys-master/root/h8b/hd7/29385726754846/the-new-cool-web--2023-20-feburay--hp-main-carouslee.gif"
                className="d-block w-100"
                alt="..."
                style={carouselImage}
              />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src="https://sslimages.shoppersstop.com/sys-master/root/h67/h11/29434251706398/Menswear_Top-Banner-Web---hp-main-start-at-2023-02-21-jh.jpg"
                className="d-block img-fluid"
                alt="..."
                style={carouselImage}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://sslimages.shoppersstop.com/sys-master/root/hc1/hee/29486495858718/the-new-cool-weblalilalilajh538trg.jpg"
                className="d-block w-100"
                alt="..."
                style={carouselImage}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Silder;
