const React = require("react")
// const Nav = require("../components/Nav")
const DefaultLayout = require("../layout/Default");


class New extends React.Component {
  render() {
    return(
      <DefaultLayout title="Fruit Index Page"
      link="/fruits"
      text="Home">
        {/* <Nav link="/fruits" text="Home" /> */}
        {/* <h1>Create a New Fruit!</h1> */}
        {/* forms can only make GET and POST requests */}
        <form action="/fruits" method="POST">
          Name: <input type="text" name="name" />
          Color: <input type="text" name="color" />
          Is Ready To Eat: 
          <input 
            type="checkbox" 
            name="readyToEat" 
          /> 
          {/* after submiting all the info in the form goes to the request body/req.body */}
          <input type="submit" value="Create Fruit" />       
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New