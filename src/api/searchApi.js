// src/api/searchApi.js

const API_KEY = "AIzaSyBfmQWhg3Cx44R7pRI_y-I9qe0ZwUQN-T8"; // Replace with your actual API key
const CX = "f088bddebbf4f4011"; // Your search engine ID

export const fetchSearchResults = async (query) => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${query}`
  );
  const data = await response.json();
  return data.items || [];
};
