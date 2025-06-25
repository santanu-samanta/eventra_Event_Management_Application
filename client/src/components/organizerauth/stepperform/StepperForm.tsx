"use client";

import React, { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Stepper, Step, StepLabel, Box, Button, Avatar } from "@mui/material";
import BasicInformation from "@/components/organizerauth/stepperform/BasicInformation";
import VerifyCode from "@/components/organizerauth/stepperform/VerifyCode";
import PersonalInformation from "@/components/organizerauth/stepperform/PersonalInformation";
import { AuthFormValues } from "@/types";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  organizerotpsend,
  organizerotpverify,
  organizerregister,
  resetLoading,
  setEmail,
} from "@/store/auth/auth";
import { useRouter } from "next/navigation";
import ResendEmailButton from "@/components/organizerauth/ResendEmailButton";
import { useContextApi } from "@/context/ContextApi";

const steps = ["Basic Information", "Verify Code", "Personal Information"];

export default function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm<AuthFormValues>({ mode: "onBlur" });
  const { loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { picture } = useContextApi();
  const onSubmit: SubmitHandler<AuthFormValues> = (data) => {
    // if (activeStep === steps.length - 1) {

    // }

    if (activeStep === 0) {
      const emailData = {
        email: data.email,
      };

      dispatch(organizerotpsend(emailData))
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
      dispatch(organizerotpverify(emailData))
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
      formdata.append("company_name", data.company_name);
      formdata.append("email", data.email);
      formdata.append("phone", data.phone);
      formdata.append("password", data.password);
      if (data.image) {
        formdata.append("image", data.image);
      }

      dispatch(organizerregister(formdata))
        .then((res) => {
          if (res.payload) {
            router.push("/organizer-login");
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
    <>
      {activeStep === 2 && (
        <>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              src={picture || "https://image.pngaaa.com/41/3762041-middle.png"} // Default avatar if no image is selected
              sx={{ width: 100, height: 100, mb: 2 }}
            />
          </Box>
        </>
      )}
      <FormProvider {...methods}>
        <Box sx={{ width: "100%", maxWidth: 600, margin: "auto", mt: 2 }}>
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
          <Button
            onClick={handleBack}
            sx={{ color: "black", marginTop: "20px" }}
          >
            Back
          </Button>
        )}
      </FormProvider>
    </>
  );
}
