declare module 'before-after-react' {
    import React from 'react';
  
    interface BeforeAfterReactProps {
      firstImgSrc: string;
      secondImgSrc: string;
      cursor?: string;
      containerClass?: string;
    }
  
    const BeforeAfterReact: React.FC<BeforeAfterReactProps>;
    export default BeforeAfterReact;
  }
  