import {CommentType, RatingType} from "../../types/Types";

export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_RATING = 'ADD_RATING'

export const addCommentAction =  (newComment: CommentType) => {
  return {
      type: ADD_COMMENT,
      payload: newComment
  }
}

export const addRatingAction = (rating: RatingType) => {
    return {
        type: ADD_RATING,
        payload: rating
    }
}