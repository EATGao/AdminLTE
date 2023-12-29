import styles from './login.module.scss'
import initLoginBackground from './init.ts'
import { ChangeEvent, useEffect, useState } from 'react'
import { Button, Input, Space } from 'antd'
import './login.less'

const Login = () => {
	useEffect(() => {
		initLoginBackground();
		window.onresize = function(){initLoginBackground()}
	}, [])

	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [captcha, setCaptcha] = useState("");

	const userNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value)
	}

	const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCaptcha(e.target.value)
	}

	const login = () => {
		console.log(userName + ' ' + password + ' ' + captcha)
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
								<div className='captchaImg'>
									{/* add verification code later*/}
									<img height="38"  src="" alt="" />
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