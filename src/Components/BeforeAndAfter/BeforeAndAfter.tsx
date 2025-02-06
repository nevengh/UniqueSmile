
import slide2 from '../../assets/before_image.png'
import slide1 from '../../assets/after_image.png'
import BeforeAfterReact from 'before-after-react';
import './BeforeAndAfter.css'
function BeforeAndAfter() {
  return (
    <div className="BeforeAndAfter m-1">
      <BeforeAfterReact
      firstImgSrc={slide1}
      secondImgSrc={slide2}
      cursor="pointer"
      containerClass="before-and-after"
    />
    </div>
  );
}

export default BeforeAndAfter;
