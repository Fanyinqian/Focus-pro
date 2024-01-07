import React, { type FC } from 'react';

const Foo: FC<{ title: string }> = (props) => <h3>{props.title}</h3>;

export default Foo;
