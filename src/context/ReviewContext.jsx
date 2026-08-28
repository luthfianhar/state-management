import { initialState, reviewReducer } from '@/stores/reviewReducer';
import { createContext, useReducer } from 'react';

const ReviewContext = createContext(null);

function ReviewProvider({ children }) {
  const [state, dispatch] = useReducer(reviewReducer, initialState);

  const setReviewerName = (name) => {
    dispatch({ type: 'SET_NAME', payload: name });
  };

  const addReview = async (productName, comment) => {
    if (!comment || comment.trim().length < 5) {
      dispatch({
        type: 'SET_ERROR',
        payload: 'Ulasan minimal harus 5 karakter!',
      });
      return false;
    }

    dispatch({ type: 'SET_LOADING', payload: true });

    await new Promise((resolve) => setTimeout(resolve, 1500));

    dispatch({
      type: 'ADD_REVIEW',
      payload: {
        productName,
        comment: comment.trim(),
        reviewerName: state.reviewerName,
      },
    });

    dispatch({ type: 'SET_LOADING', payload: false });
    dispatch({ type: 'SET_SUCCESS', payload: true });
    return true;
  };

  const clearStatus = () => {
    dispatch({ type: 'CLEAR_STATUS' });
  };

  return (
    <ReviewContext.Provider
      value={{
        state,
        setReviewerName,
        addReview,
        clearStatus,
      }}>
      {children}
    </ReviewContext.Provider>
  );
}

export { ReviewProvider, ReviewContext };
