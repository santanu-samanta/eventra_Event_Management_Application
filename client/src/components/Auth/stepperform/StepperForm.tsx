"use client";

import React, { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Stepper, Step, StepLabel, Box, Button } from "@mui/material";
import BasicInformation from "@/components/Auth/stepperform/BasicInformation";
import VerifyCode from "@/components/Auth/stepperform/VerifyCode";
import PersonalInformation from "@/components/Auth/stepperform/PersonalInformation";
import { AuthFormValues } from "@/types";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  otpsend,
  otpverify,
  register,
  resetLoading,
  setEmail,
} from "@/store/auth/auth";
import { useRouter } from "next/navigation";
import ResendEmailButton from "@/components/Auth/ResendEmailButton";

const steps = ["Basic Information", "Verify Code", "Personal Information"];

export default function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm<AuthFormValues>({ mode: "onBlur" });
  const { loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const onSubmit: SubmitHandler<AuthFormValues> = (data) => {
    // if (activeStep === steps.length - 1) {

    // }

    if (activeStep === 0) {
      const emailData = {
        email: data.email,
      };
      dispatch(otpsend(emailData))
        .then((res) => {
          if (res.payload) {
            dispatch(setEmail(data.email as string));
            setActiveStep((prev) => prev + 1);
          }
        })
        .finally(() => {
          dispatch(resetLoading());
        });
    } else if (activeStep === 1) {
      const emailData = {
        email: data.email,
        otp: Number(data.code1 + data.code2 + data.code3 + data.code4),
      };
      dispatch(otpverify(emailData))
        .then((res) => {
          if (res.payload) {
            dispatch(setEmail(null));
            setActiveStep((prev) => prev + 1);
          }
        })
        .finally(() => {
          dispatch(resetLoading());
        });
    } else if (activeStep === 2) {
      const formdata = new FormData();
      formdata.append("first_name", data.first_name);
      formdata.append("last_name", data.last_name);
      formdata.append("email", data.email);
      formdata.append("phone", data.phone);
      formdata.append("gender", data.gender);
      formdata.append("dob", data.dob);
      formdata.append("password", data.password);

      dispatch(register(formdata))
        .then((res) => {
          if (res.payload) {
            router.push("/login");
          }
        })
        .finally(() => {
          dispatch(resetLoading());
        });
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <FormProvider {...methods}>
      <Box sx={{ width: "100%", maxWidth: 600, margin: "auto", mt: 5 }}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{
            "& .MuiStepLabel-root .Mui-completed": {
              color: "#4caf50",
            },
            "& .MuiStepLabel-root .Mui-active": {
              color: "#A7BF00",
            },
            "& .MuiStepLabel-label": {
              color: "#666",
            },
            "& .MuiStepLabel-label.Mui-active": {
              fontWeight: "semibold",
              color: "black",
            },
            "& .MuiStepLabel-label.Mui-completed": {
              color: "#4caf50",
            },
            "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
              borderColor: "#1976d2",
            },
            "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
              borderColor: "#4caf50",
            },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box sx={{ mt: 3 }}>
            {activeStep === 0 && <BasicInformation />}
            {activeStep === 1 && <VerifyCode />}
            {activeStep === 2 && <PersonalInformation />}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {activeStep === 0 ? (
              <Button
                disabled={loading}
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  width: "200px",
                  height: "42px",
                  mt: 3,
                  backgroundColor: "#A7BF00", // btnColor background
                  color: "#fff", // btnColor text
                  borderRadius: "22px",
                  "&:hover": {
                    backgroundColor: "#e64444",
                  },
                }}
              >
                Tap To continue
              </Button>
            ) : (
              <Button
                disabled={loading}
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mt: 3,
                  backgroundColor: "#A7BF00", // btnColor background
                  color: "#fff", // btnColor text
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: "#e64444",
                  },
                }}
              >
                Tap To continue
              </Button>
            )}
          </Box>
        </form>
      </Box>
      {activeStep === 1 && <ResendEmailButton />}
      {activeStep > 0 && (
        <Button onClick={handleBack} sx={{ color: "black", marginTop: "20px" }}>
          Back
        </Button>
      )}
    </FormProvider>
  );
}
