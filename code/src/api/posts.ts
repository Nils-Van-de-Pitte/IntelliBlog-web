import get from "axios"

export async function getPosts() {
  try {
    const response = await get("https://localhost:5000/api/posts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}