import { Collapse, Space } from 'antd'

const { Panel } = Collapse

interface Question {
  question: string
  answer?: string
  children?: Question[]
}

interface Props {
  questions: Question[]
}

export default function QuestionsBlock({ questions }: Props) {
  return (
    <Collapse bordered={false} defaultActiveKey={[]}>
      {questions.map((question) => (
        <Panel header={question.question} key={question.question}>
          <Space direction='vertical' style={{ width: '100%' }}>
            {question.answer}

            {question.children && (
              <QuestionsBlock questions={question.children} />
            )}
          </Space>
        </Panel>
      ))}
    </Collapse>
  )
}
