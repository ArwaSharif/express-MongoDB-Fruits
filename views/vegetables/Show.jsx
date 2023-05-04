const React = require("react");
const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
  render() {
    const vegetable = this.props.vegetable;
    return (
      <DefaultLayout title="Vegetable Show Page" link="/vegetable" text="Home">
        {/* <h1> Show Page </h1> */}
        The {vegetable.name} is {vegetable.color} <br />
        {vegetable.readyToEat
          ? "Its is ready to eat"
          : "It is not ready to eat... Cant touch this"}
      </DefaultLayout>
    );
  }
}

module.exports = Show;
