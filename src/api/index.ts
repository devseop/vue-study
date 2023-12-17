import axios from 'axios';

export async function fetchRepoData() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

  try {
    const res = await axios.get(BASE_URL);
    if (res.status === 200) {
      console.log(res.data)
      return res.data;
    }
  } catch (err) {
    console.error('Error fetching data:', err);
    return null;
  }
}