import { FormEvent, FormEventHandler, ReactNode, PropsWithoutRef } from "react";

type FormProps = PropsWithoutRef<any>;

export default FormProps;

/* interface FormProps {
  form?: string;
  label?: ReactNode | string;
  name?: string;
  type?: string;
  placeholder?: ReactNode | string;
  autoFocus?: boolean;
  required?: boolean;
  onChange?: FormEventHandler<HTMLInputElement>;
  detail?: ReactNode | string;

  method?: string;
  onSubmit?: (event: FormEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}
 */
