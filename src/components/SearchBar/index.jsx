import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from 'react-router-dom';

// Styled Components Outside
const SearchContainer = styled('div')(({ theme, darkMode }) => ({
  position: 'relative',
  borderRadius: '40px',
  border: `2px solid ${darkMode ? '#ffffff88' : '#dfe1e5'}`,
  backgroundColor: darkMode ? '#24242B' : '#f1f3f4',
  margin: '20px auto',
  width: '100%',
  maxWidth: 600,
  display: 'flex',
  alignItems: 'center',
  padding: '6px 16px',
  transition: 'box-shadow 0.3s, border-color 0.3s',
  '&:hover': {
    boxShadow: darkMode
      ? '0 1px 8px rgba(255,255,255,0.2)'
      : '0 1px 8px rgba(32,33,36,0.28)',
  },
}));

const IconWrapper = styled('div')(({ side, darkMode }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: side === 'right' ? '12px' : 0,
  marginRight: side === 'left' ? '12px' : 0,
  color: darkMode ? '#ccc' : '#5f6368',
  cursor: side === 'right' ? 'pointer' : 'default',
}));

const StyledInputBase = styled(InputBase)(({ darkMode }) => ({
  flex: 1,
  fontSize: '16px',
  color: darkMode ? '#fff' : '#000',
  '& .MuiInputBase-input': {
    padding: '8px 0',
  },
}));

// Main Component
const SearchBar = ({ onSearch, darkMode }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch?.(query);
      navigate('/search', { state: { query } });

      setQuery(''); // Clear the input after search
    }
  };

  return (
    <SearchContainer darkMode={darkMode}>
      <IconWrapper side="left" darkMode={darkMode}>
        <SearchIcon />
      </IconWrapper>
      <StyledInputBase
        placeholder="Search Google or type a URL"
        inputProps={{ 'aria-label': 'search' }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        darkMode={darkMode}
      />
      <IconWrapper side="right" darkMode={darkMode}>
        <MicIcon />
      </IconWrapper>
    </SearchContainer>
  );
};

export default SearchBar;
