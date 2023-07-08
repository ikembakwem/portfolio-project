import { motion } from "framer-motion";

export const Example1 = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 5 }}
  >
    <h1>Hello</h1>
  </motion.div>
);

export const Example2 = () => (
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{ duration: 5 }}
  >
    <h1>Hello world</h1>
  </motion.div>
);
