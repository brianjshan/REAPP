// TODO: fix list coming in from top left corner in mobile

import { useRef, useState } from "react";
import styles from "../../styles/MobileNav.module.css";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function MobileNav() {
  const listRef = useRef();
  const [showNav, setShowNav] = useState(false);

  const hideList = (e) => {
    listRef.current.style.left = "-100vw";
    setShowNav(false);
  };

  const handleNav = (e) => {
    if (!showNav) {
      listRef.current.style.left = "0px";
      listRef.current.style.top = "90px";
      setShowNav(true);
    } else {
      hideList();
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className={styles.root}>
      <div className={styles.logo}>
        <a href="/">Brian J Han</a>
      </div>
      <input type="checkbox" id="click" className={styles.click} />
      <label htmlFor="click" className={styles.menuBtn}>
        {showNav ? (
          <CloseIcon onClick={handleNav} className={styles.bars} />
        ) : (
          <DehazeIcon onClick={handleNav} className={styles.bars} />
        )}
      </label>
      <ul className={styles.list} ref={listRef}>
        <li className={styles.listItem}>
          <a href="/search" className={styles.listItemLink} onClick={hideList}>
            SEARCH
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            href="/testimonials"
            className={styles.listItemLink}
            onClick={hideList}
          >
            TESTIMONIALS
          </a>
        </li>
        <li className={styles.listItem}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{ fontSize: "14pt" }}
          >
            About
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </li>
        <li className={styles.listItem}>
          <a href="/about" className={styles.listItemLink} onClick={hideList}>
            ABOUT ME
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="/contact" className={styles.listItemLink} onClick={hideList}>
            CONTACT ME
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            href="/calculator"
            className={styles.listItemLink}
            onClick={hideList}
          >
            MORTGAGE CALCULATOR
          </a>
        </li>
      </ul>
    </nav>
  );
}
