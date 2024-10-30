// src/services/figmaService.js
import axios from 'axios';

const API_BASE_URL = 'https://api.figma.com/v1';
const ACCESS_TOKEN = 'figd_EfVBlSwFrmIfgI5HciUPj_kohyJw1HWolyuVRTjb'; // 발급받은 Access Token을 입력

export const fetchFigmaFile = async (fileId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/files/${fileId}`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Figma file:', error);
    throw error;
  }
};