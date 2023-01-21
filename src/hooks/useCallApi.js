import axios from 'axios';

export default async function useCallApi(url) {
  try {
    const res = await axios.get('https://restcountries.com/v2/' + url);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
