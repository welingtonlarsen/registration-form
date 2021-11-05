import React from "react";
import { Button } from "antd";

const PersonalizedButton = ({ onClickCallback, children, disabled }) => {
  return (
    <div className="common__button">
      <Button
        onClick={onClickCallback}
        type="primary"
        htmlType="submit"
        disabled={disabled}
      >
        {children}
      </Button>
    </div>
  );
};

export default PersonalizedButton;
