"use client";

import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { otpsendforresendemail, resetresendloading } from "@/store/auth/auth";
import toast from "react-hot-toast";

const ResendEmailButton = () => {
  const [timer, setTimer] = useState(120);
  const [isDisabled, setIsDisabled] = useState(true);
  const { email } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsDisabled(false);
    }

    return () => clearInterval(interval);
  }, [timer, isDisabled]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleResend = () => {
    if (!email || email.trim() === "") {
      toast.error("Email is null, undefined, or empty. Cannot resend OTP.");
      return;
    }

    const emailData = {
      email: email as string,
    };

    dispatch(otpsendforresendemail(emailData))
      .then((res) => {
        if (res.payload) {
          setIsDisabled(true);
          setTimer(120); // Reset timer to 2 minutes
        }
      })
      .finally(() => {
        dispatch(resetresendloading());
      });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <h4>Didn’t received yet ?</h4>
        {isDisabled ? (
          <Button sx={{ color: "black" }}>
            {`Resend it in ${formatTime(timer)}`}
          </Button>
        ) : (
          <Button
            onClick={handleResend}
            disabled={isDisabled}
            sx={{ color: "black" }}
          >
            Resend Email
          </Button>
        )}
      </Box>
    </>
  );
};

export default ResendEmailButton;
