import React from 'react';
import Styled from 'styled-components';
import BookingForm from './BookingForm';

const StyledHeading = Styled.h2`
  font-size: 4rem;
  text-align: center;
  color: var(--color-text-dark);
  margin: 2rem 0;
`;

const StyledParagraph = Styled.p`
  color: var(--color-text-dark);
  text-align: center;
`;

export default function () {
  return (
    <div className="frow-container">
      <StyledHeading>
        Booking
      </StyledHeading>
      <StyledParagraph>
        <strong>Meetup</strong>
        {' '}
        start your event now.
      </StyledParagraph>

      <BookingForm />

    </div>
  );
}
