import React from "react";
import SearchBar from "../../components/SearchBar";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";

function SearchPageHeader({ toggleDarkMode, darkMode }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        gap: 2,
      }}
    >
      {isSmallScreen ? (
        // -------- Mobile Layout --------
        <>
          {/* Row 1: Logo + Change Mode */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src="/googlelogo.png"
              alt="Google Logo"
              style={{ width: "120px", height: "auto" }}
              onClick={() => navigate("/")}
            />
            <Button
              onClick={toggleDarkMode}
              variant="outlined"
              size="small"
              sx={{
                borderColor: "gray",
                color: "inherit",
                borderRadius: "16px",
                textTransform: "none",
              }}
            >
              Change Mode
            </Button>
          </Box>

          {/* Row 2: Search Bar */}
          <Box sx={{ width: "100%" }}>
            <SearchBar darkMode={darkMode} />
          </Box>
        </>
      ) : (
        // -------- Desktop Layout --------
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {/* Left: Logo + SearchBar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flex: 1,
              minWidth: 250,
            }}
          >
            <img
              src="/googlelogo.png"
              alt="Google Logo"
              style={{ width: "140px", height: "auto" }}
              onClick={() => navigate("/")}
            />
            <Box sx={{ flexGrow: 1, maxWidth: 600 }}>
              <SearchBar darkMode={darkMode} />
            </Box>
          </Box>

          {/* Right: Change Mode + Icons */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              onClick={toggleDarkMode}
              variant="outlined"
              size="small"
              sx={{
                borderColor: "gray",
                color: "inherit",
                borderRadius: "16px",
                textTransform: "none",
              }}
            >
              Change Mode
            </Button>
            <IconButton color="inherit">
              <AppsIcon />
            </IconButton>
            <Avatar sx={{ width: 38, height: 38 }} />
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default SearchPageHeader;
