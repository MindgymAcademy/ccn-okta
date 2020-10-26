// src/store/homepage/actions.ts

import { ThunkResult } from "../types";
import axios from "axios";

export const fetchData: ThunkResult = async (dispatch, getState) => {
  dispatch({
    type: "homepage_feed_fetching",
  });
  try {
    const res = await axios.get(
      "https://codaisseur-coders-network-okta.herokuapp.com/posts"
    );
    dispatch({
      type: "homepage_feed_fetched",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "homepage_feed_error",
      payload: error,
    });
  }
};
