import UserClass from "./User";

const AboutUs = () => {
  return (
    <>
      <div className="font-bold text-center mb-60">
        <h2>About Me</h2>

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
