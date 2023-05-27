import {ListElement, ButtonElement} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, changeDirection, isActive} = props
  const {value, displayText} = directionDetails

  const onChangeDirection = () => {
    changeDirection(value)
  }
  return (
    <ListElement>
      <ButtonElement
        type="button"
        isActive={isActive}
        onClick={onChangeDirection}
      >
        {displayText}
      </ButtonElement>
    </ListElement>
  )
}

export default GradientDirectionItem
