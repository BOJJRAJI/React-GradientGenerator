import {Component} from 'react'
import {
  BgContainer,
  Heading,
  Text,
  Button,
  List,
  ButtonsContainer,
  Generate,
  Input,
  InputColorsContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirectionId: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  getGradient = () => {
    const {activeDirectionId, color1, color2} = this.state

    this.setState({
      gradientValue: `to ${activeDirectionId}, ${color1}, ${color2}`,
    })
  }

  render() {
    const {activeDirectionId, color1, color2, gradientValue} = this.state

    return (
      <BgContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Text>Choose Direction</Text>
        <ButtonsContainer>
          {gradientDirectionsList.map(item => (
            <List key={item.directionId} value={item.value}>
              <Button
                isActive={item.value === activeDirectionId}
                onClick={() => this.setState({activeDirectionId: item.value})}
              >
                {item.displayText}
              </Button>
            </List>
          ))}
        </ButtonsContainer>
        <Text>Pick the Colors</Text>
        <InputColorsContainer>
          <div>
            <Text>{color1}</Text>
            <Input
              value={color1}
              onChange={e => this.setState({color1: e.target.value})}
              id="input1"
              type="color"
              bgColor={color1}
            />
          </div>
          <div>
            <Text>{color2}</Text>
            <Input
              type="color"
              onChange={e => this.setState({color2: e.target.value})}
              value={color2}
              bgColor={color2}
            />
          </div>
        </InputColorsContainer>
        <Generate onClick={this.getGradient}>Generate</Generate>
      </BgContainer>
    )
  }
}

export default GradientGenerator
