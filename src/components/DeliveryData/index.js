import React from "react";
import { Modal } from "antd";
import PersonalizedButton from "../Common/Button";
import { useState } from "react/cjs/react.development";

const DeliveryData = ({ finishFormCallback }) => {
  const [showModal, setShowModal] = useState(false);

  const handeSubmitClick = () => {
    setShowModal(true);
  };

  const handleFinishForms = () => {
    finishFormCallback();
  };

  return (
    <>
      <Modal
        title="Form finished!"
        visible={showModal}
        onOk={handleFinishForms}
        // confirmLoading={confirmLoading}
        // onCancel={handleCancel}
      >
        <p>Thank you very much!</p>
      </Modal>{" "}
      <h1>Delivery Data - TODO Content</h1>
      <PersonalizedButton onClickCallback={handeSubmitClick}>
        Submit Form
      </PersonalizedButton>
    </>
  );
};

export default DeliveryData;
