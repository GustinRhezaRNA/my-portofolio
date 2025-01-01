import { FaDownload } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';

function DownloadSection() {
  return (
    <section
      id="cv"
      className=" text-white py-5 text-center"
    >
      <div className="container">
        <div className="judul  fw-bold mb-3">Want to Know More About Me?</div>
        <p className=" mb-4">Download my CV to see my skills and experiences in detail.</p>

        <a
          href="/CV.pdf"
          download
          className="btn btn-light btn-lg d-inline-flex align-items-center gap-2 px-4 py-2 shadow-sm fw-semibold"
        >
          <FaDownload className="fs-4" />
          Download CV
        </a>
      </div>
    </section>
  );
}

export default DownloadSection;
