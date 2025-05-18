import { ButtonContainer, type ButtonVarient } from './Button.styles';

interface ButtonProps {
  varient?: ButtonVarient;
}

export function Button({varient = 'primary'}: ButtonProps) {

  return <ButtonContainer varient={varient}>Enviar</ButtonContainer>
}