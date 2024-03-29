import React, { useState, Fragment } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import Moment from 'react-moment';
import ImageGallery from './ImageGallery';
import './QA.css';

const Answer = props => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Fragment>
      <Typography variant='body1'>{props.answer.body} </Typography>
      {props.answer.photos.length > 0 ? (
        <ImageGallery photos={props.answer.photos} />
      ) : (
        <Fragment />
      )}
      <Grid container direction='row' justify='flex-start' alignItems='center'>
        <Typography variant='subtitle2'>
          by{' '}
          <span
            className={
              props.answer.answerer_name.toLowerCase() == 'seller'
                ? 'seller'
                : ''
            }>
            {props.answer.answerer_name}
          </span>
          |
          <Moment format='MM/DD/YYYY' date={props.answer.date} />| Helpful?
        </Typography>
        <div
          className='qa-put-option'
          disabled={disabled}
          onClick={() => {
            props.voteAnswer(props.answer.answer_id);
            setDisabled(!disabled);
          }}>
          Yes ({+props.answer.helpfulness})
        </div>
        <Typography component='h4'> | </Typography>
        <div
          className='qa-put-option'
          text-transform='none'
          onClick={() => {
            props.reportAnswer(props.answer.answer_id);
          }}>
          Report
        </div>
      </Grid>
    </Fragment>
  );
};

export default Answer;
