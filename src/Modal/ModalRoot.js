import React from "react";
import {findNodeHandle, View} from "react-native";

let ref = React.createRef()
let nodeHandle = null;

class ModalRoot extends React.Component {
  state={ready: false}

  componentDidMount() {
    nodeHandle = findNodeHandle(ref.current)
    this.setState({ready: true})
  }
  render() {
    return (
      <>
        {this.state.ready && this.props.children}
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}} ref={ref}></View>
      </>
    );
  }

}

const getModalRootHandle = () => nodeHandle;

export {ModalRoot, getModalRootHandle};