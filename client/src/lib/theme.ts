import { ThemeOptions } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark"): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#1976d2" },
          background: { default: "#fff" },
        }
      : {
          primary: { main: "#90caf9" },
          background: { default: "#0F1214" },
          text: { primary: "#fff" },
        }),
  },
});
