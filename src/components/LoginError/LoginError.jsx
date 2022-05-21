import "../../styles/LoginError.css";

const LoginError = ({ errorMsg }) => {
    return (
        <div className="login-error" >
            <p>{errorMsg}</p>
        </div>
    )
}

export default LoginError