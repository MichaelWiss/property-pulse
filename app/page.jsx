import React from 'react';
import Link from 'next/Link';

const HomePage = () => {
  return (
    <div>
     <h1 className='text-3xl'>Welcome</h1>
     <Link href='/properties'>Go to Properties</Link>
    </div>
  );
}

export default HomePage;