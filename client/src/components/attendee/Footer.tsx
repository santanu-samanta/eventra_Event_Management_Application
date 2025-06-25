"use client";

import { Box, Button, Grid, InputBase, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Footer = () => {
  const pathname = usePathname();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  return (
    <>
      {!pathname.startsWith("/organizers") &&
        !pathname.startsWith("/attendee/account") && (
          <>
            <Box
              sx={{
                backgroundColor: "#2f3601",
                pt: 5,
                pb: 3,
                color: "white",
                position: "relative",
                zIndex: 200,
              }}
            >
              <Grid
                container
                spacing={4}
                justifyContent={"space-between"}
                sx={{ padding: "24px" }}
              >
                {/* Logo & Subscription */}
                <Grid item md={3} xs={12}>
                  <Image src="/Logo.png" alt="Logo" width={120} height={40} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      fontFamily: "Inter, sans-serif",
                      mt: 1,
                    }}
                  >
                    Expert Execution | On-Time Delivery | Tailored for every
                    event
                  </Typography>
                  <Box mt={2} display="flex">
                    <InputBase
                      placeholder="Enter your email"
                      sx={{
                        borderRadius: "50px 0 0 50px",
                        paddingLeft: 2,
                        flex: 1,
                        maxWidth: "200px",
                        fontSize: "15px",
                        fontFamily: "Inter, sans-serif",
                        backgroundColor: "white",
                        color: "black",
                      }}
                    />
                    <Button
                      sx={{
                        borderRadius: "0 50px 50px 0",
                        backgroundColor: "#dfff00",
                        color: "black",
                        fontWeight: 600,
                        textTransform: "none",
                        px: 3,
                      }}
                    >
                      Subscribe
                    </Button>
                  </Box>
                </Grid>

                {/* Office Info */}
                <Grid item md={3} xs={12}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "18px",
                      fontWeight: 600,
                      fontFamily: "Poppins, sans-serif",
                      pb: 2,
                    }}
                  >
                    Office
                  </Typography>
                  {[
                    "Eventra Solutions Pvt. Ltd.",
                    "Ground Floor, Block B,",
                    "Techno Tower,",
                    "Salt Lake Sector V,",
                    "Kolkata - 700091,",
                    "West Bengal, India",
                  ].map((line, i) => (
                    <Typography
                      key={i}
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        fontFamily: "Inter, sans-serif",
                        pb: 1,
                      }}
                    >
                      {line}
                    </Typography>
                  ))}
                </Grid>

                {/* Navigation Links */}
                <Grid item md={3} xs={12}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "18px",
                      fontWeight: 600,
                      fontFamily: "Poppins, sans-serif",
                      pb: 2,
                    }}
                  >
                    Links
                  </Typography>
                  {[
                    "Home",
                    "About",
                    "Services",
                    "Events",
                    "Contact Us",
                    `${isAuthenticated ? "My Account" : "Become an Organizer"}`,
                  ].map((link, i) => (
                    <Typography
                      key={i}
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        fontFamily: "Inter, sans-serif",
                        pb: 1,
                      }}
                    >
                      <Link
                        href={
                          link === "Home"
                            ? "/"
                            : link === "Contact Us"
                            ? "/attendee/contact"
                            : link === "About"
                            ? "/attendee/aboutus"
                            : link === "Services"
                            ? "/attendee/service"
                            : link === "Events"
                            ? "/attendee/events"
                            : link === "Become an Organizer"
                            ? "/organizer-login"
                            : link === "My Account" && user?.role === "attendee"
                            ? "/attendee/account"
                            : link === "My Account" &&
                              user?.role === "organizer"
                            ? "/organizers"
                            : ""
                        }
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        {link}
                      </Link>
                    </Typography>
                  ))}
                </Grid>

                {/* Contact & Social Icons */}
                <Grid item md={3} xs={12}>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: 400,
                      fontFamily: "Inter, sans-serif",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      width={20}
                      height={20}
                      src="/mail.png"
                      alt="Mail"
                      style={{ marginRight: 8 }}
                    />
                    eventra2020@gmail.com
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: 400,
                      fontFamily: "Inter, sans-serif",
                      mt: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      width={20}
                      height={20}
                      src="/whatsaap.png"
                      alt="Phone"
                      style={{ marginRight: 8 }}
                    />
                    +91-2348229864
                  </Typography>
                  <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                    {[
                      { platform: "facebook", src: "/facebook.png" },
                      { platform: "insta", src: "/insta.png" },
                      { platform: "youtube", src: "/youtube.png" },
                      { platform: "twitter", src: "/twitter.png" },
                    ].map(({ platform, src }, i) => (
                      <a key={i} href="#" style={{ display: "inline-block" }}>
                        <Image
                          width={30}
                          height={30}
                          src={src}
                          alt={platform}
                        />
                      </a>
                    ))}
                  </Box>
                </Grid>
              </Grid>

              {/* Bottom Section */}
              <Box sx={{ textAlign: "center", mt: 4, pt: 3 }}>
                <hr />
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 400,
                    fontFamily: "Inter, sans-serif",
                    pt: 2,
                  }}
                >
                  &copy; 2025 Eventra. All rights reserved.
                </Typography>
              </Box>
            </Box>
          </>
        )}
    </>
  );
};

export default Footer;
