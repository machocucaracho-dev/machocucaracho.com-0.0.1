import React from "react";
// import Header component from the semantic-ui-react
import { Header, Button } from "semantic-ui-react";
import "./header.css";

//We are using the Header component from the semantic-ui-react.
function AppHeader() {
  return (
    <div>
      <Header as="h2" block>    
        The Header Component
        <Button content='Standard' basic />
        <Button basic color='red' content='Red' />
      </Header>
    </div>
  );
}

export default AppHeader;



