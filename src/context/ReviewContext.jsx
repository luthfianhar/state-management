import { createContext, useCallback, useReducer } from 'react';

export const ReviewContext = createContext(null);

const initialState = {
  reviewerName: 'Tamu',
  review: null,
  isLoading: false,
  success: false,
  error: null,
};

function reviewReducer(state, action) {
  switch (action.type) {
    case 'SET_REVIEWER_NAME':
      return {
        ...state,
        reviewerName: action.payload || 'Tamu',
      };

    case 'SUBMIT_REVIEW_START':
      return {
        ...state,
        isLoading: true,
        success: false,
        error: null,
      };

    case 'SUBMIT_REVIEW_SUCCESS':
      return {
        ...state,
        isLoading: false,
        success: true,
        error: null,
        review: action.payload,
      };

    case 'SUBMIT_REVIEW_ERROR':
      return {
        ...state,
        isLoading: false,
        success: false,
        error: action.payload,
      };

    case 'CLEAR_STATUS':
      return {
        ...state,
        success: false,
        error: null,
      };

    case 'DELETE_REVIEW':
      return {
        ...state,
        review: null,
        success: false,
        error: null,
      };

    default:
      return state;
  }
}

export function ReviewProvider({ children }) {
  const [state, dispatch] = useReducer(
    reviewReducer,
    initialState
  );

  // =========================
  // UBAH NAMA
  // =========================
  const setReviewerName = useCallback((name) => {
    dispatch({
      type: 'SET_REVIEWER_NAME',
      payload: name.trim(),
    });
  }, []);

  // =========================
  // TAMBAH ULASAN
  // =========================
  const addReview = useCallback(
    async (productName, comment) => {
      dispatch({
        type: 'SUBMIT_REVIEW_START',
      });

      try {
        // Simulasi proses pengiriman
        await new Promise((resolve) =>
          setTimeout(resolve, 700)
        );

        const newReview = {
          id: Date.now(),
          productName,
          comment,
          reviewerName:
            state.reviewerName.trim() || 'Tamu',
        };

        dispatch({
          type: 'SUBMIT_REVIEW_SUCCESS',
          payload: newReview,
        });

        return true;
      } catch (error) {
        dispatch({
          type: 'SUBMIT_REVIEW_ERROR',
          payload: 'Gagal mengirim ulasan.',
        });

        return false;
      }
    },
    [state.reviewerName]
  );

  // =========================
  // HAPUS ULASAN
  // =========================
  const deleteReview = useCallback(() => {
    dispatch({
      type: 'DELETE_REVIEW',
    });
  }, []);

  // =========================
  // CLEAR STATUS
  // =========================
  const clearStatus = useCallback(() => {
    dispatch({
      type: 'CLEAR_STATUS',
    });
  }, []);

  return (
    <ReviewContext.Provider
      value={{
        state,
        setReviewerName,
        addReview,
        deleteReview,
        clearStatus,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
}