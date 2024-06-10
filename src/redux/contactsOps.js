import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://6662aeeb62966e20ef097e3e.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "Contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/Contacts");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "Contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post("/Contacts", newContact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "Contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/Contacts/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
