"use client";

import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { useContextApi } from "@/context/ContextApi";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Navbar = () => {
  const { toggele, setToggle } = useContextApi();
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Box
        component="nav"
        sx={{
          backgroundColor: "#2f3601",
          py: 2,
          px: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 100,
          position: "relative",
        }}
      >
        {/* Display the logo */}
        <Link href={"/"}>
          <Image
            src="/Logo.png" // Path to the logo in the public directory
            alt="Logo"
            width={120} // Set the width of the logo
            height={40} // Set the height of the logo
          />
        </Link>

        <div className="flex gap-4 items-center">
          <div
            className="2xl:hidden xl:hidden lg:hidden md:block block"
            onClick={() => setToggle(!toggele)}
          >
            <MenuIcon
              fontSize="small"
              sx={{ color: "white", cursor: "pointer" }}
            />
          </div>
          <div>
            <Stack direction="row" spacing={2}>
              <Avatar>{user?.company_name.charAt(0)}</Avatar>
            </Stack>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Navbar;
