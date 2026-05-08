"use client";

import Button from "@mui/material/Button";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

export default function ResumeButton() {
  return (
    <Button
      variant="contained"
      endIcon={<DownloadOutlinedIcon />}
      sx={{
        px: 3,
        py: 1.8,
        borderRadius: "10px",
        textTransform: "none",
        fontWeight: 600,
        backgroundColor: "#19d3c5",
        color: "#06222a",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#12c7bb",
          boxShadow: "none",
        },
      }}
    >
      Download Resume
    </Button>
  );
}
