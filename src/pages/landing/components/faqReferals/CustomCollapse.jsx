import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

export const questionsAndAnswers = [
  {
    question: 'How do I transfer money?',
    answer: 'To transfer money, you need to...',
  },
  {
    question: 'How do I access my account information and activity?',
    answer: 'To access your account information and activity, you need to...',
  },
  {
    question: 'How do I make Payments?',
    answer: 'To make payments, you need to...',
  },
  {
    question: 'What security features are in place?',
    answer: 'The security features in place are...',
  },
];

const CustomCollapse = ({ question, answer, activeKey, onChange }) => {
  return (
    <Collapse
      accordion
      ghost
      className="custom-collapse"
      activeKey={activeKey}
      onChange={onChange}
    >
      <Panel header={question} key="1" className="custom-panel">
        <p>{answer}</p>
      </Panel>
    </Collapse>
  );
};

export default CustomCollapse;
