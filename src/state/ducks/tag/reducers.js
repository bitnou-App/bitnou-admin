import * as types from './types';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.TAG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.TAG_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.GET_TAGS_SUCCESS:
      return payload;
    case types.CREATE_TAG_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case types.UPDATE_TAG_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case types.GET_TAG_SUCCESS:
      return {
        loading: false,
        selectedTag: payload,
      };
    case types.TAG_RESET:
      return {};
    default:
      return state;
  }
};
