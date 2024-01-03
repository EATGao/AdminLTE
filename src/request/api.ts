import request from "./request.ts"

const CaptchaAPI = ():Promise<CaptchaAPIRes> => request.get("/prod-api/captchaImage")

const LoginAPI = (params: LoginAPIReq):Promise<LoginAPIRes> => request.post("/prod-api/login")

export {CaptchaAPI, LoginAPI}
