const React = require("react");
const Nav = require("../components/Nav");
const DefaultLayout = require("../layout/Default");

class Index extends React.Component {
  render() {
    const { fruits } = this.props;
    return (
      <DefaultLayout
        title="Fruit Index Page"
        link="/fruits/new"
        text="Create a fruit"
      >
        {/* <h1>Fruits Index Page</h1> */}
        {/* <Nav link="/fruits/new" text="Create a Fruit"/> */}
        <ul>
          {fruits.map((fruit, i) => {
            return (
              <li key={i}>
                The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is{" "}
                {fruit.color} <br></br>
                {fruit.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                <br />
                {/* Link to the specific fruit edit page */}
                {/* we access the ._id through thr req.params.id */}
                <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
                {/* forms can only make GET and POST requests */}
                {/* this is the delete btn 
                            it's a form bc we need to make a request to our server
                            Can't use handleClick in server-side app */}
                {/* the ?_method=DELETE using methodOverridwill ask the browser to treat it as delete*/}
                <form
                  action={`/fruits/${fruit._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                  {/* if submit clicked will send a message to the delete route */}
                </form>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
