import {Component} from 'react'
import {
  AppContainer,
  Heading,
  InputsContainer,
  ColorInputContainer,
  InputElement,
  CustomButton,
  CustomUnOrderedList,
  ResponsiveContainer,
  ColorValue,
  ColorsPickersDescription,
  DirectionsDescription,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstInputColor: '#8ae323',
    secondInputColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
    direction: gradientDirectionsList[0].value,
  }

  getFirstInputColor = event => {
    this.setState({firstInputColor: event.target.value})
  }

  getSecondInputColor = event => {
    this.setState({secondInputColor: event.target.value})
  }

  generateGradient = () => {
    const {firstInputColor, secondInputColor, direction} = this.state
    this.setState({
      gradientValue: `to ${direction}, ${firstInputColor}, ${secondInputColor}`,
    })
  }

  changeDirection = value => {
    this.setState({direction: value})
  }

  render() {
    const {
      firstInputColor,
      secondInputColor,
      gradientValue,
      direction,
    } = this.state
    console.log(firstInputColor)
    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionsDescription>Choose Direction</DirectionsDescription>
          <CustomUnOrderedList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                changeDirection={this.changeDirection}
                isActive={direction === eachDirection.value}
              />
            ))}
          </CustomUnOrderedList>
          <ColorsPickersDescription>Pick the Colors</ColorsPickersDescription>
          <InputsContainer>
            <ColorInputContainer>
              <ColorValue>{firstInputColor}</ColorValue>
              <InputElement
                id="input1"
                type="color"
                bgColor={firstInputColor}
                onChange={this.getFirstInputColor}
                value={firstInputColor}
              />
            </ColorInputContainer>
            <ColorInputContainer>
              <ColorValue>{secondInputColor}</ColorValue>
              <InputElement
                id="input2"
                type="color"
                bgColor={secondInputColor}
                onChange={this.getSecondInputColor}
                value={secondInputColor}
              />
            </ColorInputContainer>
          </InputsContainer>
          <CustomButton type="button" onClick={this.generateGradient}>
            Generate
          </CustomButton>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default GradientGenerator
