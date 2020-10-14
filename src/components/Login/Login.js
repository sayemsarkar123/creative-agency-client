import React, { useContext } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { LoginContext } from '../../App'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig)

const Login = () => {
  const [userLog, setUserLog] = useContext(LoginContext)
  const history = useHistory()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: '/' } }

  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName: name, photoURL: picture, email } = result.user
        setUserLog({ isSignIn: true, name, email, picture })
        history.replace(from)
      })
  }
  return (
    <div className="container">
      <img
        className="d-block mx-auto mt-3 mb-5"
        style={{ maxWidth: '200px' }}
        src="https://i.ibb.co/VNQvqry/logo.png"
        alt=""
      />
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="px-3 py-5 border border-silver rounded">
            <div className="px-2 py-5 text-center">
              <h3 className="font-weight-bold">Login With</h3>
              <div
                onClick={googleSignIn}
                style={{ cursor: 'pointer' }}
                className="d-flex align-items-center p-2 border border-silver rounded-pill mb-2 mt-5"
              >
                <img
                  style={{ maxWidth: '30px' }}
                  src="https://i.ibb.co/qFLN6cQ/5847f9cbcef1014c0b5e48c8.png"
                  alt=""
                />
                <span className="mx-auto">Continue with Google</span>
              </div>
              <h5>
                Don’t have an account?{' '}
                <Link to="/login">Create an account</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
