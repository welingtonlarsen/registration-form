import React, { useState } from "react";
import { Form, Input, InputNumber, Checkbox } from "antd";
import { useForm } from "antd/lib/form/Form";
import PersonalizedButton from "../Common/Button";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const PersonalData = ({ advanceNextStepCallback }) => {
  const [form] = useForm();
  const [formIsValid, setFormIsValid] = useState(false);

  const handleFormChange = () => {
    const hasErrors =
      form.getFieldsError().filter(({ errors }) => errors.length).length > 0;
    const fieldsTouched = form.isFieldsTouched(true);
    setFormIsValid(!hasErrors && fieldsTouched);
  };

  const onFinish = (values) => {
    advanceNextStepCallback(values);
  };

  return (
    <Form
      form={form}
      className="personalData__form__container"
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      onFieldsChange={handleFormChange}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Last Name" name="lastName">
        <Input />
      </Form.Item>
      <Form.Item
        label="NIE"
        name="nie"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        className="personalData__form__email"
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <div className="personalData__form__inlineComponents">
        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          className="personalData__form__checkbox"
          name="sendEmailNews"
          valuePropName="checked"
        >
          <Checkbox>Send email news</Checkbox>
        </Form.Item>

        <Form.Item
          className="personalData__form__checkbox"
          name="sendSaleNews"
          valuePropName="checked"
        >
          <Checkbox>Send sale news</Checkbox>
        </Form.Item>
      </div>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <PersonalizedButton disabled={!formIsValid}>Next</PersonalizedButton>
      </Form.Item>
    </Form>
  );
};

export default PersonalData;
