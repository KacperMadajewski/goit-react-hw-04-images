import axios from 'axios';

export const searchQuery = (query, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=35160839-4fe9cbd0f2e961147388a4735&image_type=photo&orientation=horizontal&per_page=12`
  );
};
