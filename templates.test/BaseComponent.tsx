import React, { useEffect, useImperativeHandle, useState } from 'react';
import styles from './styles.module.scss';

export interface IProps {
  children?: React.ReactNode;
}

const BaseComponent = React.forwardRef((props: IProps, _ref) => {
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
      <h1>{myState}</h1>
      <button
        className={styles.bg_color}
        onClick={() => setMyState('Hello Universe')}
      >
        Hello Universe
      </button>
    </div>
  );
});

BaseComponent.displayName = 'BaseComponent';

export default BaseComponent;
