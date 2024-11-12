import { useId } from 'react';
import clsx from 'clsx';
import BasicIcons from '../BasicIcons/BasicIcons';
import css from './CampersPageFiltersElements.module.css';
import { Field } from 'formik';

const CampersPageFiltersElements = ({
  listCheckboxes,
  type,
  classField,
  classLabel,
  classFieldSpecial,
  classLabelSpecial,
  classHidden,
  classList,
  classListSpecial
}) => {
  const id = useId();

  return (
    <>
      <ul className={clsx(classList, classListSpecial)}>
        {listCheckboxes.map((item, index) => {
          const { name, value } = item;
          let shouldRenderValue = Boolean(value);
            

          return (
            
              <li key={index}>
                <Field
                  className={clsx(classField, classFieldSpecial, classHidden)}
                  type={`${type}`}
                  name={name}
                  id={id + `-${name}-${index}`}
                  {...(shouldRenderValue ? { value: value } : {})}
                />
                <label
                  className={clsx(classLabel, classLabelSpecial)}
                  htmlFor={id + `-${name}-${index}`}
                >
                  {' '}
                  <BasicIcons
                    name={type === "checkbox"? `${name}`: `${value}`}
                    classNameSize={css.icon}
                    clasNameStroke={css.iconStroke}
                  />
                  {type === "checkbox"? name : item.label}
                </label>
              </li>
            
          );
        })}
      </ul>
    </>
  );
};

export default CampersPageFiltersElements;
