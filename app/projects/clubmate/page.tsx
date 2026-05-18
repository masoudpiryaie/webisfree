"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CloseIcon from "@mui/icons-material/Close";

const howItWorks = [
  {
    id: 1,
    title: "Find Events",
    description: "Explore the best club events in your city and beyond.",
    icon: <CalendarMonthOutlinedIcon sx={{ fontSize: { xs: 30, md: 38 } }} />,
  },
  {
    id: 2,
    title: "Discover People",
    description: "Swipe through clubbers who are going to the same event.",
    icon: <Groups2OutlinedIcon sx={{ fontSize: { xs: 30, md: 38 } }} />,
  },
  {
    id: 3,
    title: "Send Ticket Offers",
    description: "Send a ticket offer and get accepted to go together.",
    icon: (
      <ConfirmationNumberOutlinedIcon sx={{ fontSize: { xs: 30, md: 38 } }} />
    ),
  },
  {
    id: 4,
    title: "Chat & Meet",
    description: "Chat, get hyped and meet at the club. The night is yours.",
    icon: (
      <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: { xs: 30, md: 38 } }} />
    ),
  },
];

const clubLogos = [
  "Sisyphos",
  "://about blank",
  "Berghain",
  "Kater Blau",
  "Watergate",
  "Ritter Butzke",
];

const features = [
  {
    title: "Ticket Offers",
    description: "Offer to buy a ticket. If they accept, you party together.",
    icon: <LocalActivityOutlinedIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: "Verified Club Events",
    description: "All events are verified. No fakes, only real parties.",
    icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: "Safe & Private",
    description: "Your safety is our priority. We never share your data.",
    icon: <ShieldOutlinedIcon sx={{ fontSize: 24 }} />,
  },
];

