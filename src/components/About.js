import UserClass from "./User";

const AboutUs = () => {
  return (
    <>
      <div className="font-bold flex justify-center text-center mb-8 md:mb-16 lg:mb-24">
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
