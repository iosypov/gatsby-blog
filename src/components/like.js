import React, { useState } from "react"

import { BiLike, BiDislike } from "react-icons/bi"

import useFeedbackApi from "../hooks/useFeedbackApi"

const Like = ({ page }) => {
  const feedbackApi = useFeedbackApi()
  const [likeState, setLikeState] = useState(
    JSON.parse(localStorage.getItem(`${page}_like`))
  )
  const handleLikeClick = React.useCallback(
    like => {
      setLikeState(like)
      localStorage.setItem(`${page}_like`, like)
      feedbackApi.create(like, page)
    },
    [feedbackApi, page]
  )
  return (
    <div style={{ display: "flex", flexDirection: "row", fontSize: "20px" }}>
      <div
        style={{
          paddingRight: "10px",
          color: likeState ? "blue" : "black",
          cursor: "pointer",
        }}
      >
        <BiLike onClick={handleLikeClick.bind(null, true)} />
      </div>
      <div
        style={{
          paddingRight: "10px",
          color: likeState === false ? "blue" : "black",
          cursor: "pointer",
        }}
      >
        <BiDislike onClick={handleLikeClick.bind(null, false)} />
      </div>
    </div>
  )
}

export default Like
