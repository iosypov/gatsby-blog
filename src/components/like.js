import React from "react"

import { BiLike, BiDislike } from "react-icons/bi"

import useFeedbackApi from "../hooks/useFeedbackApi"

const Like = ({ page }) => {
  const feedbackApi = useFeedbackApi()
  const handleLikeClick = React.useCallback(
    like => {
      feedbackApi.create(like, page)
    },
    [feedbackApi, page]
  )
  return (
    <div style={{ display: "flex", flexDirection: "row", fontSize: "20px" }}>
      <div style={{ paddingRight: "10px" }}>
        <BiLike onClick={handleLikeClick.bind(null, true)} />
      </div>
      <div>
        <BiDislike onClick={handleLikeClick.bind(null, false)} />
      </div>
    </div>
  )
}

export default Like
