
// import { useState } from 'react';
// import { useMediaQuery } from '@mui/material';
// import CampersRating from '../CampersRating/CampersRating';
// import CampersPrice from '../CampersPrice/CampersPrice';
// import BasicModalWindow from '../BasicModalWindow/BasicModalWindow';
// import css from './CamperPageDetails.module.css';

// const CamperPageDetails = ({ item }) => {
//   const { name, rating, reviews, location, gallery, description, price } = item;
//   const [isOpen, setIsOpen] = useState(false);
//   const [imgForModal, setImgForModal] = useState({ linkImg: '', altImg: '' });
 
//   const onOpen = () => {
//     setIsOpen(true);
//   };

//   const onClose = () => {
//     setIsOpen(false);
//   };

//   const handleClick = event => {
//     const imgFromAttribyte = event.target.dataset.img;
//     const altImage = event.target.alt;
//     if (imgFromAttribyte) {
//       setImgForModal({
//         ...imgForModal,
//         linkImg: imgFromAttribyte,
//         altImg: altImage,
//       });
//       onOpen();
//     } else {
//       console.log('there is no image for modalWindow');
//     }
//   };

//   const { linkImg, altImg } = imgForModal;

//   return (
//     <div className="container">
//       <h1 className={css.campersPageDetailsHeadline}>{name}</h1>
//       <div className={css.campersPageDetailsRating}>
//         <CampersRating rating={rating} reviews={reviews} location={location} />
//       </div>
//       <div className={css.campersPageDetailsPrice}>
//         <CampersPrice price={price} />
//       </div>
//       <ul className={css.campersPageDetailsList}>
//         {gallery.map((item, index) => {
//           return (
//             <li className={css.itemContainerImage} key={index}>
//               <img
//                 className={css.itemImg}
//                 src={item.thumb}
//                 alt={`Photo #${index + 1} of camper ${name.toUpperCase()}`}
//                 onClick={handleClick}
//                 data-img={item.original}
//               />
//             </li>
//           );
//         })}
//       </ul>
//       <p className={css.campersPageDetailDescription}>{description}</p>

//       <BasicModalWindow isOpen={isOpen} onClose={onClose}>
//         <p className={css.camperPageDetailsModalText}>{imgForModal.altImg}</p>
//         <div className={css.camperPageDetailsContainerModalImage}>
//           <img
//             className={css.camperPageDetailsModalImage}
//             src={linkImg}
//             alt={altImg}
//           />
//         </div>
//       </BasicModalWindow>
//     </div>
//   );
// };

// export default CamperPageDetails;


import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import CampersRating from '../CampersRating/CampersRating';
import CampersPrice from '../CampersPrice/CampersPrice';
import BasicModalWindow from '../BasicModalWindow/BasicModalWindow';
import css from './CamperPageDetails.module.css';

const CamperPageDetails = ({ item }) => {
  const { name, rating, reviews, location, gallery, description, price } = item;
  const [isOpen, setIsOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState({ linkImg: '', altImg: '' });
  const isLargeScreen = useMediaQuery('(min-width:1440px)');

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  
  const getModalData = event => {
    const imgFromAttribyte = event.target.dataset.img;
    const altImage = event.target.alt;
    if (imgFromAttribyte) {
      setDataForModal({
        ...dataForModal,
        linkImg: imgFromAttribyte,
        altImg: altImage,
      });
    } else {
      console.log('there is no image for modalWindow');
    }
  };

  const handleOpenModal = (event) => {
    if (isLargeScreen) {
      getModalData(event);
      onOpen();
    }
  };

  useEffect(() => {
    if (!isLargeScreen && isOpen) {
      setIsOpen(false);
    }
  }, [isLargeScreen, isOpen]);

  const { linkImg, altImg } = dataForModal;

  return (
    <div className="container">
      <h1 className={css.campersPageDetailsHeadline}>{name}</h1>
      <div className={css.campersPageDetailsRating}>
        <CampersRating rating={rating} reviews={reviews} location={location} />
      </div>
      <div className={css.campersPageDetailsPrice}>
        <CampersPrice price={price} />
      </div>

      <ul className={css.campersPageDetailsList}>
        {gallery.map((item, index) => {
          return (
            <li className={css.itemContainerImage} key={index}>
              <img
                className={css.itemImg}
                src={item.thumb}
                alt={`Photo #${index + 1} of camper ${name.toUpperCase()}`}
                onClick={handleOpenModal}
                data-img={item.original}
                width="290"
                height="163"
              />
            </li>
          );
        })}
      </ul>

      <p className={css.campersPageDetailDescription}>{description}</p>

      <BasicModalWindow isOpen={isOpen} onClose={onClose}>
        <p className={css.camperPageDetailsModalText}>{altImg}</p>
        <div className={css.camperPageDetailsContainerModalImage}>
          <img
            className={css.camperPageDetailsModalImage}
            src={linkImg}
            alt={altImg}
          />
        </div>
      </BasicModalWindow>
    </div>
  );
};

export default CamperPageDetails;