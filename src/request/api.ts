import request from "./request.ts"

export const CaptchaAPI = ():Promise<CaptchaAPIRes> => request.get("/prod-api/captchaImage")