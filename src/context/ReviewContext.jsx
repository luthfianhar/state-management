import { createContext, useReducer } from 'react';

export const ReviewContext = createContext(null);

const initialState = {
  reviewerName: 'Tamu',
  review: null,
  isLoading: false,
  success: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_REVIEWER_NAME':
      return {
        ...state,
        reviewerName: action.payload,
      };

    default:
      return state;
  }
}

export function ReviewProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setReviewerName = (name) => {
    dispatch({
      type: 'SET_REVIEWER_NAME',
      payload: name,
    });
  };

  return (
    <ReviewContext.Provider
      value={{
        state,
        setReviewerName,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
}