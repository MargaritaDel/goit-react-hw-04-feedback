
import PropTypes from 'prop-types';
import { ContainerButtons, Button } from './FeedbackOptions.styled';



const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ContainerButtons>
    {options.map(option => (
      <Button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </ContainerButtons>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions;