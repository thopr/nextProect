import UpdateProfileForm from "../components/UpdateProfileForm";

import useAuth, { ProtectRouteMandobe } from "../contexts/auth.js";

// react plugin used to create charts

//import "chartjs-top-round-bar";

function UpdateProfileM() {
  const { toggler, settoggler, loading } = useAuth();

  return (
    <>
      <UpdateProfileForm />
    </>
  );
}

export default ProtectRouteMandobe(UpdateProfileM);
