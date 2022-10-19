import { Client, FeedbackController } from "blips-and-chitz-feedback-api-sdk"
const client = new Client({
  timeout: 0,
  xRapidAPIKey: process.env["GATSBY_RAPID_API_KEY"],
})
const publicController = new FeedbackController(client)
function useFeedbackApi() {
  async function save(feedback, sentiment, page) {
    let resp
    if (feedback && feedback.id) {
      resp = await publicController.updateFeedbackById(feedback.id, {
        sentiment,
        page,
        tags: ["sample-blog"],
      })
    } else {
      resp = await publicController.createFeedback({
        sentiment,
        page,
        tags: ["sample-blog"],
      })
    }

    return resp.result
  }
  return { save }
}

export default useFeedbackApi
