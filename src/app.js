import { Text, Window, View, Button, hot } from "@nodegui/react-nodegui";
import { QIcon } from "@nodegui/nodegui";
import nodeguiIcon from "../assets/nodegui.jpg";
import React, { Component } from "react";
import { observer } from "mobx-react";

import store from "./store";

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(nodeguiIcon);

const windowHandler = {
  Close: () => {
    console.log("window closed hi");
  },
};

const buttonHandler = {
  clicked: () => {
    store.setTitleIndex();
  },
};

const Toggle = observer(() => (
  <View>
    <View>
      <Button id="toggleButton" on={buttonHandler}></Button>
    </View>
  </View>
));

const Header = () => (
  <View id="header">
    <Text id="logoText">NodeGUI Oh yeah</Text>
  </View>
);

const InnerApp = observer(() => {
  const buttonHandler = {
    clicked: () => {
      store.setTitleIndex();
    },
  };

  return (
    <Window
      windowIcon={winIcon}
      windowTitle={`Hello ${store.title}`}
      minSize={minSize}
      styleSheet={styleSheet}
      on={windowHandler}
      id="window"
    >
      <View style={containerStyle}>
        <Header />
        <Toggle />
        <View>
          <Text>Welcome to NodeGui</Text>
        </View>
        <Button text="change title" on={buttonHandler}></Button>
      </View>
    </Window>
  );
});

class App extends Component {
  render() {
    return <InnerApp />;
  }
}

const containerStyle = `
  flex: 1; 
`;

const styleSheet = `
  #flex {
    display: flex;
    flex-direction: row;
    width: "500px";
    flex-wrap: wrap;
    top: 20px;
  }
  #window {
    background: #c7dae0;
  }
  #header {
    justify-content: "space-evenly";
    background: #24476f;
    height: 80px;
    display: "flex";
    align-items: "center";
  }
  #logoText{
    color: #FFF;
    font-weight: bold;
  }
`;

export default hot(App);
