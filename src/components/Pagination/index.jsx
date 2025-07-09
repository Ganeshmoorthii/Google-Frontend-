import React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    // Optionally: fetch new results here based on page number
  };

  return (
    <Stack spacing={2} alignItems="center" mt={4}>
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#fff",            // default text color
            borderColor: "#fff",      // if outlined
          },
          "& .Mui-selected": {
            backgroundColor: "#1976d2", // selected page bg
            color: "#fff",              // selected page text
          },
        }}
      />
    </Stack>
  );
}
