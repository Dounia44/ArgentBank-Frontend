import Hero from "../components/Hero/Hero";
import img400 from "../assets/images/bank-tree-400.webp";
import img800 from "../assets/images/bank-tree-800.webp";
import img1200 from "../assets/images/bank-tree-1200.webp";
import img1600 from "../assets/images/bank-tree-1600.webp";

function Home() {
  return (
    <>
      <Hero
        src={img400}
        srcSet={`${img400} 400w, ${img800} 800w, ${img1200} 1200w, ${img1600} 1400w`}
        width={400}
        height={267}
        alt="Bank tree"
        title="Promoted Content"
        subtitles={["No fees.", "No minimum deposit.", "High interest rates."]}
        text="Open a savings account with Argent Bank today!"
      />
    </>
  );
}

export default Home;
