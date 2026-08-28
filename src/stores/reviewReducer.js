export const initialState = {
  reviewerName: 'Tamu',
  review: null,
  isLoading: false,
  error: '',
  success: false,
};

export function reviewReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      const updatedReview = state.review
        ? { ...state.review, reviewerName: action.payload || 'Tamu' }
        : null;
      return {
        ...state,
        reviewerName: action.payload || 'Tamu',
        review: updatedReview,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
        error: action.payload ? '' : state.error,
        success: action.payload ? false : state.success,
      };
    case 'ADD_REVIEW':
      return {
        ...state,
        review: {
          id: Date.now(),
          ...action.payload,
        },
      };
    case 'SET_SUCCESS':
      return {
        ...state,
        success: action.payload,
        error: '',
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        success: false,
      };
    case 'CLEAR_STATUS':
      return {
        ...state,
        error: '',
        success: false,
      };
    default:
      return state;
  }
}
