import React from "react";

const RegisterVaccine = () => {
  return (
    <>
      <div className="text-center">
        <h1>Vaccination Registeration Page</h1>
        <p>provides integrated health care with COVID-19 Test.</p>
      </div>
      <div className="RegisterPage">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="true"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/09/20/thumbs_b_c_25f76c5d6bb135a7c6c17efa79c16100.jpg?v=134204"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.zurich.co.id/-/media/project/zwp/indonesia/images/artikel/november-2020/ketahui-pengertian-kegunaan-serta-biaya-test-swab-covid19-berikut-ini.jpg?rev=1ed14c96fe504f76b84b9d2cc52ab35e"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://genecraftlabs.com/wp-content/uploads/2021/04/pengertian-laboratorium.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="ini-table m-5">
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>1. Nama</th>
                    <th>2. NIK</th>
                    <th>3. Umur</th>
                    <th>4. KTP</th>
                    <th>5. Tempat</th>
                    <th>6. Actions</th>
                </tr>   
            </thead>
        </table>
        <div className="tombol text-center">
            <a href="/add" className="btn btn-primary">Add New Data</a>
        </div>
      </div>
    </>
  );
};

export default RegisterVaccine;
