import React from "react";
import { Link } from 'react-router-dom';

export default class NotFoundPage extends React.Component {
  render(): React.ReactElement {
    return (
      <>
        <h1>Page Not Found</h1>
        <div>404</div>
        <Link to="/">GO BACK TO HOME</Link>
      </>
    );
  }
}
