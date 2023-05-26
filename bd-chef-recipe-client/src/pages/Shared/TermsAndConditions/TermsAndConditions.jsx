import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    // terms container
    <div style={{ fontFamily: "playfairDisplay" }}>
      {/* Terms and Conditions section */}
      <div className="border rounded mb-4 p-2">
        <h1 className="text-center mb-4">
          Terms and Conditions for
          <span style={{ color: "#da722c" }}> BD Chefs: </span>
        </h1>
        <p>
          <span
            style={{
              color: "#da722c",
              fontWeight: "bold",
            }}
          >
            Acceptance of Terms:
          </span>
          <br />
          <span>
            By accessing and using the website BD Chefs (the "Website"), you
            agree to be bound by these Terms and Conditions, as well as any
            additional terms, conditions, and policies referenced herein or
            available on the Website. If you do not agree to these terms, please
            refrain from using the Website.
          </span>
          <br />
          <span style={{ color: "#da722c", fontWeight: "bold" }}>
            Intellectual Property:{" "}
          </span>{" "}
          <br />
          <span>
            All content, including but not limited to text, images, graphics,
            logos, and software on the Website, is the property of BD Chefs or
            its licensors and is protected by intellectual property laws. You
            may not reproduce, modify, distribute, or use any content from the
            Website without obtaining prior written permission.
          </span>
          <br />
          <span style={{ color: "#da722c", fontWeight: "bold" }}>
            User Obligations:{" "}
          </span>{" "}
          <br />
          <span>
            You agree to use the Website for lawful purposes only and to comply
            with all applicable laws and regulations. You are responsible for
            maintaining the confidentiality of any account credentials and for
            all activities that occur under your account.
          </span>
          <br />
          <span style={{ color: "#da722c", fontWeight: "bold" }}>
            Privacy Policy:{" "}
          </span>{" "}
          <br />
          <span>
            Your privacy is important to us. Our Privacy Policy governs the
            collection, use, and disclosure of personal information we collect
            from you. By using the Website, you consent to the collection and
            use of your personal information as outlined in the Privacy Policy.
          </span>
          <br />
          <span style={{ color: "#da722c", fontWeight: "bold" }}>
            Third-Party Websites and Services:{" "}
          </span>{" "}
          <br />
          <span>
            The Website may contain links to third-party websites or services.
            BD Chefs is not responsible for the content, accuracy, or
            availability of such websites or services. Accessing third-party
            websites or services is at your own risk, and you should review
            their terms and privacy policies.
          </span>
        </p>
        {/* Back to Register Button */}
        <Link to="/register">
          <Button
            className="p-2 text-white mt-4 border border-0"
            style={{
              fontSize: "18px",
              background: "#da722c",
              width: "210px",
              marginBottom: "50px",
              marginLeft: "500px",
            }}
          >
            Back To Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TermsAndConditions;
