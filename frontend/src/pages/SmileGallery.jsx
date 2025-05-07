import React from 'react';
import '../styles/pages/SmileGallery.css'; // Assuming you'll create a separate CSS file for styling

const SmileGallery = () => {
  const galleryItems = [
    {
      id: 1,
      beforeImage: 'https://t3.ftcdn.net/jpg/02/59/74/54/360_F_259745473_oLOFaFIbdKdRpVBCXc9cZpxGnm81HfYv.jpg', // Replace with your actual image paths
      afterImage: 'https://www.smile-dentalcare.co.uk/wp-content/uploads/teeth-whitening-after-treatment.jpg',
      description: 'Smile makeover after dental implants.',
    },
    {
      id: 2,
      beforeImage: 'https://www.artofmoderndentistry.com/wp-content/uploads/2024/03/gum-disease-prevention.jpg',
      afterImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/06-10-06smile.jpg/800px-06-10-06smile.jpg',
      description: 'Before and after of gum disease treatment.',
    },
    {
      id: 3,
      beforeImage: 'https://puredentalhealth.com/wp-content/uploads/2020/06/broken-tooth2.jpg',
      afterImage: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7202K6_infvHlzeJQg2PBo1tl-UWJNS1PA&s',
      description: 'Restorative dentistry to repair chipped teeth.',
    },
    {
      id: 4,
      beforeImage: 'https://www.gorgeoussmiles.com.au/wp-content/uploads/2022/01/Teeth-Cleaning-Before-and-After-7-1.jpg',
      afterImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GEXCJnrEvfVXyl1kAZ4FUF7B7snbXV-xKTSIzocQe15NVe66UK4dU9L-fWR8EYCyZbQ&usqp=CAU',
      description: 'Dental whitening results.',
    },
    // Add more items as needed
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">Smile Gallery</h1>
      <p className="gallery-intro">
        Take a look at some of the incredible transformations achieved through our dental services.
      </p>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <div className="image-container">
              <img src={item.beforeImage} alt="Before" className="gallery-image" />
              <img src={item.afterImage} alt="After" className="gallery-image after" />
            </div>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmileGallery;
