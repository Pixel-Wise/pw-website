import { useMutation } from '@tanstack/react-query';

import { Contact } from '@infrastructure/apis/Contact';
import { IContactRequest } from '@infrastructure/apis/Contact/types';

export function useContact() {
  const { sendInfo } = Contact();

  const sendContact = useMutation({
    mutationFn: (payload: IContactRequest) => sendInfo(payload),
    onSuccess: () => {},
    onError: () => {},
  });

  return { sendContact };
}
