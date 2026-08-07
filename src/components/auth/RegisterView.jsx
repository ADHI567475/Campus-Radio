import AuthHeader from "./AuthHeader";
import Stepper from "./register/Stepper";
import { useAuth } from "../../context/AuthContext";

export default function RegisterView({
  back,
}) {

  const { register } = useAuth();

  const handleRegister = async (formData) => {

    try {

      await register(formData);

      alert(
        "🎉 Welcome to Campus Radio!"
      );

      back();

    } catch (err) {

      alert(
        err.message ||
        "Registration Failed"
      );

    }

  };

  return (

    <div>

      <AuthHeader
        title="Join Campus Radio"
        subtitle="Build your Campus Identity"
      />

      <Stepper
        onFinish={handleRegister}
      />

    </div>

  );

}