import axios from 'axios'

// ! Action Types

// ! interface
import { IContent } from '@actions/index'

// ! make dispatch factory pattern
export const getContentData = (content_id: string) => {
  return async (dispatch: Function) => {
    try {
      const res = await axios.get(
        `https://localhost:4000/content/${content_id}`
      )
      if (res.status === 200) {
        // todo: setStatus
      } else {
        // todo: error
      }
    } catch (e) {
      throw e
    }
  }
}
