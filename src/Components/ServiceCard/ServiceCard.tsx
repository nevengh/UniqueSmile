import React from 'react';
import './ServiceCard.css'
interface ServiceCardProps{
  service_image:string;
  service_name:string;
  serviec_desc:string
}
const ServiceCard:React.FC<ServiceCardProps> = ({service_image,service_name,serviec_desc, ...props}) => {
  return (
    <div className='ServiceCard'{...props}>
      <img src={service_image} alt={service_name} />
      <div className="service_name">
        <h1>{service_name}</h1>
        <p className="service_description">{serviec_desc}</p>
      </div>
    </div>
  )
}

export default ServiceCard