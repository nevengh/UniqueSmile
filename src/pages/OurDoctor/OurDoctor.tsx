import './OurDoctor.css';
import Darren from '../../assets/358A4629.jpg';
import Erick from '../../assets/358A5103.jpg';
import Lucy from '../../assets/358A4785.jpg';
import DoctorCard from '../../Components/DoctorCard/DoctorCard';

const OurDoctor = () => {
  const doctors = [
    {
      id: 1,
      image: Darren, // تصحيح اسم الخاصية
      name: "Darren Kominsky",
      spec: "Dental Surgeon"
    },
    {
      id: 2,
      image: Erick, // تصحيح اسم الخاصية
      name: "Erick Stone",
      spec: "Orthodontist Specialist"
    },
    {
      id: 3,
      image: Lucy, // تصحيح اسم الخاصية
      name: "Lucy Lee Curtis",
      spec: "Assistant"
    }
  ];

  return (
    <div className='OurDoctor m-1'>
      <h1 className="OurDoctorHeading">Our Doctors</h1>
      <div className="OurDoctor_Container d-flex justify-center align-center flex-wrap g-1 m-1">
        {
          doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              DoctorImage={doctor.image} // تصحيح تمرير الخاصية
              DoctorName={doctor.name}
              DoctorSpec={doctor.spec}
            />
          ))
        }
      </div>
    </div>
  );
};

export default OurDoctor;
