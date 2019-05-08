import * as React from 'react';
import * as classnames from 'classnames';
import * as css from './Home.css';
// import { Editor } from '@atlaskit/editor-core';

export const Home: React.FunctionComponent = props => (
  <div className={classnames('test', css.home)}>
    {/* <Editor /> */}
  </div>
);
