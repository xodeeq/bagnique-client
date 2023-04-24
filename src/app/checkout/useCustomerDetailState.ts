"use client";

import { detailErrorsState } from "@/atoms";
import { customerDetailState } from "@/atoms";
import React from "react";
import { useRecoilState } from "recoil";

function useCustomerDetailState() {
  const [customerDetail, setCustomerDetail] =
    useRecoilState(customerDetailState);
  const [detailErrors, setDetailErrors] = useRecoilState(detailErrorsState);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    let errors: any = {};
    errors.cleared = true;
    Object.entries(customerDetail).forEach(([key, value]) => {
      errors[key] = [];
      if (!value) {
        errors[key].push(`${key} cannot be empty`);
        if (errors.cleared) errors.cleared = false;
      }
      if (key === "email" && !/^[^@]+@\w+(\.\w+)+\w$/.test(value)) {
        errors[key].push(`${value} is not valid`);
        if (errors.cleared) errors.cleared = false;
      }
    });
    setDetailErrors(errors);
  }, [customerDetail]);

  return {
    customerDetail,
    setCustomerDetail,
    detailErrors,
    setDetailErrors,
    checked,
    setChecked,
  };
}

export default useCustomerDetailState;
