import React, { useState, useEffect, useContext } from "react"; //
import useAuth, { ProtectRoute } from "../contexts/auth.js";
import ReactCodeInput from "react-verification-code-input";
import LoadingOverlay from "react-loading-overlay";

function login() {
  const { login, Sendcond, phoneLogin } = useAuth();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setalert] = useState(false);
  const [phone, setphone] = useState("");
  const [code, setcode] = useState(0);
  console.log(code);

  const [step, setStep] = useState(1);

  const [isLoading, setLoading] = useState(false);
  const [spinner, setspinner] = useState(false);
  const [pageup, setpageup] = useState(1);
  const [errorMessage, seterrorMessage] = useState(false);

  const phoneSendcond = async (phone) => {
    setspinner(true);
    console.log(email, password);
    setLoading(true);
    const res = await Sendcond(phone);
    console.log(res);
    if (res.data) {
      setspinner(false);
      setStep(2);
      seterrorMessage(false);
    } else {
      setspinner(false);
      seterrorMessage(true);
    }
  };

  const loguser = async () => {
    setspinner(true);
    console.log("" + code);
    const res = await phoneLogin(phone, code);

    if (res) {
      setspinner(false);
      //Router.push("/CompanyStatistics");
    } else {
      setspinner(false);
    }
  };

  return (
    <LoadingOverlay active={spinner} spinner text="جاري التحميل...">
      <div class="main-content">
        <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
          <div class="separator separator-bottom separator-skew zindex-100">
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                class="fill-default"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        {step == 2 ? (
          <div class="container mt--8 pb-5">
            <div class="row justify-content-center">
              <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary border-0 mb-0">
                  <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                      <h3>الرجاء تسجيل الدخول</h3>
                      <h2>أدخل رمز الدخول المؤقت</h2>
                    </div>
                    <div
                      dir="ltr"
                      style={{ align: "center", marginLeft: "59px" }}
                    >
                      <ReactCodeInput
                        fields={4}
                        onChange={(e) => {
                          if (e.length >= 4) {
                            setcode(e);
                          }
                        }}
                      />
                    </div>
                    <div class="text-center text-muted mb-4">
                      <button
                        style={{ align: "center" }}
                        type="button"
                        type="submit"
                        class="btn btn-primary my-4"
                        onClick={() => {
                          loguser();
                        }}
                      >
                        تسجيل الدخول
                      </button>
                    </div>
                  </div>
                </div>

                <div class="row mt-3" style={{ display: "none" }}>
                  <div class="col-6">
                    <a href="#" class="text-light">
                      <small>هل نسيت الرقم السري ؟</small>
                    </a>
                  </div>
                  <div class="col-6 text-right">
                    <a href="#" class="text-light">
                      <small>تسجيل حساب جديد</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class="container mt--8 pb-5">
            <div class="row justify-content-center">
              <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary border-0 mb-0">
                  <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                      <h3>الرجاء تسجيل الدخول</h3>
                    </div>
                    <form
                      onSubmit={(e) => {
                        phoneSendcond(phone);
                        e.preventDefault();
                      }}
                      role="form"
                    >
                      <div class="form-group mb-3">
                        <div class="input-group input-group-merge input-group-alternative">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="ni ni-mobile-button"></i>
                            </span>
                          </div>
                          <input
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                            class="form-control"
                            placeholder="رقم الجوال"
                            type="text"
                          />
                        </div>
                      </div>

                      <div class="text-center">
                        <button
                          type="button"
                          type="submit"
                          class="btn btn-primary my-4"
                        >
                          إرسال الرمز المؤقت
                        </button>
                      </div>
                    </form>
                    {errorMessage ? (
                      <h2 style={{ color: "red" }}>لا يوجد حساب</h2>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div class="row mt-3" style={{ display: "none" }}>
                  <div class="col-6">
                    <a href="#" class="text-light">
                      <small>هل نسيت الرقم السري ؟</small>
                    </a>
                  </div>
                  <div class="col-6 text-right">
                    <a href="#" class="text-light">
                      <small>تسجيل حساب جديد</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </LoadingOverlay>
  );
}

export default login;
