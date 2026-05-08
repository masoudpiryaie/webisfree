"use client";

import Button from "@mui/material/Button";
import { useThemeMode } from "@/providers/AppProviders";

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Button
      variant="outlined"
      size="small"
      onClick={toggleTheme}
      sx={{
        minWidth: 90,
      }}
    >
      {mode === "dark" ? "Light" : "Dark"}
    </Button>
  );
}
