import { motion } from "framer-motion";
import CustomerInterviews from "@components/pages/health map/CustomerInterviews";
import CustomerInterviewsPicture from "@components/pages/health map/CustomerInterviewsPicture";
import HifiWireframe from "@components/pages/health map/HifiWireframe";
import HifiWireframePicture from "@components/pages/health map/HifiWireframePicture";
import InterviewInsights from "@components/pages/health map/InterviewInsights";
import InterviewInsightsPicture from "@components/pages/health map/InterviewInsightsPicture";
import Introduction from "@components/pages/health map/Introduction";
import IntroductionPicture from "@components/pages/health map/IntroductionPicture";
import LessonsLearned from "@components/pages/health map/LessonsLearned";
import LessonsLearnedPicture from "@components/pages/health map/LessonsLearnedPicture";
import LofiWireframe from "@components/pages/health map/LofiWireframe";
import LofiWireframePicture from "@components/pages/health map/LofiWireframePicture";
import PersonaPicture from "@components/pages/health map/PersonaPicture";
import Personas from "@components/pages/health map/Personas";
import Title from "@components/pages/health map/Title";
import UserTesting from "@components/pages/health map/UserTesting";
import UserTestingPicture from "@components/pages/health map/UserTestingPicture";
import React from "react";

function healthmap() {
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
  );
}

export default healthmap;