function StoreButtons() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1.5}
      sx={{
        width: { xs: "100%", sm: "auto" },
      }}
    >
      <Button
        variant="outlined"
        startIcon={<AndroidIcon />}
        sx={{
          color: "#fff",
          borderColor: "rgba(255,255,255,0.2)",
          px: 2.25,
          py: 1.15,
          borderRadius: "12px",
          justifyContent: "flex-start",
          backgroundColor: "rgba(255,255,255,0.02)",
          width: { xs: "100%", sm: "auto" },
          minHeight: 58,
          "&:hover": {
            borderColor: "#8b5cf6",
            backgroundColor: "rgba(139,92,246,0.08)",
          },
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography sx={{ fontSize: 10, lineHeight: 1.2 }}>
            GET IT ON
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 700, lineHeight: 1.2 }}>
            Google Play
          </Typography>
        </Box>
      </Button>

      <Button
        variant="outlined"
        startIcon={<AppleIcon />}
        sx={{
          color: "#fff",
          borderColor: "rgba(255,255,255,0.2)",
          px: 2.25,
          py: 1.15,
          borderRadius: "12px",
          justifyContent: "flex-start",
          backgroundColor: "rgba(255,255,255,0.02)",
          width: { xs: "100%", sm: "auto" },
          minHeight: 58,
          "&:hover": {
            borderColor: "#8b5cf6",
            backgroundColor: "rgba(139,92,246,0.08)",
          },
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography sx={{ fontSize: 10, lineHeight: 1.2 }}>
            Download on the
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 700, lineHeight: 1.2 }}>
            App Store
          </Typography>
        </Box>
      </Button>
    </Stack>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 4.5, md: 8 } }}>
      <Typography
        sx={{
          color: "#a855f7",
          fontWeight: 700,
          fontSize: { xs: 12, md: 14 },
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          mb: 1.5,
        }}
      >
        {eyebrow}
      </Typography>

      <Typography
        sx={{
          color: "#fff",
          fontWeight: 800,
          fontSize: { xs: 30, sm: 38, md: 48 },
          lineHeight: 1.15,
          letterSpacing: "-0.035em",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default function ClubmatePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(147,51,234,0.25), transparent 30%), radial-gradient(circle at top right, rgba(59,130,246,0.16), transparent 25%), #05060a",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      {/* NAVBAR */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "rgba(5,6,10,0.78)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 66, md: 84 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, md: 1.5 },
                flexGrow: 1,
                minWidth: 0,
              }}
            >
              <Box
                sx={{
                  width: { xs: 36, md: 42 },
                  height: { xs: 36, md: 42 },
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #ff3131 0%, #ff0033 100%)",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 900,
                  fontSize: { xs: 20, md: 24 },
                  color: "#111",
                  flexShrink: 0,
                }}
              >
                C
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: 23, md: 28 },
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  whiteSpace: "nowrap",
                }}
              >
                clubmate
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                gap: 4,
                mr: 4,
              }}
            >
              {["Features", "How it works", "For clubs", "Safety"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    style={{
                      color: "#e5e7eb",
                      textDecoration: "none",
                      fontWeight: 500,
                      fontSize: "16px",
                    }}
                  >
                    {item}
                  </Link>
                ),
              )}
            </Box>

            <Button
              variant="contained"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                borderRadius: "14px",
                px: { sm: 2.5, md: 3.5 },
                py: { sm: 1.1, md: 1.4 },
                fontWeight: 700,
                textTransform: "none",
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                boxShadow: "0 10px 30px rgba(168,85,247,0.28)",
                "&:hover": {
                  background: "linear-gradient(135deg, #6d28d9, #9333ea)",
                },
              }}
            >
              Download App
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "calc(100svh - 66px)", md: "100vh" },
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: { xs: "flex-end", md: "center" },
        }}
      >
        <Image
          src="/images/clubmate/hero-phones.png"
          alt="Clubmate app background"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: {
              xs: "linear-gradient(to bottom, rgba(5,6,10,0.25) 0%, rgba(5,6,10,0.75) 42%, rgba(5,6,10,0.96) 100%)",
              md: "linear-gradient(90deg, rgba(5,6,10,0.95) 0%, rgba(5,6,10,0.78) 35%, rgba(5,6,10,0.25) 70%, rgba(5,6,10,0.65) 100%)",
            },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background:
              "radial-gradient(circle at 20% 45%, rgba(168,85,247,0.28), transparent 34%)",
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 3,
            px: { xs: 2, sm: 3, md: 4 },
            pt: { xs: 10, md: 12 },
            pb: { xs: 5.5, sm: 7, md: 10 },
          }}
        >
          <Box sx={{ maxWidth: { xs: "100%", md: 650 } }}>
            <Typography
              sx={{
                color: "#d946ef",
                fontWeight: 800,
                fontSize: { xs: 12, sm: 14, md: 16 },
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                mb: { xs: 2, md: 3 },
              }}
            >
              Dating. Clubbing. Connected.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 39, sm: 54, md: 84 },
                fontWeight: 900,
                lineHeight: { xs: 1.04, md: 1.02 },
                letterSpacing: "-0.055em",
                mb: { xs: 2, md: 3 },
                color: "#fff",
              }}
            >
              Find your
              <br />
              club partner
              <br />
              <Box component="span" sx={{ color: "#b026ff" }}>
                before the night
                <br />
                begins.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.76)",
                fontSize: { xs: 16, sm: 18, md: 22 },
                lineHeight: { xs: 1.55, md: 1.7 },
                maxWidth: 560,
                mb: { xs: 3, md: 5 },
              }}
            >
              Discover club events, meet like-minded people, send ticket offers
              and party together.
            </Typography>

            <StoreButtons />

            <Typography
              sx={{
                display: { xs: "none", md: "block" },
                color: "rgba(255,255,255,0.6)",
                mt: 5,
                fontSize: 15,
              }}
            >
              ↓ Scroll to explore
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* CLUB LOGOS */}
      <Box
        sx={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          py: { xs: 3, md: 4 },
          background: "rgba(255,255,255,0.01)",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: "center",
              gap: { xs: 2, md: 3 },
              textAlign: "center",
            }}
          >
            {clubLogos.map((logo) => (
              <Typography
                key={logo}
                sx={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: { xs: 18, sm: 22, md: 34 },
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                {logo}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>

      {/* HOW IT WORKS */}
      <Box
        sx={{
          py: { xs: 7, md: 16 },
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <SectionTitle
            eyebrow="How it works"
            title="From match to the dancefloor."
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
              gap: 0,
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: { xs: "24px", md: 0 },
              overflow: "hidden",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            {howItWorks.map((item, index) => (
              <Box
                key={item.id}
                sx={{
                  px: { xs: 2.5, sm: 3, md: 4 },
                  py: { xs: 3.5, md: 5 },
                  borderRight:
                    index !== howItWorks.length - 1
                      ? {
                          xs: "none",
                          md: "1px solid rgba(255,255,255,0.06)",
                        }
                      : "none",
                  borderBottom: {
                    xs:
                      index !== howItWorks.length - 1
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                    md: "none",
                  },
                }}
              >
                <Box sx={{ color: "#b026ff", mb: { xs: 2, md: 3 } }}>
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: 22, md: 28 },
                    fontWeight: 800,
                    mb: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item.id}. {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.68)",
                    fontSize: { xs: 15.5, md: 18 },
                    lineHeight: { xs: 1.65, md: 1.8 },
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* BUILT FOR CLUBBERS */}
      <Box sx={{ py: { xs: 7, md: 16 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "0.8fr 1.2fr" },
              gap: { xs: 5, lg: 6 },
              alignItems: "stretch",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#d946ef",
                  fontWeight: 800,
                  fontSize: { xs: 12, md: 14 },
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  mb: 2,
                }}
              >
                Built for clubbers
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 34, sm: 44, md: 60 },
                  lineHeight: 1.05,
                  fontWeight: 900,
                  letterSpacing: "-0.045em",
                  mb: { xs: 2, md: 3 },
                }}
              >
                More than dating.
                <br />
                It&apos;s your pre-party
                <br />
                experience.
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.72)",
                  fontSize: { xs: 16, md: 20 },
                  lineHeight: { xs: 1.65, md: 1.9 },
                  maxWidth: 520,
                  mb: { xs: 4, md: 6 },
                }}
              >
                ClubMate is the first app that connects club culture with real
                connections. No random matches. Just people, events and energy.
              </Typography>

              <Stack spacing={{ xs: 3, md: 4 }}>
                {features.map((item) => (
                  <Stack
                    key={item.title}
                    direction="row"
                    spacing={{ xs: 2, md: 2.5 }}
                    sx={{ alignItems: "flex-start" }}
                  >
                    <Box
                      sx={{
                        width: { xs: 44, md: 48 },
                        height: { xs: 44, md: 48 },
                        borderRadius: "14px",
                        border: "1px solid rgba(176,38,255,0.35)",
                        display: "grid",
                        placeItems: "center",
                        color: "#b026ff",
                        background: "rgba(176,38,255,0.08)",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: 19, md: 22 },
                          fontWeight: 800,
                          color: "#fff",
                          mb: 0.5,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.68)",
                          fontSize: { xs: 15.5, md: 17 },
                          lineHeight: { xs: 1.65, md: 1.8 },
                          maxWidth: 420,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>

            <Box
              sx={{
                position: "relative",
                borderRadius: { xs: "24px", md: "32px" },
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                minHeight: { xs: 520, sm: 620, md: 760 },
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <Image
                src="/images/clubmate/couple-banner.png"
                alt="Clubmate couple banner"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(5,6,10,0.88), rgba(5,6,10,0.28) 50%, rgba(5,6,10,0.08))",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: { xs: 16, md: 28 },
                  transform: "translateX(-50%)",
                  width: { xs: "calc(100% - 24px)", md: "calc(100% - 40px)" },
                  maxWidth: 700,
                  borderRadius: { xs: "22px", md: "28px" },
                  p: { xs: 2.25, sm: 3, md: 4 },
                  backdropFilter: "blur(16px)",
                  background: "rgba(17, 17, 24, 0.62)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 21, sm: 25, md: 32 },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: { xs: 2, md: 3 },
                    letterSpacing: "-0.03em",
                  }}
                >
                  Ready to find your club partner?
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "14px",
                    px: { xs: 2.5, md: 4 },
                    py: { xs: 1.25, md: 1.5 },
                    mb: { xs: 2, md: 3 },
                    width: { xs: "100%", sm: "auto" },
                    fontWeight: 700,
                    textTransform: "none",
                    background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                    boxShadow: "0 10px 30px rgba(168,85,247,0.28)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #6d28d9, #9333ea)",
                    },
                  }}
                >
                  Download ClubMate Now
                </Button>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <StoreButtons />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          py: { xs: 5, md: 6 },
          background: "rgba(0,0,0,0.2)",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #ff3131 0%, #ff0033 100%)",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 900,
                  fontSize: 24,
                  color: "#111",
                }}
              >
                C
              </Box>

              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                }}
              >
                clubmate
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: 13,
              }}
            >
              Dating. Clubbing. Connected.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 1,
              }}
            >
              <IconButton sx={{ color: "rgba(255,255,255,0.72)" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "rgba(255,255,255,0.72)" }}>
                <MusicNoteIcon />
              </IconButton>
              <IconButton sx={{ color: "rgba(255,255,255,0.72)" }}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
