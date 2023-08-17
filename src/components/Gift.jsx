import imagePaths from "../utils/images";

export default function Gift() {
  return (
    <div className="gift-screens">
      <h2>Twój prezent!</h2>
      <div className="laptop">
        <img src={imagePaths.laptopImg} alt="" />
        <div className="laptopScreen">
          <img src={imagePaths.laptopPDF} alt="" />
        </div>
      </div>
      <div className="phone">
        <img src={imagePaths.phoneImg} alt="" className="phone-picture" />
        <div className="phoneScreen">
          <img src={imagePaths.phonePDF} alt="" className="phoneApp" />
        </div>
      </div>
    </div>
  );
}
