import * as React from 'react';

interface EmailProps {
  firstName: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

