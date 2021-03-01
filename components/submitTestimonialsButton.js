import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Rating from './ratingButton';
import styles from '../styles/testimonials.module.css';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SubmitTestimonialsButton() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [testimonialText, setTestimonialText] = useState('');


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleText = (e) => {
    setTestimonialText(e.target.value);
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id={styles.testimonials_form_title}>Testimonial Form</h2>
      <form id={styles.testimonials_form}>
        <label className={styles.form_entry}>
          Local Knowledge Rating:
          <Rating/>
        </label>
        <label className={styles.form_entry}>
          Responsiveness:
          <Rating/>
        </label>
        <label className={styles.form_entry}>
          Process Expertise Rating:
          <Rating/>
        </label>
        <label className={styles.form_entry}>
          Name:
          <input type='text' name='name' />
        </label>
        <label className={styles.form_entry, styles.testimonials_text}>
          Testimonial:
          <textarea id={styles.textBox} placeholder={'How was your experience with Brian J Han?'} value={testimonialText} onChange={handleText}/>
        </label>
        <div className={styles.form_entry} >
          <input id={styles.submit} type='submit' value='Submit'/>
          <button id={styles.close} type='button' onClick={handleClose}>Close</button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Submit a Testimonial!
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
