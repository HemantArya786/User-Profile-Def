import "./App.css";
import { GoPencil } from "react-icons/go";
function App() {
  return (
    <main>
      <section className="d-flex justify-content-between header-bg-color">
        <h4 className="text-white m-2">Profile</h4>
        <div className="d-flex align-items-center px-1 ">
          <button className="btn btn-success  border-0  px-3">
            <GoPencil />
            <span className="ms-2">Edit</span>
          </button>
        </div>
      </section>
      <section className="row">
        <div className="col-sm-6 d-flex p-3">
          <div className="col-md-6 d-flex flex-column justify-content-between">
            <h5 className="data-key-text">Full Name :</h5>
            <h5 className="data-key-text">Mobile No :</h5>
            <h5 className="data-key-text">Organization :</h5>
            <h5 className="data-key-text">Department Name :</h5>
            <h5 className="data-key-text">Designation :</h5>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-between">
            <p className="data-value-text">NA_USER***</p>
            <p className="data-value-text">00000-00000</p>
            <p className="data-value-text">National Assembly</p>
            <p className="data-value-text">Department Committee</p>
            <p className="data-value-text">Action Officer</p>
          </div>
        </div>
        <div className="col-sm-6 d-flex p-3">
          <div className="col-md-6 d-flex flex-column justify-content-between">
            <h5 className="data-key-text">Email :</h5>
            <h5 className="data-key-text">Username :</h5>
            <h5 className="data-key-text">Directorate :</h5>
            <h5 className="data-key-text">Division Name :</h5>
            <h5 className="data-key-text">User Type :</h5>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-between">
            <p className="data-value-text">**@parliament.go.ke</p>
            <p className="data-value-text">nauser***</p>
            <p className="data-value-text">
              Directorate of Departmental Committees
            </p>
            <p className="data-value-text">Defence and Foreign Relation</p>
            <p className="data-value-text">Approving Authority</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
