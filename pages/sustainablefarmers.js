import { motion } from "framer-motion";
import CustomerInterviews from "@components/pages/sustainable farmers/CustomerInterviews";
import CustomerInterviewsPicture from "@components/pages/sustainable farmers/CustomerInterviewsPicture";
import HifiWireframe from "@components/pages/sustainable farmers/HifiWireframe";
import HifiWireframePicture from "@components/pages/sustainable farmers/HifiWireframePicture";
import InterviewInsights from "@components/pages/sustainable farmers/InterviewInsights";
import InterviewInsightsPicture from "@components/pages/sustainable farmers/InterviewInsightsPicture";
import Introduction from "@components/pages/sustainable farmers/Introduction";
import IntroductionPicture from "@components/pages/sustainable farmers/IntroductionPicture";
import LessonsLearned from "@components/pages/sustainable farmers/LessonsLearned";
import LessonsLearnedPicture from "@components/pages/sustainable farmers/LessonsLearnedPicture";
import LofiWireframe from "@components/pages/sustainable farmers/LofiWireframe";
import LofiWireframePicture from "@components/pages/sustainable farmers/LofiWireframePicture";
import PersonaPicture from "@components/pages/sustainable farmers/PersonaPicture";
import Personas from "@components/pages/sustainable farmers/Personas";
import Title from "@components/pages/sustainable farmers/Title";
import UserTesting from "@components/pages/sustainable farmers/UserTesting";
import UserTestingPicture from "@components/pages/sustainable farmers/UserTestingPicture";
import React from "react";

function sustainablefarmers() {
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
      <IntroductionPicture />
      <CustomerInterviews />
      <CustomerInterviewsPicture />
      <InterviewInsights />
      <InterviewInsightsPicture />
      <Personas />
      <PersonaPicture />
      <LofiWireframe />
      <LofiWireframePicture />
      <HifiWireframe />
      <HifiWireframePicture />
      <UserTesting />
      <UserTestingPicture />
      <LessonsLearned />
      <LessonsLearnedPicture />
      </motion.div>
    </>
  )
}

export default sustainablefarmers