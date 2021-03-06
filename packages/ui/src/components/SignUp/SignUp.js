import React, { useState } from 'react'
import { Form, Input, Button, Typography } from 'antd'
import styles from './SignUp.module.scss'
import { Link } from 'react-router-dom'
import { message } from 'antd'
import { signUp } from '../../api/user'

const SignUpForm = ({ handleSubmit }) => (
    <Form name="signUpForm" onFinish={handleSubmit}>
        <h3 className={styles.title}>Sign up</h3>

        <Form.Item
            name="login"
            rules={[{ required: true, message: 'Please input your login!' }]}
        >
            <Input style={{ width: 300 }} placeholder="Login" />
        </Form.Item>

        <Form.Item
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
        >
            <Input.Password style={{ width: 300 }} placeholder="Password" />
        </Form.Item>
        <Form.Item
            name="passwordRepeat"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
        >
            <Input.Password
                style={{ width: 300 }}
                placeholder="Repeat password"
            />
        </Form.Item>
        <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
        >
            <Input style={{ width: 300 }} placeholder="Email" />
        </Form.Item>
        <Form.Item
            name="firstName"
            rules={[{ required: true, message: 'Please input First name!' }]}
        >
            <Input style={{ width: 300 }} placeholder="First name" />
        </Form.Item>
        <Form.Item
            name="lastName"
            rules={[{ required: true, message: 'Please input Last name!' }]}
        >
            <Input style={{ width: 300 }} placeholder="Last name" />
        </Form.Item>
        <Form.Item>
            <Button
                style={{ background: '#1eafb5', width: 150 }}
                type="primary"
                htmlType="submit"
            >
                Create account
            </Button>
        </Form.Item>
        <Button type="link" htmlType="button">
            <Link to="/login">Cancel</Link>
        </Button>
    </Form>
)
const Success = () => (
    <Typography.Paragraph type="secondary">
        New account was created!
        <br />
        To login into app go to <Link to="/login">login page</Link> and sign in
        with your credentials
    </Typography.Paragraph>
)

const steps = [{ content: SignUpForm }, { content: Success }]

const SignUp = () => {
    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent((prev) => prev + 1)
    }

    const handleSubmit = async (values) => {
        try {
            await signUp(values)
            next()
        } catch (err) {
            message.error('Some Error occurs ' + err)
        }
    }
    const Component = steps[current].content
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <Component handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default SignUp
