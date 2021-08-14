import { motion } from "framer-motion";
function Left() {
  const word = {
    initial: {
      y: 400,
      opacity: 0,
    },
    animate: {
      y: [200, -50, 0],
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <div className="left">
      <motion.h1 variants={word} initial="initial" animate="animate">
        <span>Slick</span>
        <br />
        <span>weather</span>
      </motion.h1>
      <h3>Checking weather was never this fancy !</h3>
    </div>
  );
}

export default Left;
