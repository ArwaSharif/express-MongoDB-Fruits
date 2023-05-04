const React = require("react");
const DefaultLayout = require("../layout/Default");

class Edit extends React.Component {
  render() {
    //grabbing the fruit giving to this page by the edit route on the server
    const fruit = this.props.fruit
    return (
      <DefaultLayout
        title="Edit Page"
        //below nav properties
        link="/fruits"
        text="Home Page"
      >
        {/* use the fruit info to give the inputs a defaultValue for a nicer user experience */}
        {/* action =making a request to this specific route "id" */}
        {/* adding ? querey param then the query key equaling to the method.
        the actual method is post put the qureey param will override it to PUT*/}
        <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST" >
          Name: <input type="text" name="name" defaultValue={fruit.name}/>
          Color: <input type="text" name="color" defaultValue={fruit.color} />
          Is Ready To Eat:
          {/* conditionally rendering the checkbox input to make it check by default or not */}
          { this.props.fruit.readyToEat? 
          <input type="checkbox" name="readyToEat" defaultChecked /> 
          :
           <input type="checkbox" name="readyToEat"/> }

          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;