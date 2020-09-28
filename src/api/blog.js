import request from "../utils/request"

export function addBlog(param) {

  return request({
    url: process.env.GATEWAY_API + 'blog/blog/add',
    method: "post",
    data: param
  })
}
