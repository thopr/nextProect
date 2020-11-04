import UpdateProfileForm from "../components/UpdateProfileForm";

import useAuth, { ProtectRoute } from "../contexts/auth.js";

// react plugin used to create charts

//import "chartjs-top-round-bar";

function UpdateProfileA() {
  const { toggler, settoggler, loading } = useAuth();

  return (
    <>
      <UpdateProfileForm />
    </>
  );
}

export default ProtectRoute(UpdateProfileA);
