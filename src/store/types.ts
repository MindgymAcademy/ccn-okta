// src/store/types.ts

import { Post, PostsResponse } from "../lib/model";
import { FetchState } from "../util/fetchstate";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export type User = {
  id: number;
  name: string;
  email: string;
};

export type State = {
  user?: User;
  token?: string;
  homepageFeed: FetchState<PostsResponse>;
  darkMode: boolean;
};

export type Action =
  | {
      type: "add_post";
      payload: Post;
    }
  | {
      type: "login";
      payload: {
        token: string;
        user: User;
      };
    }
  | {
      type: "toggle_dark_mode";
    }
  | {
      type: "logout";
    }
  | {
      type: "homepage_feed_fetching";
    }
  | {
      type: "homepage_feed_fetched";
      payload: PostsResponse;
    }
  | {
      type: "homepage_feed_error";
      payload: any;
    };
// and more to be added later...

export type ThunkResult<R = any> = ThunkAction<R, State, void, Action>;

export type AppDispatch = ThunkDispatch<State, void, Action>;
