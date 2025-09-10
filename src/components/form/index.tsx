import React, {useEffect, useState} from 'react';
import type {FormProps} from "./types.js";
import Select from "@/components/input/fields/select/index.tsx";
import TextArea from "@/components/input/fields/textarea/index.tsx";
import Input from "@/components/input/fields/input/index.tsx";
import Button from "@/components/button/index.tsx";
import {useTranslation} from "react-i18next";
import {gVar} from "@/utils/gVar.js";

const Form: React.FC<FormProps> = (
  {
    fields,
    action,
    buttonProps = {
      type: 'submit',
      variant: 'solid',
      color: 'secondary',
      size: 'lg'
    },
    buttonPosition = 'right',
    ...props
  }) => {

  const {t} = useTranslation();

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    if (action) action();
  };

  return (
    <form onSubmit={handleSubmit} name={props.name || "form"} {...props}>
      <div className='p-4'>
        <div className="fields">
          {fields.length > 0 && Object.entries(fields).map(([key, field]): any => {
              const type = field?.type || 'text';
              const className = `my-2 ${field?.className || ''}`;
              switch (type) {
                case 'select':
                  return <Select key={key} {...field} className={className}/>;
                case 'textarea':
                  return <TextArea key={key} {...field} className={className}/>;
                default:
                  return <Input key={key} {...field} className={className}/>;
              }
            }
          )}
        </div>
        <div className={`btn ${gVar(`text.position.${buttonPosition}`)} mt-4`}>
          <Button>
            {buttonProps?.children || t('form.button.send')}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;