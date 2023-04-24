"use client";

import React from "react";

function useCustomerFeedbackState() {
  const [customerFeedback, setCustomerFeedback] = React.useState({
    name: "",
    email_address: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [feedbackErrors, setFeedbackErrors] = React.useState({
    name: [],
    email_address: [],
    phone: [],
    subject: [],
    message: [],
    cleared: true,
  });
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    let errors: any = {};
    errors.cleared = true;
    Object.entries(customerFeedback).forEach(([key, value]) => {
      errors[key] = [];
      if (!value) {
        errors[key].push(`${key} cannot be empty`);
        if (errors.cleared) errors.cleared = false;
      }
      if (key === "email_address" && !/^[^@]+@\w+(\.\w+)+\w$/.test(value)) {
        errors[key].push(`${value} is not valid`);
        if (errors.cleared) errors.cleared = false;
      }
    });
    setFeedbackErrors(errors);
  }, [customerFeedback]);

  return {
    customerFeedback,
    setCustomerFeedback,
    feedbackErrors,
    setFeedbackErrors,
    checked,
    setChecked,
  };
}

export default useCustomerFeedbackState;
