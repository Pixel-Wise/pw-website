import * as Yup from 'yup';

export interface IContactForm {
  name: string;
  email: string;
  message: string;
  subject: string;
  phone: string;
}

export const defaultValues: IContactForm = {
  name: '',
  email: '',
  message: '',
  subject: '',
  phone: '',
};

export const validationSchema: Yup.ObjectSchema<IContactForm> =
  Yup.object().shape({
    name: Yup.string().required('El nombre es requerido'),
    email: Yup.string().required('El email es requerido'),
    message: Yup.string().required('El mensaje es requerido'),
    subject: Yup.string().required('El asunto requerido'),
    phone: Yup.string().required('El teléfono requerido'),
  });
