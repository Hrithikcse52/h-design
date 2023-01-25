import React from 'react';
import styles from './HFlex.css';

interface HFlexProps {
  /** The value for the component to display */
  value?: string;
}

/** A simple component. */
export const HFlex = (props: HFlexProps) => {
  return (
    <div className={styles.hFlex}>This is a HFlex component {props.value}</div>
  );
};

export default HFlex;
