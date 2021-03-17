import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter
      style={{
        backgroundColor: "#E41A37",
        paddingTop: "10px",
        paddingBottom: "10px",
        zIndex: 998,
        minHeight: "100%",
        marginBottom: "-1500px",
      }}
      color="blue"
      className="font-small pt-1 mt-5"
    >
      <MDBContainer fluid className="text-center text-md-left"></MDBContainer>
      <div
        className="footer-copyright text-center "
        style={{ padding: "0 !important" }}
      >
        <MDBContainer style={{ color: "white" }} fluid>
          <p
            style={{
              fontSize: "12px",
              marginTop: "10px",
              marginBottom: "0.2rem",
            }}
          >
            {" "}
            MEMBER PORTAL <br /> &copy; {new Date().getFullYear()} MYCHAL
            MARTINEZ BASKETBALL
          </p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
