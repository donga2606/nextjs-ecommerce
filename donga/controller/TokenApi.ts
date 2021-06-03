import axios from 'axios'

interface ITokenApi {
  handleResponse: (res: any) => any
  get: (header: string, url: string) => Promise<Record<string, any>>
  post: (header: string, url: string, body: Record<string, any>) => any
  put: (header: string, url: string, body: Record<string, any>) => any
  delete: (header: string, url: string) => any
}

class TokenApi implements ITokenApi {
  // response
  handleResponse(res) {
    if (res) {
      return res
    }
  }
  args(header: string, url, body?: Record<string, any>) {
    const args: Record<string, any> = {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: body?body:undefined,
      url,
    }
    return args
  }

  // get
  async get(header: string, url: string) {
    const args = this.args(url, header)
    args.method = 'GET'
    try {
      const res = await axios(args)
      return this.handleResponse(res)
    } catch (err) {
      console.log(err)
    }
  }

  // post
  async post(header: string, url: string, body: Record<string, any>): Promise<Record<string, any>> {
    const args = this.args(url, header, body)
    args.method = 'POST'
    try {
      const res = await axios(args)
      return this.handleResponse(res)
    } catch (err) {
      console.error('Request Fail: ', err)
    }
  }

  // put
  async put(header: string, url: string, body: Record<string, any>): Promise<Record<string, any>> {
    const args = this.args(url, header, body)
    args.method = 'PUT'
    try {
      const res = await axios(args)
      return this.handleResponse(res)
    } catch (err) {
      console.error('Request Fail: ', err)
    }
  }
  // Method DELETE
  async delete(header: string, url: string): Promise<Record<string, any>> {
    const args = this.args(url, header)
    args.method = 'DELETE'
    try {
      const res = await axios(args)
      return this.handleResponse(res)
    } catch (err) {
      console.error('Request Fail: ', err)
    }
  }

  postTxs(url: string, method: string): any {
    return axios[method](url)
  }
}

const tokenApi = new TokenApi()

export default tokenApi

// tao them method de rieng url ra
