import React from "react";
import "../Doctor/CSS/Doctor_Profile.css";
import { AiOutlineUser } from "react-icons/ai";
import { GiMeditation } from "react-icons/gi";
import { AiFillCalendar } from "react-icons/ai";
import { MdBloodtype } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import { MdOutlineCastForEducation, MdFolderSpecial } from "react-icons/md";
import { FaRegHospital, FaMapMarkedAlt } from "react-icons/fa";
import Sidebar from "../../GlobalFiles/Sidebar";

const Nurse_Profile = () => {
  let commonStyling = {
    display: "flex",
    justifyContent: "left",
    gap: "10px",
    alignItems: "center",
    padding: "10px",
  };
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="maindoctorProfile">
            <div className="firstBox">
              <div
                style={{
                  border: "1px solid",
                  borderRadius: "10rem",
                  width: "45%",
                  margin: "auto",
                  marginTop: "10px",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <AiOutlineUser style={{ fontSize: "10rem", padding: "10px" }} />
              </div>
              <div style={commonStyling}>
                <GiMeditation />
                <p>Dr. SomeNurse</p>
              </div>
              <div style={commonStyling}>
                <AiFillCalendar />
                <p>29 February 2023</p>
              </div>
              <div style={commonStyling}>
                <MdBloodtype />
                <p>O-</p>
              </div>
              <div style={commonStyling}>
                <BsFillTelephoneFill />
                <p>+91 7069173337</p>
              </div>
            </div>
            {/* ***********  Second Div ******************** */}
            <div className="SecondBox">
              <div className="subfirstbox">
                <h2 style={{ textAlign: "center", marginTop: "10px" }}>
                  Other Info
                </h2>
                <div style={commonStyling}>
                  <BsHouseFill />
                  <p>
                    {" "}
                    Antilia, Ambani Tower, Altamount Road, Cumballa Hill, Mumbai{" "}
                  </p>
                </div>
                <div style={commonStyling}>
                  <MdOutlineCastForEducation />
                  <p>MBBS, Oxford University</p>
                </div>
              </div>
              {/* ***********  Third Div ******************** */}
              <div className="subSecondBox">
                <h2 style={{ textAlign: "center", marginTop: "10px" }}>
                  Hospital Details
                </h2>
                <div style={commonStyling}>
                  <FaRegHospital />
                  <p>Apollo hospitals</p>
                </div>
                <div style={commonStyling}>
                  <FaMapMarkedAlt />
                  <p>
                    Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New
                    Delhi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nurse_Profile;
