import CoderhouseLogo from "../../assets/coderhouse-logo.svg";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark mt-5">
      <footer className="container footer py-3 mt-4">
        <div className="text-center border-bottom pb-3 mb-3">
          <img
            src={CoderhouseLogo}
            alt="Coderhouse Logo"
            width="200"
            className="mx-auto"
          />
        </div>
        <h5 className="text-center fw-bold text-light">
          RODRIGO BRAVO - CURSO REACT JS
        </h5>
        <h6 className="text-center fw-bold text-light">
          ENTREGA TRABAJO FINAL
        </h6>
      </footer>
    </div>
  );
};

export default Footer;
