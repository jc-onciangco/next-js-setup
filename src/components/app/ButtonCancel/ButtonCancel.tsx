import React, { useEffect, useImperativeHandle, useState } from 'react';
import styles from './ButtonCancel.module.scss';

export interface IProps {
  children?: React.ReactNode;
}

const ButtonCancel = React.forwardRef((props: IProps, _ref) => {
  const { children }: IProps = props;
  const [myState, setMyState] = useState('Hello World');
  useEffect(() => {
    //mounted

    return () => {
      //unmounted
    };
  }, [myState]);

  //to expose states and methods to parent
  useImperativeHandle(_ref, () => ({
    myState,
  }));

  return (
    <div>
    </div>
  );
});

ButtonCancel.displayName = 'ButtonCancel';

export default ButtonCancel;
