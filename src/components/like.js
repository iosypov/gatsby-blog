import React, { useEffect, useState } from "react"

import { BiLike, BiDislike } from "react-icons/bi"

import useFeedbackApi from "../hooks/useFeedbackApi"

const Like = ({ page }) => {
  const feedbackApi = useFeedbackApi()
  const [feedback, setFeedback] = useState(null)
  const handleLikeClick = React.useCallback(
    async like => {
      const result = await feedbackApi.save(feedback, like, page)
      setFeedback(result)
      localStorage.setItem(`${page}_feedback`, JSON.stringify(result))
    },
    [feedbackApi, feedback, page]
  )
  useEffect(() => {
    setFeedback(JSON.parse(localStorage.getItem(`${page}_feedback`)) ?? null)
  }, [page])
  return (
    <div style={{ display: "flex", flexDirection: "row", fontSize: "20px" }}>
      <div
        style={{
          paddingRight: "10px",
          color: feedback && feedback.sentiment ? "blue" : "black",
          cursor: "pointer",
        }}
      >
        <BiLike onClick={handleLikeClick.bind(null, true)} />
      </div>
      <div
        style={{
          paddingRight: "10px",
          color: feedback && feedback.sentiment === false ? "blue" : "black",
          cursor: "pointer",
        }}
      >
        <BiDislike onClick={handleLikeClick.bind(null, false)} />
      </div>
    </div>
  )
}

export default Like
