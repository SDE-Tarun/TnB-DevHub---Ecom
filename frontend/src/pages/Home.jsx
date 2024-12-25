import BestSeller from "../components/BestSeller";
import Features from "../components/Features";
import LatestCollection from "../components/LatestCollection";
import MixedAutoSlider from "../components/MixedAutoSlider";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page text-center"
    >
      <div className="container">
        <MixedAutoSlider />

        <LatestCollection />

        <BestSeller />

        <Features />
      </div>
    </motion.section>
  );
};

export default Home;
