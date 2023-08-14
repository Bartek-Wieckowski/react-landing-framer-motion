import Welcome from "../components/Welcome";
import imagePaths from "../utils/images";

export default function Home({ homeContent }) {
  return (
    <div className="home-wrapper">
      <img src={imagePaths.homeMainImg} alt="Misja Perfekcja w pracy" className="home-main-img" />
      <Welcome homeContent={homeContent} />
    </div>
  );
}
