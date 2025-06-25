"use client";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { logoutUser } from "@/store/auth/auth";
import { AppDispatch } from "@/store/store";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import { useContextApi } from "@/context/ContextApi";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import LogoutIcon from "@mui/icons-material/Logout";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CallIcon from "@mui/icons-material/Call";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface NavItem {
  label: string;
  path: string;
}

const Navbar: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const pathname = usePathname();
  const router = useRouter();
  const diapatch = useDispatch<AppDispatch>();
  const { toggele, setToggle } = useContextApi();
  const { user } = useSelector((state: RootState) => state.auth);

  const logout = () => {
    Cookies.remove("token", { path: "/" });
    diapatch(logoutUser());
    router.push("/login");
    setToggle(!toggele);
  };

  const styles: Record<string, React.CSSProperties | object> = {
    navbar: {
      padding: "15px 0",
      backgroundColor: `${
        pathname === "/" ||
        pathname.startsWith("/attendee/singelevent") ||
        pathname === "/login" ||
        pathname === "/signup" ||
        pathname === "/forgotpassword" ||
        pathname.startsWith("/forgotpasswordchange") ||
        pathname === "/organizer-login" ||
        pathname === "/organizer-signup" ||
        pathname === "/organizer-forgotpassword" ||
        pathname.startsWith("/organizer-forgotpasswordchange")
          ? "transparent"
          : "#2F3601"
      }`, // var(--text-color)
      position: `${
        pathname === "/" ||
        pathname.startsWith("/attendee/singelevent") ||
        pathname === "/login" ||
        pathname === "/signup" ||
        pathname === "/forgotpassword" ||
        pathname.startsWith("/forgotpasswordchange") ||
        pathname === "/organizer-login" ||
        pathname === "/organizer-signup" ||
        pathname === "/organizer-forgotpassword" ||
        pathname.startsWith("/organizer-forgotpasswordchange")
          ? "absolute"
          : "relative"
      }`,
      zIndex: 9,
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0 16px",
    },
    logo: {
      maxWidth: "150px",
    },
    navLinks: {
      display: "flex",
      gap: "30px",
      display: { xs: "none", md: "flex" },
      alignItems: "center",
    },
    navLink: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      fontFamily: "Inter, sans-serif",
    },
    btnBox: {
      display: { xs: "none", md: "flex" },
      gap: "10px",
    },
    btnLogin: {
      backgroundColor: "#a7bf00", // var(--primary-green)
      color: "#000",
      borderRadius: "20px",
      padding: "5px 30px",
      marginRight: "10px",
      transition: "all 0.3s ease", // Add transition for smooth effect
      "&:hover": {
        backgroundColor: "#a7bf00",
        borderColor: "#a7bf00",
        color: "#fff",
      },
    },
    btnSignup: {
      border: "2px solid #a7bf00",
      color: "#fff",
      borderRadius: "20px",
      padding: "5px 30px",

      transition: "all 0.3s ease", // Add transition for smooth effect
      "&:hover": {
        backgroundColor: "#a7bf00",
        color: "#000",
      },
    },
  };

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/attendee/aboutus" },
    { label: "Services", path: "/attendee/service" },
    { label: "Events", path: "/attendee/events" },
    { label: "Contact Us", path: "/attendee/contact" },
  ];

  return (
    <>
      {!pathname.startsWith("/organizers") && (
        <>
          <AppBar position="static" sx={styles.navbar}>
            <Toolbar sx={styles.toolbar}>
              <Link href="/" passHref>
                <Image
                  width={120}
                  height={0}
                  src="/Logo.png"
                  alt="Logo"
                  style={styles.logo}
                />
              </Link>

              <Box sx={styles.navLinks}>
                {navItems.map((item, i) => (
                  <Link key={i} href={item.path} passHref>
                    <Button
                      sx={{
                        ...styles.navLink,
                        borderBottom:
                          pathname === item.path ? "2px solid #fff" : "none",
                      }}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </Box>
              <Box sx={styles.btnBox}>
                {isAuthenticated && user?.role === "organizer" && (
                  <>
                    <Link href="/organizers">
                      <Button sx={styles.btnLogin}>Organizer Dashboard</Button>
                    </Link>
                    <Avatar>
                      {user && user?.company_name ? user?.company_name[0] : ""}
                    </Avatar>
                  </>
                )}
                {isAuthenticated && user?.role === "attendee" && (
                  <>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      {!pathname.startsWith("/attendee/account") && (
                        <Link href="/attendee/account">
                          <Button sx={styles.btnLogin}>Account</Button>
                        </Link>
                      )}
                      <Avatar>{user?.first_name[0]}</Avatar>
                    </Box>
                  </>
                )}

                {!isAuthenticated && (
                  <>
                    <Link href="/login">
                      <Button sx={styles.btnLogin}>Login</Button>
                    </Link>
                    <Link href="/signup">
                      <Button sx={styles.btnLogin}>Signup</Button>
                    </Link>
                  </>
                )}
              </Box>
              <Box
                sx={{
                  display: {
                    xl: "none",
                    lg: "none",
                    md: "none",
                    sm: "block",
                    xs: "block",
                  },
                  cursor: "pointer",
                }}
                onClick={() => setToggle(!toggele)}
              >
                <MenuIcon />
              </Box>
            </Toolbar>
          </AppBar>

          <Box
            sx={{
              display: {
                xl: "none",
                lg: "none",
                md: "none",
                sm: `${toggele ? "block" : "none"}`,
                xs: `${toggele ? "block" : "none"}`,
              },
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100vh",
              zIndex: "99",
            }}
            onClick={() => setToggle(false)}
          >
            <Box
              sx={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "70%",
                height: "100vh",
                backgroundColor: "#F6FFD7",
                zIndex: "99",
              }}
            >
              <Toolbar>
                <Box>
                  {!isAuthenticated && (
                    <>
                      <Link href={"/login"} onClick={() => setToggle(false)}>
                        <Button sx={styles.btnLogin}>Login</Button>
                      </Link>
                      <Link href="/signup" onClick={() => setToggle(false)}>
                        <Button sx={styles.btnLogin}>Signup</Button>
                      </Link>
                    </>
                  )}
                  {isAuthenticated && (
                    <>
                      <List component="nav" sx={{ mt: 4 }}>
                        <Link href={"/"} onClick={() => setToggle(!toggele)}>
                          <ListItemButton
                            sx={`${pathname === "/" ? "color:#62A305" : ""}`}
                          >
                            <ListItemIcon
                              sx={`${pathname === "/" ? "color:#62A305" : ""}`}
                            >
                              <HomeFilledIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                              primary="Home"
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: 500,
                              }}
                            />
                          </ListItemButton>
                        </Link>

                        <Link
                          href={"/attendee/aboutus"}
                          onClick={() => setToggle(!toggele)}
                        >
                          <ListItemButton
                            sx={`${
                              pathname === "/attendee/aboutus"
                                ? "color:#62A305"
                                : ""
                            }`}
                          >
                            <ListItemIcon
                              sx={`${
                                pathname === "/attendee/aboutus"
                                  ? "color:#62A305"
                                  : ""
                              }`}
                            >
                              <InfoIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                              primary="About Us"
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: 500,
                              }}
                            />
                          </ListItemButton>
                        </Link>

                        <Link
                          href={"/attendee/service"}
                          onClick={() => setToggle(!toggele)}
                        >
                          <ListItemButton
                            sx={`${
                              pathname === "/attendee/service"
                                ? "color:#62A305"
                                : ""
                            }`}
                          >
                            <ListItemIcon
                              sx={`${
                                pathname === "/attendee/service"
                                  ? "color:#62A305"
                                  : ""
                              }`}
                            >
                              <MiscellaneousServicesIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                              primary="Services"
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: 500,
                              }}
                            />
                          </ListItemButton>
                        </Link>

                        <Link
                          href={"/attendee/events"}
                          onClick={() => setToggle(!toggele)}
                        >
                          <ListItemButton
                            sx={`${pathname === "/attendee/events"}>"
                              ? "color:#62A305"
                              : ""
                          }`}
                          >
                            <ListItemIcon
                              sx={`${pathname === "/attendee/events"}>"
                                ? "color:#62A305"
                                : ""
                            }`}
                            >
                              <CalendarMonthIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                              primary="Events"
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: 500,
                              }}
                            />
                          </ListItemButton>
                        </Link>

                        <Link
                          href={"/attendee/contact"}
                          onClick={() => setToggle(!toggele)}
                        >
                          <ListItemButton
                            sx={`${pathname === "/attendee/contact"}>"}>"
                              ? "color:#62A305"
                              : ""
                          }`}
                          >
                            <ListItemIcon
                              sx={`${pathname === "/attendee/contact"}>"}>"
                                ? "color:#62A305"
                                : ""
                            }`}
                            >
                              <CallIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                              primary="Contact Us"
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: 500,
                              }}
                            />
                          </ListItemButton>
                        </Link>

                        <Link
                          href={`${
                            user?.role === "organizer"
                              ? "/organizers"
                              : "/attendee/account"
                          }`}
                          onClick={() => setToggle(!toggele)}
                        >
                          <ListItemButton
                            sx={`${pathname === "/attendee/account"}"}>"}>"
                              ? "color:#62A305"
                              : ""
                          }`}
                          >
                            <ListItemIcon
                              sx={`${pathname === "/attendee/account"}"}>"}>"
                                ? "color:#62A305"
                                : ""
                            }`}
                            >
                              <AccountCircleIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                              primary="Account"
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: 500,
                              }}
                            />
                          </ListItemButton>
                        </Link>

                        <ListItemButton onClick={logout}>
                          <ListItemIcon>
                            <LogoutIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText
                            primary="Log Out"
                            primaryTypographyProps={{
                              fontSize: 14,
                              fontWeight: 600,
                            }}
                          />
                        </ListItemButton>
                      </List>
                    </>
                  )}
                </Box>
              </Toolbar>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Navbar;
