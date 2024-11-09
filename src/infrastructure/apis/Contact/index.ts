import { IContactRequest, IContactResponse } from './types';
import { useAxios } from '../api';

const { client } = useAxios();

export const Contact = () => {
  return {
    async sendInfo(payload: IContactRequest): Promise<IContactResponse> {
      const response = await client.post('/create', payload);
      return response.data;
    },
  };
};
