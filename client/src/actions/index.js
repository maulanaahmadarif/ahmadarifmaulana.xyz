import axios from 'axios';

import { GET_SITE_DATA } from './types';

export const getSiteData = () => async dispatch => {
  const res = await axios.get('https://ahmadarifmaulana.xyz/data.json');
  dispatch({ type: GET_SITE_DATA, payload: res.data });
}
