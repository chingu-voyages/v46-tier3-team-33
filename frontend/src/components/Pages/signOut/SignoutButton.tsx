import React from 'react';
import {useAuth} from './AuthContext';

const SignoutButton: React.FC = () => {
  const {signout} = useAuth();

  return (
    <button onClick={signout}>Sign Out</button>
  );
};

export default SignoutButton;
