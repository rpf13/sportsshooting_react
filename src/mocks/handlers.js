import { rest } from "msw";

const baseURL = "https://sportsshooting-drf-rpf13-5060e23f8756.herokuapp.com/";

// Mock service worker used for jest testing
export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 1,
        username: "apple",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 1,
        profile_image:
          "https://res.cloudinary.com/dnlt6oudl/image/upload/v1/media/../default_profile_pabjww",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
