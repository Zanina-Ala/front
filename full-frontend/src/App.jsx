import { useState } from "react";
import UserVerificationForm from "./components/UserVerificationForm";
import PaymentVerificationForm from "./components/PaymentVerificationForm";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  const handleUserSubmit = (data) => {
    setUserData(data);
    setStep(2);
  };

  return (
    <div className="App">
      {step === 1 ? (
        <UserVerificationForm onNext={handleUserSubmit} />
      ) : (
        <PaymentVerificationForm userData={userData} />
      )}
    </div>
  );
}
