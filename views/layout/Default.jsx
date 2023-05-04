const React = require("react");
const Nav = require("../components/Nav")

// if more than one nav in a page, ex: home, about, contact. Need to map over an array and pass an anchor tag
class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title> {this.props.title}</title>
          {/* writing as if we are in the public folder path */}
          <link rel="stylesheet" href="./css/app.css" />
        </head>
        <body>
          <Nav link={this.props.link} text={this.props.text} />
          <h1>{this.props.title}</h1>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
