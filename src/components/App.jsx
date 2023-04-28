
import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

const App= () =>   {
 const [good, setGood] = useState (0);
 const [neutral, setNeutral] = useState (0);
 const [bad, setBad] = useState (0);
  


 const handleLeaveFeedback = option => {
  switch (option) {
    case 'good':
      setGood(prevGood => prevGood + 1);
      break;
      case 'neutral':
      setNeutral(prevNeutral => prevNeutral + 1);
      break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
        default:
          return;
};
  };

  const countTotalFeedback =() =>{
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage=() =>{
    return Math.round(good / countTotalFeedback() * 100)
  };

    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();


  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Section title="Statistics">
          <Notification message="There is no feedback" />
        </Section>
      )}
    </>
  );
}
export default App;