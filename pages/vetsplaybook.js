import Introduction from "@components/pages/vets playbook/Introduction";
import IntroductionVideo from "@components/pages/vets playbook/IntroductionVideo";
import Title from "@components/pages/vets playbook/Title";
import React from "react";
import { motion } from "framer-motion";

function vetsplaybook() {
  return (
    <>
      <Title />
      <motion.div
        initial={{ opacity: "0%", y: 50 }}
        animate={{
          opacity: "100%",
          y: 0,
          transition: { duration: 0.8, delay: 0.8 },
        }}
      >
        <Introduction />
        <IntroductionVideo />
      </motion.div>
    </>
  );
}

export default vetsplaybook;
