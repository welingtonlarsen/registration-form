import React, { useState } from "react";
import PersonalizedButton from "../Common/Button";
import { Form, Input, Button, Checkbox } from "antd";
import { useForm } from "antd/lib/form/Form";

function UserData({ goNextStepCallback }) {
  const [form] = useForm();
  const [formIsValid, setFormIsValid] = useState(false);

  const handleFormChange = () => {
    const hasErrors =
      form.getFieldsError().filter(({ errors }) => errors.length).length > 0;
    const fieldsTouched = form.isFieldsTouched(true);
    setFormIsValid(!hasErrors && fieldsTouched);
  };

  const onFinish = (value) => {
    goNextStepCallback({ user: value });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const getJustNumberRegex = () => new RegExp("^\\d+$");

  return (
    <Form
      form={form}
      className="userData__form__container"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onFieldsChange={handleFormChange}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        validateTrigger="onBlur"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="Fill in your prefered username" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        validateTrigger="onBlur"
        rules={[
          {
            required: true,
            message: "Please input your password.",
          },
          {
            pattern: getJustNumberRegex(),
            message:
              "Invalid password. Fill in a password that contains just numbers.",
          },
        ]}
      >
        <Input.Password placeholder="Fill in a password that contains just numbers." />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <PersonalizedButton disabled={!formIsValid}>Next</PersonalizedButton>
      </Form.Item>
    </Form>
  );
}

export default UserData;
