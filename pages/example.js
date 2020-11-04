import Admin_nav from "../components/Admin_nav";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import useAuth, { ProtectRoute } from "../contexts/auth.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

//import "chartjs-top-round-bar";

function example() {
  const { toggler, settoggler } = useAuth();
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "#FB6340",
        barThickness: 10,
        maxBarThickness: 10,
        data: [25, 20, 30, 22, 17, 29],
      },
    ],
  };

  const options = {
    legend: { display: false },
    barRoundness: 0.3,
    title: {
      display: true,
      text: "Predicted world population (millions) in 2050",
    },
  };

  return (
    <>
      <body className="rtl g-sidenav-show g-sidenav-pinned" dir="rtl">
        <div>
          {/* Sidenav */}

          {toggler ? <Admin_nav /> : ""}
          {/* Main content */}

          <div className="main-content" id="panel">
            {/* Topnav */}
            <HeaderNav />

            <div className="container-fluid mt--6">
              <div className="row justify-content-center">
                <div className=" col ">
                  <div className="card">
                    <div className="card-header bg-transparent">
                      <h3 className="mb-0">New page</h3>
                    </div>
                    <div className="card-body">
                      <div style={{ height: "900px", width: "900px" }}>
                        <div className="chart">
                          {/* Chart wrapper */}
                          <Bar data={data} options={options} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          </div>

          {/* Argon Scripts */}
          {/* Core */}
          {/* Optional JS */}
          {/* Argon JS */}
        </div>
      </body>
    </>
  );
}

export default example;
