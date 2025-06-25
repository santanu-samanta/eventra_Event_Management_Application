"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import Image from "next/image";
import CardEvent from "./CardEvent";
import ExperienceCard from "./ExperienceCard";
import { useGetallEvent } from "@/hooks/react-query/query-hooks/organizerHooks";

// Helper function to remove duplicates
const removeDuplicates = (array: string[]) => [...new Set(array)];

const Wrapper = () => {
  const { data } = useGetallEvent();

  const [cut, setCut] = useState(12);

  const filterDeletedEvents = data?.filter((event) => !event.isDeleted);
  
  const categories = removeDuplicates(
    Array.isArray(data) ? data.map((event) => event.category) : []
  );
  const cities = removeDuplicates(
    Array.isArray(data) ? data.map((event) => event.location.city) : []
  );
  const artistRoles = removeDuplicates(
    Array.isArray(data) ? data.map((event) => event.artistrole) : []
  );

  // State to manage selected filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedArtistRoles, setSelectedArtistRoles] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  // Handle checkbox changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleCityChange = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city)
        ? prev.filter((item) => item !== city)
        : [...prev, city]
    );
  };

  const handleArtistRoleChange = (role: string) => {
    setSelectedArtistRoles((prev) =>
      prev.includes(role)
        ? prev.filter((item) => item !== role)
        : [...prev, role]
    );
  };

  // Filter events based on selected filters
  const filteredEvents = Array.isArray(filterDeletedEvents)
    ? filterDeletedEvents.filter((event) => {
        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(event.category);
        const matchesCity =
          selectedCities.length === 0 ||
          selectedCities.includes(event.location.city);
        const matchesArtistRole =
          selectedArtistRoles.length === 0 ||
          selectedArtistRoles.includes(event.artistrole);

        // Search filter (case-insensitive, checks multiple fields)
        const search = searchValue.trim().toLowerCase();
        const matchesSearch =
          !search ||
          event.event_name?.toLowerCase().includes(search) ||
          event.category?.toLowerCase().includes(search) ||
          event.location.city?.toLowerCase().includes(search) ||
          event.artistrole?.toLowerCase().includes(search);

        return (
          matchesCategory && matchesCity && matchesArtistRole && matchesSearch
        );
      })
    : [];

  return (
    <>
      <Box
        sx={{
          position: "relative",
          padding: "50px 0",
          background:
            "linear-gradient(to right, rgba(245, 255, 175, 0.25), rgba(250, 255, 218, 0.5))",
          backgroundRepeat: "no-repeat",
          boxShadow: 3,
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Container sx={{ position: "relative" }}>
          {/* Decorative swirl image on left */}
          <span
            style={{
              position: "absolute",
              top: "20%",
              left: 0,
              zIndex: 0,
            }}
          >
            <Image
              width={500}
              height={500}
              src="/leftElement.png"
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </span>

          <Grid
            container
            alignItems="center"
            justifyContent={"center"}
            spacing={2}
            sx={{ position: "relative", zIndex: 1 }}
          >
            {/* Text Column */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "#1d1d1d",
                }}
              >
                Events
              </Typography>
            </Grid>

            {/* Image Layout */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                height: "320px",
              }}
            >
              {/* Left stacked images */}
              <Box
                sx={{
                  display: {
                    xl: "block",
                    lg: "block",
                    md: "none",
                    sm: "none",
                    xs: "none",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  {/* Top image (img3) */}
                  <Box
                    sx={{
                      width: "300px",
                      height: "170px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <Image
                      src="/firstpic.png"
                      width={500}
                      height={500}
                      alt="Top Left"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  {/* Bottom image (img4) — made thinner and smaller, adjusted marginLeft */}
                  <Box
                    sx={{
                      width: "220px",
                      height: "65px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      position: "relative",
                      zIndex: 1,
                      marginLeft: "5px", // Reduced marginLeft to move it left
                    }}
                  >
                    <Image
                      src="/thirdpic.png"
                      width={500}
                      height={500}
                      alt="Bottom Left"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Box>

                {/* Overlapping image (img5) */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "135px",
                    left: "230px",
                    width: "220px",
                    height: "110px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: 3,
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/secondpic.png"
                    width={500}
                    height={500}
                    alt="Overlay"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          width: { xl: "85%", lg: "85%", md: "100%", sm: "100%", xs: "100%" },
          margin: "0 auto",
          px: { xl: 0, lg: 0, md: 2, sm: 2, xs: 2 },
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: {
                xl: "40px",
                lg: "40px",
                md: "30px",
                sm: "30px",
                xs: "20px",
              },
              mt: { xl: 6, lg: 6, md: 4, sm: 4, xs: 2 },
            }}
          >
            Have a look at our upcoming <br /> events
          </Typography>
          <Typography sx={{ textAlign: "center", mt: 2 }}>
            Explore what’s on the horizon with Eventra. From elegant corporate{" "}
            <br />
            gatherings to unforgettable celebrations, there’s always something{" "}
            <br />
            exceptional in the works
          </Typography>
        </Box>{" "}
        <Box
          sx={{ display: "flex", justifyContent: "end", mt: 6, width: "100%" }}
        >
          <Input
            type="search"
            placeholder="Search for events"
            sx={{
              width: "20%",
              backgroundColor: "#FAFFD4",
              border: "1px solid #333A02",
              px: 2,
              color: "black",
            }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: {
              xl: "nowrap",
              lg: "nowrap",
              md: "wrap",
              sm: "wrap",
              xs: "wrap",
            },
            width: "100%",
            gap: 3,
            mt: 6,
          }}
        >
          <Box
            className="sidebar"
            sx={{
              backgroundColor: "#FAFFD4",
              padding: "20px",
              width: {
                xl: "200px",
                lg: "200px",
                md: "100%",
                sm: "100%",
                xs: "100%",
              },
              maxWidth: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#333a02",
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                fontSize: "20px",
                mb: 2,
              }}
            >
              Filters
            </Typography>

            {/* Categories */}
            <Typography
              sx={{
                color: "#333a02",
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                margin: "10px 0 5px",
              }}
            >
              Categories
            </Typography>
            {categories?.map((label, index) => (
              <FormControlLabel
                key={`category-${index}`} // Added a unique key
                control={
                  <Checkbox
                    sx={{ color: "#333a02" }}
                    checked={selectedCategories.includes(label)}
                    onChange={() => handleCategoryChange(label)}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      color: "#333a02",
                    }}
                  >
                    {label}
                  </Typography>
                }
              />
            ))}

            {/* Locations */}
            <Typography
              sx={{
                color: "#333a02",
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                margin: "10px 0 5px",
              }}
            >
              Locations
            </Typography>
            {cities.map((label, index) => (
              <FormControlLabel
                key={`city-${index}`} // Added a unique key
                control={
                  <Checkbox
                    sx={{ color: "#333a02" }}
                    checked={selectedCities.includes(label)}
                    onChange={() => handleCityChange(label)}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      color: "#333a02",
                    }}
                  >
                    {label}
                  </Typography>
                }
              />
            ))}

            {/* Artist Role */}
            <Typography
              sx={{
                color: "#333a02",
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                margin: "10px 0 5px",
              }}
            >
              Artist Role
            </Typography>
            {artistRoles.map((label, index) => (
              <FormControlLabel
                key={`artistRole-${index}`} // Added a unique key
                control={
                  <Checkbox
                    sx={{ color: "#333a02" }}
                    checked={selectedArtistRoles.includes(label)}
                    onChange={() => handleArtistRoleChange(label)}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      color: "#333a02",
                    }}
                  >
                    {label}
                  </Typography>
                }
              />
            ))}
          </Box>
          <Box
            sx={{
              width: {
                xl: "86%",
                lg: "86%",
                md: "100%",
                sm: "100%",
                xs: "100%",
              },
            }}
          >
            <Grid container spacing={6} width={"100%"}>
              {[...filteredEvents]
                ?.reverse()
                .slice(0, cut)
                ?.map((event) => (
                  <CardEvent key={event._id} event={event} />
                ))}
            </Grid>
            {filteredEvents && filteredEvents?.length >= cut && (
              <Box
                sx={{ mt: 4, textAlign: "center" }}
                onClick={() => setCut(cut + 3)}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#c6e83f",
                    color: "#000",
                    borderRadius: 5,
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "#bde030",
                    },
                  }}
                >
                  Show More
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: {
                xl: "40px",
                lg: "40px",
                md: "30px",
                sm: "30px",
                xs: "20px",
              },
              mt: { xl: 8, lg: 8, md: 6, sm: 6, xs: 6 },
            }}
          >
            Experience Excellence — <br /> Present Events
          </Typography>
          <Typography sx={{ textAlign: "center", mt: 2 }}>
            Explore what’s on the horizon with Eventra. From elegant corporate{" "}
            <br />
            gatherings to unforgettable celebrations, there’s always something{" "}
            <br />
            exceptional in the works
          </Typography>
        </Box>{" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            mb: 8,
          }}
        >
          {Array.isArray(data) &&
            [...filteredEvents]
              ?.reverse()
              ?.slice(0, 3)
              ?.map((event) => (
                <ExperienceCard key={event._id} event={event} />
              ))}
        </Box>
      </Box>
    </>
  );
};

export default Wrapper;
