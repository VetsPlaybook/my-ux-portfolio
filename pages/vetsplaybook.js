import Introduction from "@components/pages/vets playbook/Introduction";
import IntroductionVideo from "@components/pages/vets playbook/IntroductionVideo";
import Title from "@components/pages/vets playbook/Title";
import React from "react";
import { motion } from "framer-motion";
import CustomerInterviews from "@components/pages/vets playbook/CustomerInterviews";
import CustomerInterviewsPicture from "@components/pages/vets playbook/CustomerInterviewsPicture";
import InterviewInsights from "@components/pages/vets playbook/InterviewInsights";
import InterviewInsightsPicture from "@components/pages/vets playbook/InterviewInsightsPicture";
import Personas from "@components/pages/vets playbook/Personas";
import PersonaPicture from "@components/pages/vets playbook/PersonaPicture";
import LofiWireframe from "@components/pages/vets playbook/LofiWireframe";
import LofiWireframePicture from "@components/pages/vets playbook/LofiWireframePicture";
import DesignSystem from "@components/pages/vets playbook/DesignSystem";
import DesignSystemPicture from "@components/pages/vets playbook/DesignSystemPicture";
import InformationArchitecture from "@components/pages/vets playbook/InformationArchitecture";
import InformationArchitecturePicture from "@components/pages/vets playbook/InformationArchitecturePicture";
import HifiWireframe from "@components/pages/vets playbook/HifiWireframe";
import HifiWireframePicture from "@components/pages/vets playbook/HifiWireframePicture";
import FinalProduct from "@components/pages/vets playbook/FinalProduct";
import FinalProductPicture from "@components/pages/vets playbook/FinalProductPicture";
import UserTesting from "@components/pages/vets playbook/UserTesting";
import UserTestingPicture from "@components/pages/vets playbook/UserTestingPicture";
import LessonsLearned from "@components/pages/vets playbook/LessonsLearned";
import LessonsLearnedPicture from "@components/pages/vets playbook/LessonsLearnedPicture";

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
        <CustomerInterviews />
        <CustomerInterviewsPicture />
        <InterviewInsights />
        <InterviewInsightsPicture />
        <Personas />
        <PersonaPicture />
        <LofiWireframe />
        <LofiWireframePicture />
        <DesignSystem />
        <DesignSystemPicture />
        <InformationArchitecture />
        <InformationArchitecturePicture />
        <HifiWireframe />
        <HifiWireframePicture />
        <FinalProduct />
        <FinalProductPicture />
        <UserTesting />
        <UserTestingPicture />
        <LessonsLearned />
        <LessonsLearnedPicture />
      </motion.div>
    </>
  );
}

export default vetsplaybook;
