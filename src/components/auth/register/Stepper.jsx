import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import NicknameStep from "./NicknameStep";
import EmailStep from "./EmailStep";
import PasswordStep from "./PasswordStep";
import GenderStep from "./GenderStep";
import InterestStep from "./InterestStep";
import VerificationStep from "./VerificationStep";
import AgreementStep from "./AgreementStep";

import {
  isCollegeEmail,
  getPasswordStrength,
} from "../../../utils/validators";

const TOTAL_STEPS = 7;

export default function Stepper({ onFinish }) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    password: "",
    gender: "",
    interests: [],
    otp: "",
    agreement: false,
  });

  const validateCurrentStep = () => {
    switch (step) {
      case 1:
        return formData.nickname.trim().length >= 3;

      case 2:
        return isCollegeEmail(formData.email);

      case 3:
        return (
          getPasswordStrength(formData.password).label !==
          "Weak"
        );

      case 4:
        return formData.gender !== "";

      case 5:
        return formData.interests.length > 0;

      case 6:
        return formData.otp.trim().length === 6;

      case 7:
        return formData.agreement;

      default:
        return true;
    }
  };

  const next = () => {
    if (!validateCurrentStep()) return;

    if (step < TOTAL_STEPS) {
      setStep((prev) => prev + 1);
    } else {
      onFinish(formData);
    }
  };

  const back = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <NicknameStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 2:
        return (
          <EmailStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 3:
        return (
          <PasswordStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 4:
        return (
          <GenderStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 5:
        return (
          <InterestStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 6:
        return (
          <VerificationStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 7:
        return (
          <AgreementStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="mb-5 text-center text-cyan-300">
        Step {step} of {TOTAL_STEPS}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex justify-between">
        <button
          onClick={back}
          disabled={step === 1}
          className="rounded-xl border border-white/10 px-6 py-3 text-white transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          Back
        </button>

        <button
          onClick={next}
          disabled={!validateCurrentStep()}
          className={`rounded-xl px-8 py-3 font-semibold transition ${
            validateCurrentStep()
              ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:scale-105"
              : "cursor-not-allowed bg-zinc-700 text-zinc-400"
          }`}
        >
          {step === TOTAL_STEPS
            ? "Create Account"
            : "Next"}
        </button>
      </div>
    </>
  );
}