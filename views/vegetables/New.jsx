const React = require('react')
const Nav = require('../components/Nav')
const DefaultLayout = require("../layout/Default");


class New extends React.Component {

    render(){
        return(
            <DefaultLayout title="Add New Vegetable Page"
            link="/vegetable"
            text="Home">
                {/* <h1> Create a New Vegetable </h1> */}
                <form action='/vegetables' method='POST'>
                    Name:<input type="text" name='name' />
                    <br />
                    Color: <input type="text" name='color' />
                    <br />
                    Is Ready To Eat:<input type="checkbox" name='readyToEat' />
                    <br></br>
                    <input type='submit' value='Create vegetables' />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New