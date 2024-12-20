import React from "react";
import "./Header.css";
import HeaderImage from "../../assets/HeaderImage.png";

const Header = () => {
  return (
    <div className="header container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 text-section">
          <h1>
            Temukan informasi menarik yang akan kami{" "}
            <span className="highlight">Beritau</span>!
          </h1>
          <p>
            Temukan informasi Aktual, Cepat, dan Akurat sesuai dengan trend dan
            kesukaanmu. Jangan tunggu lagi, Baca berita selengkapnya di sini!
          </p>
          <button className="btn btn-primary btn-beritau">Informasi →</button>
        </div>

        <div className="col-lg-6 col-md-12 image-section">
          <div className="image-wrapper">
            <img src={HeaderImage} alt="Working team" className="main-image" />
            <div className="info-badge badge-left-top">
              Informasi tersedia <strong>110+</strong>
            </div>
            <div className="info-badge badge-left-bottom">
              Update secara <strong>Otomatis</strong>
            </div>
            <div className="info-badge badge-right-bottom">
              Jumlah Pengunjung <strong>123K+</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
