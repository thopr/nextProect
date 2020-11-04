import UpdateProfileForm from "../components/UpdateProfileForm";

import useAuth, { ProtectRouteCompany } from "../contexts/auth.js";

// react plugin used to create charts

//import "chartjs-top-round-bar";

function UpdateProfileC() {
  const { toggler, settoggler, loading } = useAuth();

  return (
    <>
      <UpdateProfileForm />
    </>
  );
}

export default ProtectRouteCompany(UpdateProfileC);
