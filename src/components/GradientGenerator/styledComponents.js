import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size:  30px
  font-weight: bold;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const ColorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelEle = styled.label`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`

export const InputElement = styled.input`
  border: 0px;
  color: ${props => props.bgColor};
  background-color: transparent;
  height: 40px;
  width: 100px;
`

export const CustomButton = styled.button`
  border: none;
  background-color: #00c9b7;
  color: #1e293b;
  padding: 10px;
  border-radius: 7px;
`

export const CustomUnOrderedList = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`
export const paraElement = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
`
export const DirectionsDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`
export const ColorsPickersDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
`
