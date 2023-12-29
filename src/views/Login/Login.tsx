import styles from './login.module.scss'
import initLoginBackground from './init.ts'
import { useEffect } from 'react'
import { Button, Input, Space } from 'antd'
import './login.less'

const Login = () => {
	useEffect(() => {
		initLoginBackground();
		window.onresize = function(){initLoginBackground()}
	}, [])

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
							<Input placeholder="User Name" />
							<Input.Password placeholder='Password' />
							<Button type='primary' block>
								Login
							</Button>
						</Space>
					</div>
      </div>
		</div>
	)
}

export default Login;