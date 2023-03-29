export const apiConfig = {
  REGISTER: {
    endPoint: "/auth/register",
    method: "POST",
  },
  LOGIN: {
    endPoint: "/auth/login",
    method: "POST",
  },
  POSTS: {
    GET_ALL_POSTS: {
      endPoint: "/posts/all-posts",
      method: "GET",
    },
    GET_POSTS_BY_USER : {
      endPoint: "/posts/posts-by-user",
      method: "GET",
    },
    CREATE_POST: {
      endPoint: "/posts/create-post",
      method: "POST",
    },
  }
};
