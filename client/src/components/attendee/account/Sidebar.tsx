"use client";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { logoutUser } from "@/store/auth/auth";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { useContextApi } from "@/context/ContextApi";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
const Sidebar = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const [openSettingsTwo, setOpenSettingsTwo] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();
  const { toggele, setToggle } = useContextApi();
  const handleSettingsClick = () => {
    setOpenSettings(!openSettings);
  };

  const handleSettingsClickTwo = () => {
    setOpenSettingsTwo(!openSettingsTwo);
  };
  const logout = (): void => {
    Cookies.remove("token", { path: "/" });
    dispatch(logoutUser());
    router.push("/login");
    setToggle(!toggele);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          bgcolor: "#f6ffd7",
          paddingTop: 2,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <List component="nav">
          <Link href={"/attendee/account"} onClick={() => setToggle(!toggele)}>
            <ListItemButton
              sx={`${pathname === "/attendee/account" ? "color:#62A305" : ""}`}
            >
              <ListItemIcon
                sx={`${
                  pathname === "/attendee/account" ? "color:#62A305" : ""
                }`}
              >
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
              />
            </ListItemButton>
          </Link>

          <ListItemButton onClick={handleSettingsClickTwo}>
            <ListItemIcon>
              <HistoryIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Booking History"
              primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
            />
            {openSettingsTwo ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openSettingsTwo} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              <Link
                href={"/attendee/account/confirm-ticket"}
                onClick={() => setToggle(!toggele)}
              >
                <ListItemButton
                  sx={`${
                    pathname === "/attendee/account/confirm-ticket"
                      ? "color:#62A305"
                      : ""
                  }`}
                >
                  <ListItemIcon
                    sx={`${
                      pathname === "/attendee/account/confirm-ticket"
                        ? "color:#62A305"
                        : ""
                    }`}
                  >
                    <LocalActivityIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Confirm Ticket"
                    primaryTypographyProps={{ fontSize: 13 }}
                  />
                </ListItemButton>
              </Link>

              <Link
                href={"/attendee/account/cancel-ticket"}
                onClick={() => setToggle(!toggele)}
              >
                <ListItemButton
                  sx={`${
                    pathname === "/attendee/account/cancel-ticket"
                      ? "color:#62A305"
                      : ""
                  }`}
                >
                  <ListItemIcon
                    sx={`${
                      pathname === "/attendee/account/cancel-ticket"
                        ? "color:#62A305"
                        : ""
                    }`}
                  >
                    <LocalActivityIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Cancel Ticket"
                    primaryTypographyProps={{ fontSize: 13 }}
                  />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton onClick={handleSettingsClick}>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Account Settings"
              primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
            />
            {openSettings ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openSettings} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              <Link
                href={"/attendee/account/profile"}
                onClick={() => setToggle(!toggele)}
              >
                <ListItemButton
                  sx={`${
                    pathname === "/attendee/account/profile"
                      ? "color:#62A305"
                      : ""
                  }`}
                >
                  <ListItemIcon
                    sx={`${
                      pathname === "/attendee/account/profile"
                        ? "color:#62A305"
                        : ""
                    }`}
                  >
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Profile"
                    primaryTypographyProps={{ fontSize: 13 }}
                  />
                </ListItemButton>
              </Link>

              <Link
                href={"/attendee/account/change-password"}
                onClick={() => setToggle(!toggele)}
              >
                <ListItemButton
                  sx={`${
                    pathname === "/attendee/account/change-password"
                      ? "color:#62A305"
                      : ""
                  }`}
                >
                  <ListItemIcon
                    sx={`${
                      pathname === "/attendee/account/change-password"
                        ? "color:#62A305"
                        : ""
                    }`}
                  >
                    <EnhancedEncryptionIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Change Password"
                    primaryTypographyProps={{ fontSize: 13 }}
                  />
                </ListItemButton>
              </Link>

              <Link
                href={"/attendee/account/delete-account"}
                onClick={() => setToggle(!toggele)}
              >
                <ListItemButton
                  sx={`${
                    pathname === "/attendee/account/delete-account"
                      ? "color:#62A305"
                      : ""
                  }`}
                >
                  <ListItemIcon
                    sx={`${
                      pathname === "/attendee/account/delete-account"
                        ? "color:#62A305"
                        : ""
                    }`}
                  >
                    <DeleteIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Delete Account"
                    primaryTypographyProps={{ fontSize: 13 }}
                  />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton onClick={logout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Log Out"
              primaryTypographyProps={{ fontSize: 14, fontWeight: 600 }}
            />
          </ListItemButton>
        </List>
      </Box>
    </>
  );
};

export default Sidebar;
