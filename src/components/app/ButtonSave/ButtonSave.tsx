import React, { useEffect, useImperativeHandle, useState } from 'react';
import styles from './ButtonSave.module.scss';

export interface IProps {
  children?: React.ReactNode;
}

const ButtonSave = React.forwardRef((props: IProps, _ref) => {
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

ButtonSave.displayName = 'ButtonSave';

export default ButtonSave;
