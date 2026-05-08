import { createTheme } from "@mui/material/styles";

export function getMuiTheme(mode: "light" | "dark") {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? "#2f81f7" : "#0969da",
      },
      background: {
        default: isDark ? "#0d1117" : "#f6f8fa",
        paper: isDark ? "#161b22" : "#ffffff",
      },
      text: {
        primary: isDark ? "#f0f6fc" : "#24292f",
        secondary: isDark ? "#8b949e" : "#57606a",
      },
      divider: isDark ? "#30363d" : "#d0d7de",
    },

    shape: {
      borderRadius: 8,
    },

    typography: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 600,
      },
    },

    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "6px",
            fontWeight: 600,
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            border: `1px solid ${isDark ? "#30363d" : "#d0d7de"}`,
            boxShadow: "none",
            backgroundImage: "none",
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: "999px",
          },
        },
      },
    },
  });
}
