import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../../assets/LogoNews.png";
import Logo1 from "../../assets/hactiv8.png";

function Footer() {
  return (
    <footer className="footer bg-white py-4">
      <div className="container">
        <div className="row">
          <div className="footer-left">
            <img src={Logo} alt="Logo Beritau" className="footer-logo" />
            <img src={Logo1} alt="Logo Hactiv8" className="footer-logo" />
          </div>
          <div className="col-md-5">
            <div className="footer-left">
              <h5 className="mt-3 fw-bold">Beritau</h5>
              <p className="footer-address">
                Berita terbaru dari berbagai referensi <br />
                yang akan memberikan informasi dan insight <br />
                dari berbagai jenis pilihan yang kamu cari.
              </p>
              <p>
                Email:{" "}
                <a href="mailto:cekdi@beritau.id" className="footer-email">
                  info@beritau.id
                </a>
              </p>
              <div className="social-icons">
                <FaFacebookF className="icon" />
                <FaInstagram className="icon" />
                <FaLinkedinIn className="icon" />
                <FaYoutube className="icon" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Informasi Lanjutan</h6>
            <ul className="list-unstyled">
              <li>
                <a className="footer-link">Cari Artikel</a>
              </li>
              <li>
                <a className="footer-link">Cari Berita</a>
              </li>
              <li>
                <a className="footer-link">Daftar Movie</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">Tentang BERITAU</h6>
            <ul className="list-unstyled">
              <li>
                <a className="footer-link">Tentang Kami</a>
              </li>
              <li>
                <a className="footer-link">Pusat Informasi</a>
              </li>
              <li>
                <a className="footer-link">Panduan</a>
              </li>
              <li>
                <a className="footer-link">Laporkan Kendala</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 footer-bottom">
            <div>
              <a href="#" className="footer-link">
                Syarat Ketentuan
              </a>{" "}
              |{" "}
              <a href="#" className="footer-link">
                Kebijakan Privasi
              </a>
            </div>
            <div>
              <p className="mb-0 text-muted">
                &copy; 2024 Zakaria Rahman. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
