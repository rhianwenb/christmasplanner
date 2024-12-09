import React from 'react';
import { SignIn } from '@clerk/nextjs';


export default function Page() {

  return (

    <div className="items-center">
        <SignIn 
              appearance={{
                variables: {
                  // colorBackground: '#E7E5E4',
                  colorBackground: '#E5E5E5',
                  fontSize: '1rem',
                  borderRadius: '0rem',
                },
              }}/>
    </div>
  )
}