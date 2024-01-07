/* eslint-disable react/button-has-type */
import React, { type FC } from 'react';

const Hello: FC<{ title: string }> = (props) => (
  <>
    <button type="reset">{props.title}</button>
  </>
);

export default Hello;
