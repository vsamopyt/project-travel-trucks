import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (reqParams, thunkAPI) => {
    const {
      location,
      AC,
      transmission,
      kitchen,
      bathroom,
      TV,
      water,
      gas,
      radio,
      refrigerator,
      microwave,
      form,
      limit,
      page,
    } = reqParams;

    try {
      const response = await axios.get('/', {
        params: {
          location: location,
          AC: AC,
          transmission: transmission,
          kitchen: kitchen,
          bathroom: bathroom,
          TV: TV,
          water: water,
          gas: gas,
          radio: radio,
          refrigerator: refrigerator,
          microwave: microwave,
          form: form,
          limit: limit,
          page: page,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchCampersById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
