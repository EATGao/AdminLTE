import styles from './login.module.scss'
import initLoginBackground from './init.ts'
import { ChangeEvent, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Space, message } from 'antd'
import './login.less'
import { CaptchaAPI, LoginAPI } from '@/request/api.ts'

const Login = () => {
	let navigateTo = useNavigate()
	useEffect(() => {
		initLoginBackground();
		window.onresize = function(){initLoginBackground()}
		getCaptchaImg()
	}, [])

	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [captcha, setCaptcha] = useState("");
	const [captchaImg, setCaptchaImg] = useState("");

	const userNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value)
	}

	const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCaptcha(e.target.value)
	}

	const login = async () => {
		if (!userName.trim() || !password.trim() || !captcha.trim()) {
			message.warning("Please fill out all columns")
			return
		}

		let loginAPIRes = await LoginAPI({
			username: userName,
			password: password,
			code: captcha,
			uuid: localStorage.getItem("uuid") as string
		})

		if (loginAPIRes.code === 200) {
			message.success("Login successfully!")
			localStorage.setItem("adminlte-token", loginAPIRes.token)
			localStorage.removeItem("uuid")
			navigateTo("/page1")
		}
	}

	const getCaptchaImg = async () => {
		let captchaAPIRes = await CaptchaAPI()
		if (captchaAPIRes.code === 200) {
			setCaptchaImg("data:image/gif;base64," + captchaAPIRes.img)
		}
		localStorage.setItem("uuid", captchaAPIRes.uuid)
	}

	return (
		<div className={styles.loginPage}>
			<canvas id="canvas" style={{display: "block"}}></canvas>
			<div className={styles.loginBox + " loginbox"}>
          <div className={styles.title}>
              <h1>Admin&nbsp;·&nbsp;LTE</h1>
              <p>Easy Management</p>
          </div>
					<div className='form'>
						<Space direction='vertical' size='large' style={{ display: 'flex' }}>
							<Input placeholder="User Name" onChange={userNameChange}/>
							<Input.Password placeholder='Password' onChange={passwordChange}/>
							<div className="captchaBox">
								<Input placeholder='Verification Code' onChange={captchaChange} />
								<div className='captchaImg' onClick={getCaptchaImg}>
									{/* add verification code later*/}
									<img height="38"  src={captchaImg} alt="captcha image" />
								</div>
							</div>
							<Button className='loginButton' type='primary' block onClick={login}>
								Login
							</Button>
						</Space>
					</div>
      </div>
		</div>
	)
}

export default Login;