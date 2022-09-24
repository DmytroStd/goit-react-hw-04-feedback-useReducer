import { useReducer } from 'react';

import Section from './section/Section';
import Statistic from './statistic/Statistic';
import FeedbackButtons from './buttons/FeedbackButtons';
import Notification from './notification/Notification';
import styles from '../components/section/Container.module.css';

function feedbackReducer(state, action) {
  switch (action.type) {
    case 'positive':
      return { ...state, positive: state.positive + action.payload };

    case 'neutral':
      return { ...state, neutral: state.neutral + action.payload };

    case 'negative':
      return { ...state, negative: state.negative + action.payload };

    default:
      return;
  }
}

// function feedbackReducerDuble(state, action) {
//   switch (action.type) {
//     case 'positive':
//       return { ...state, positive: state.positive + 5 };

//     case 'neutral':
//       return { ...state, neutral: state.neutral + 5 };

//     case 'negative':
//       return { ...state, negative: state.negative + 5 };

//     default:
//       return;
//   }
// }

export const App = () => {
  const [state, dispatch] = useReducer(feedbackReducer, {
    positive: 0,
    neutral: 0,
    negative: 0,
  });

  const total = state.positive + state.neutral + state.negative;
  const positivePercentage = Math.round((state.positive / total) * 100);

  return (
    <>
      <div className={styles.container}>
        <Section title="please leave feedback" className={styles.hero__title}>
          <div className={styles.btn_box}>
            <FeedbackButtons
              state={['positive', 'neutral', 'negative']}
              feedbackReducer={btnName =>
                dispatch({ type: btnName, payload: 1 })
              }
              // feedbackReducerDuble={btnName => dispatch({ type: btnName })}
            />
          </div>
        </Section>

        {!total ? (
          <Notification message="there is no feedback" />
        ) : (
          <Section title="statistic" className={styles.secondary__title}>
            <Statistic
              positive={state.positive}
              neutral={state.neutral}
              negative={state.negative}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </div>
    </>
  );
};
