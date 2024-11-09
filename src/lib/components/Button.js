import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));
export const Button = ({btnText}) => {
  return(
    <div>
    <button onClick={() => {console.log("It worked!")}}>
      {btnText}
    </button>
    <Suspense fallback={<div></div>}>
        <LazyComponent />
    </Suspense>
    </div>
  )
}