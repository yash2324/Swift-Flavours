import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: { name: "dummy", location: "dummy" },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/yash2324");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { contact } = this.props;
    return (
      <div className="user-container">
        <img src={avatar_url} />
        <h2>{name}</h2>
        <h2>{location}</h2>
        <h2>{contact}</h2>
      </div>
    );
  }
}
export default UserClass;
