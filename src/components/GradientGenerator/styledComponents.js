import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #014f7b;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const Heading = styled.h1`
  font-size: 25px;
  color: white;
  font-weight: bold;
  font-family: 'Roboto';
`

export const Text = styled.p`
  font-size: 15px;
  color: #ffffff79;
  font-weight: bold;
  font-family: 'Roboto';
`

export const ButtonsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
`

export const List = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: #1e293b;

  font-size: 15px;
  width: 70px;
  font-weight: 700;
  font-family: 'Roboto';
  background-color: #ffffff;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`

export const InputColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 20%;
`

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  background-color: ${props => props.bgColor};
  border: none;
`
export const Generate = styled.button`
  border: none;
  padding: 10px;
  border-radius: 6px;
  background-color: #00c9b7;
  color: #1e293b;
  height: 50px;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 600;
`
