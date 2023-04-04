export const apiConfig = {
  REGISTER: {
    endPoint: "/auth/register",
    method: "POST",
  },
  LOGIN: {
    endPoint: "/auth/login",
    method: "POST",
  },
  LOGOUT: {
    endPoint: "/auth/logout",
    method: "GET",
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
    LIKE_AND_UNLIKE_POST: {
      endPoint: "/posts/like-post/",
      method: "GET",
    },
  }
};
