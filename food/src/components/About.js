import UserClass from "./User";

const AboutUs = () => {
  return (
    <>
      <div className="about-header">
        <h2>About Us</h2>

        <UserClass
          name="Yash Gupta"
          location="New Delhi"
          contact="@yashgupta023"
        />
      </div>
    </>
  );
};

export default AboutUs;
