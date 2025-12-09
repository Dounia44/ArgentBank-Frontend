import img400 from "../../assets/images/bank-tree-400.webp";
import img800 from "../../assets/images/bank-tree-800.webp";
import img1200 from "../../assets/images/bank-tree-1200.webp";
import img1600 from "../../assets/images/bank-tree-1600.webp";

import Hero from "../../components/Hero/Hero";

import Feature from "../../components/Feature/Feature";
import features from "../../data/Features";

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

      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature) => (
          <Feature
            key={feature.id}
            src={feature.src}
            srcSet={feature.srcSet}
            width={feature.width}
            height={feature.height}
            alt={feature.alt}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </section>
    </>
  );
}

export default Home;
