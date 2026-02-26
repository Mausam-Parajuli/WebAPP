import { useState } from "react";

function PasswordToggle() {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const getPassword = (event) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <h1>Password Toggler</h1>
            <div>
                <input 
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={getPassword}
                />
                
                <button onClick={togglePassword}>
                    {showPassword ? "Hide" : "Show"}
                </button>

                <p>
                    {showPassword ? "Password is Shown" : "Password is Hidden"}
                </p>
                <p>
                    {showPassword ? password : ""}
                </p>
            </div>
        </>
    );
}

export default PasswordToggle;