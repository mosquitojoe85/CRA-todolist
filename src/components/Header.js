import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  handleCloseList() {
    this.setState((_state, _props) => ({ visible: false }));
  }

  renderMobileList() {
    if (!this.state.visible) return false;
    return (
      <div className="menu_mobild_list">
        <Link
          to="/"
          onClick={() => this.setState({ visible: false })}
        >
          <div className="menuItem">nav1</div>
        </Link>
        <Link
          to="/"
          onClick={() => this.setState({ visible: false })}
        >
          <div className="menuItem">nav2</div>
        </Link>
      </div>
    );
  }

  render() {
    const { style } = this.props;
    return (
      <div className="app_header" style={style}>
        <div className="header_block">
          <Link to="/">
            <h2>React App</h2>
          </Link>
          <div className="menu_block">
            {/* PC */}
            <div className="menu">
              <Link to="/" >
                <div className="menuItem">nav1</div>
              </Link>
              <Link to="/" >
                <div className="menuItem">nav2</div>
              </Link>
            </div>
            {/* mobile */}
            <div
              role="button"
              tabIndex={0}
              className="menu_mobile_btn_wrapper"
              onClick={() => this.setState((state, _props) => ({ visible: !state.visible }))}
              onKeyUp={() => this.setState((state, _props) => ({ visible: !state.visible }))}
            >
              Menu
            </div>
          </div>
        </div>
        {this.renderMobileList()}

      </div>
    );
  }
}

export default MenuBar;
