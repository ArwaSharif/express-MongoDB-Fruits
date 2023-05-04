const React = require("react");
const Nav = require("../components/Nav");
const DefaultLayout = require("../layout/Default");

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <DefaultLayout title="Fruit Index Page"
      link="/vegetable/new"
      text="Create a Vegetable"
      >
        {/* <h1>Vegetables Index Page</h1> */}
        {/* <Nav link="/vegetables/New" text="Create a Vegetable" />
        <Nav  /> */}
        <ul>
          {vegetables.map((vegetable, i) => {
            return (
              <li>
                The{" "}
                <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is{" "}
                {vegetable.color} <br></br>
                {vegetable.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                <br />
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
