import React, { useEffect } from 'react';
import { bool, func, string } from 'prop-types';
import { cssTransition, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css';


import { TextWrapper, Text} from './styled';
import { Icon } from '../AppsByHostHeader/styled';

const Fade = cssTransition({
  enter: 'custom-fadeInDown',
  exit: 'custom-fadeOutUp',
  duration: 500
});

const Toast = ({ showToast, messageKey, onClose  }) => {

  useEffect(() => {
    if (showToast) {
      toast(<Message />, {
        onClose,
        className: 'custom-background',
        containerId: 'custom-toast-container',
      });
    }
  }, [showToast]);
  
  
  const Message = () => (
  
          <TextWrapper>
            <Icon className={'material-icons'} >
              'check_circle'
            </Icon>
            <Text>{messageKey}</Text>
            <Icon className={'material-icons'} onClick={onClose}>
              'close'
            </Icon>
          </TextWrapper>
  
  );

  return (
    <ToastContainer
      containerId={'custom-toast-container'}
      autoClose={2500}
      draggable
      position={toast.POSITION.TOP_CENTER}
      closeButton={false}
      newestOnTop
      closeOnClick
      pauseOnHover={false}
      hideProgressBar
      transition={Fade}
      type={'success'}
    />
  );
};

Toast.propTypes = {
  showToast: bool,
  messageKey: string,
  onClose: func
};

export { Toast };
