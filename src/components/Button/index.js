import { ButtonContainer, ButtonContainerBigger, ButtonContainerOrange, ButtonContainerLighter } from "./styles";

const Button = ({ label, onClick, style }) => {
  if (style === "normal") {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    )
  }
  else if (style === "orange") {
    return (
      <ButtonContainerOrange onClick={onClick}>
        {label}
      </ButtonContainerOrange>
    )
  }
  else if (style === "lighter") {
    return (
      <ButtonContainerLighter onClick={onClick}>
        {label}
      </ButtonContainerLighter>
    )
  }
  else {
    return (
      <ButtonContainerBigger onClick={onClick}>
        {label}
      </ButtonContainerBigger>
    )
  }
}

export default Button;