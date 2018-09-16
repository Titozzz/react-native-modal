import * as React from "react";
// import Portal from "../Portal/Portal";
import Modal from "./Modal";
import { createPortal } from "react-native/Libraries/Renderer/shims/ReactNative";
import { getModalRootHandle } from './ModalRoot';

class ModalWrapper extends React.Component {
  render() {
    return createPortal(<Modal {...this.props} />, getModalRootHandle());
  }
}

export default ModalWrapper;
