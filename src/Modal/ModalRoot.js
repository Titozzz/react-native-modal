import React from "react";
import {findNodeHandle} from "react-native";

let ref = React.createRef()

class ModalRoot extends React.Component {
  render() {
    return (
      <>
        {this.props.children}
        <View ref={ref}></View>
      </>
    );
  }
}

const getModalRootHandle = () => {
  if (ref.current) {
    return findNodeHandle(ref.current);
  }
  return null;
}

export {ModalRoot, getModalRootHandle};