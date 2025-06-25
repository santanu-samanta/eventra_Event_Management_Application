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
const Sidebar = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();
  const { toggele, setToggle } = useContextApi();
  const handleSettingsClick = () => {
    setOpenSettings(!openSettings);
  };

  const logout = (): void => {
    Cookies.remove("token", { path: "/" });
    dispatch(logoutUser());
    router.push("/organizer-login");
    setToggle(!toggele);
  };

  return (
    <div className="w-full h-full">
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
          <Link href={"/organizers"} onClick={() => setToggle(!toggele)}>
            <ListItemButton
              sx={`${pathname === "/organizers" ? "color:#62A305" : ""}`}
            >
              <ListItemIcon
                sx={`${pathname === "/organizers" ? "color:#62A305" : ""}`}
              >
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
              />
            </ListItemButton>
          </Link>

          <Link
            href={"/organizers/organizer-history"}
            onClick={() => setToggle(!toggele)}
          >
            <ListItemButton
              sx={`${
                pathname === "/organizers/organizer-history"
                  ? "color:#62A305"
                  : ""
              }`}
            >
              <ListItemIcon
                sx={`${
                  pathname === "/organizers/organizer-history"
                    ? "color:#62A305"
                    : ""
                }`}
              >
                <HistoryIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Events History"
                primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
              />
            </ListItemButton>
          </Link>

          <Link
            href={"/organizers/all-book-tickets"}
            onClick={() => setToggle(!toggele)}
          >
            <ListItemButton
              sx={`${
                pathname === "/organizers/all-book-tickets"
                  ? "color:#62A305"
                  : ""
              }`}
            >
              <ListItemIcon
                sx={`${
                  pathname === "/organizers/all-book-tickets"
                    ? "color:#62A305"
                    : ""
                }`}
              >
                <HistoryIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="All Booked Tickets"
                primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
              />
            </ListItemButton>
          </Link>

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
                href={"/organizers/organizer-profile"}
                onClick={() => setToggle(!toggele)}
              >
                <ListItemButton
                  sx={`${
                    pathname === "/organizers/organizer-profile"
                      ? "color:#62A305"
                      : ""
                  }`}
                >
                  <ListItemIcon
                    sx={`${
                      pathname === "/organizers/organizer-profile"
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
                href={"/organizers/organizer-delete-account"}
                onClick={() => setToggle(!toggele)}
              >
                <ListItemButton
                  sx={`${
                    pathname === "/organizers/organizer-delete-account"
                      ? "color:#62A305"
                      : ""
                  }`}
                >
                  <ListItemIcon
                    sx={`${
                      pathname === "/organizers/organizer-delete-account"
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
    </div>
  );
};

export default Sidebar;
