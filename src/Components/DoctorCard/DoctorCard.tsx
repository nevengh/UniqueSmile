import React from 'react';
import './DoctorCard.css';

interface DoctorCardProps {
  DoctorImage: string;
  DoctorName: string;
  DoctorSpec: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ DoctorImage, DoctorName, DoctorSpec }) => {
  return (
    <div className='DoctorCard'>
      <img src={DoctorImage} alt={DoctorName} className='DoctorImage' />
      <div className="DoctorSpec">
        <h1>{DoctorName}</h1>
        <p>{DoctorSpec}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
