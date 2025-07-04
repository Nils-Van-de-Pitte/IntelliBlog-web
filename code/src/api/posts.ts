import get from "axios"
import {Posts} from "@/src/types/types";

/**
 * Fetches a list of posts from the specified API endpoint.
 *
 * @return {Promise<Posts[]>} A promise that resolves to the data containing the list of posts.
 */
export async function getPosts(): Promise<Posts[]> {
  try {
    const response = await get("http://localhost:5032/api/v1/posts");
    console.log('this is the posts response', response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // I know, but this is here just so that React Query can handle it
  }
}