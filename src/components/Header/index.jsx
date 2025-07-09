import React from 'react';
import { Box, IconButton, Stack, Typography, Avatar } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';

export default function Header({ toggleDarkMode }) {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '8px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 1,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Typography variant="body2" color="inherit">
            About
          </Typography>
          <Typography variant="body2" color="inherit">
            Store
          </Typography>
        </Box>
        <Box>
          <button
            onClick={toggleDarkMode}
            style={{
              padding: '4px 10px',
              background: 'transparent',
              border: '1px solid gray',
              color: 'inherit',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Change mode
          </button>
        </Box>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Typography variant="body2" color="inherit">
            Gmail
          </Typography>
          <Typography variant="body2" color="inherit">
            Images
          </Typography>
        </Box>
        <IconButton color="inherit">
          <AppsIcon />
        </IconButton>
        <Avatar sx={{ width: 38, height: 38 }} />
      </Stack>
    </Box>
  );
}
