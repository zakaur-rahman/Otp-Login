import { useCallback } from "react";
import "./SignIn.css";
import "./Polygon-1.svg"

const SignIn = () => {
  const onGroupContainer2Click = useCallback(() => {
    // Please sync "otp" to the project
  }, []);

  return (
    <div className="sign-in">
      <div className="please-sign-in-to-your-account-parent">
        <div className="please-sign-in">Please sign in to your account</div>
        <div className="welcome-back">Welcome Back</div>
      </div>
      <div className="rectangle-parent" onClick={onGroupContainer2Click}>
        <div className="group-child" />
        <div className="sign-in-with-otp-wrapper">
          <div className="sign-in-with">Sign In with OTP</div>
        </div>
      </div>
      <div className="rectangle-group">
        <div className="group-item" />
        <div className="vector-parent">
          <img className="group-inner" alt="" src="/rectangle-1221.svg" />
          <div className="enter-contact-number">Enter Contact Number</div>
        </div>
        <img className="polygon-icon" alt="" src="/polygon-1.svg" />
        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
        <div className="div">7896781234</div>
        <div className="div1">+91</div>
      </div>
      <div className="we-will-send-container">
        <p className="we-will-send">We will send you a one time SMS message.</p>
        <p className="we-will-send">Charges may apply.</p>
      </div>
      <img className="ak-logo-icon" alt="" src="" />
      <div className="system-light-status-bar">
        <div className="time">9:41</div>
        <div className="battery">
          <div className="border" />
          <img className="cap-icon" alt="" src="/cap.svg" />
          <div className="capacity" />
        </div>
        <img className="wifi-icon" alt="" src="/wifi.svg" />
        <img
          className="cellular-connection-icon"
          alt=""
          src="/cellular-connection.svg"
        />
      </div>
    </div>
  );
};

export default SignIn;
