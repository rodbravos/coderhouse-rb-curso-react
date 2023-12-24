import CoderhouseLogo from "../../assets/coderhouse-logo.svg";

const Footer = () => {
  return (
    <div className="container-fluid fixed-bottom bg-dark">
      <footer className="container py-3 my-4">
        <div className="text-center border-bottom pb-3 mb-3">
          <img
            src={CoderhouseLogo}
            alt="Coderhouse Logo"
            width="200"
            className="mx-auto"
          />
        </div>
        <h4 className="text-center fw-bold text-light">
          RODRIGO BRAVO - CURSO REACT JS
        </h4>
        <h5 className="text-center fw-bold text-light">PRIMERA ENTREGA</h5>
      </footer>
    </div>
  );
};

export default Footer;
