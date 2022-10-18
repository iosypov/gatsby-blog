import { Client, FeedbackController } from "blips-and-chitz-feedback-api-sdk"
const client = new Client({
  timeout: 0,
  xRapidAPIKey: "637316bb60msh72029ce58a98a83p19d6d5jsnb9fefc607f61",
  xAPIKEY: "LgcVsiwdXDt1AYSqtf5fbt4GYhk2jGGW",
  xRapidAPIHost: "feedback-api5.p.rapidapi.com",
})
const publicController = new FeedbackController(client)
function useFeedbackApi() {
  function create(sentiment, page) {
    publicController.createFeedback({
      sentiment,
      page,
      tags: ["sample-blog"]
    })
  }
  return { create }
}

export default useFeedbackApi
