/** @jsx jsx */;

// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "@reach/router";
import { css ,jsx} from "@emotion/core";
import colors from './colors'

const Navbar = () => {
    return (<header
    css={css`
      background-color: ${colors.dark};;
      position: sticky;
      top: 0;
      z-index: 10;
    `}
  >
      <Link to="/">Adopt Me</Link>
      <span aria-label="logo" role="img">
        ❤
      </span>
    </header>
  );
};

export default Navbar;
