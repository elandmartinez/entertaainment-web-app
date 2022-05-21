import "../../styles/SignUpError.css";

const SignUpError = ({ invalidParameter }) => {
    return (
        <div className="sign-up-error">
            <p>
                oops! the
                <span>{invalidParameter}</span>
                you tried to set is already being used!
            </p>
        </div>
    )
}

export default SignUpError;