import React, { useState } from "react";
import { Col, Steps, Divider } from "antd";
import UserData from "../../components/UserData";
import PersonalData from "../../components/PersonalData";
import DeliveryData from "../../components/DeliveryData";

function FormPage() {
  const { Step } = Steps;
  const [actualStep, setActualStep] = useState(0);
  const [formValues, setFormValues] = useState({});

  function advanceToNextStep(newFormValues) {
    const actualStepCopy = actualStep;
    setActualStep(actualStepCopy + 1);
    setFormValues({ ...formValues, ...newFormValues });
  }

  function restartForm() {
    setFormValues({});
    setActualStep(0);
  }

  const formSteps = [
    <UserData goNextStepCallback={advanceToNextStep} />,
    <PersonalData advanceNextStepCallback={advanceToNextStep} />,
    <DeliveryData finishFormCallback={restartForm} />,
  ];

  return (
    <div className="formPage__container">
      <Steps className="formPage__step" progressDot current={actualStep}>
        <Step title="User" />
        <Step title="Personal" />
        <Step title="Delivery" />
      </Steps>
      <Divider />
      <div>{formSteps[actualStep]}</div>
    </div>
  );
}

export default FormPage;
