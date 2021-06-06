import { Collapse, Space } from 'antd'

const { Panel } = Collapse

interface Question {
  question: string
  answer?: React.ReactNode
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
            <div>{question.answer}</div>

            {question.children && (
              <QuestionsBlock questions={question.children} />
            )}
          </Space>
        </Panel>
      ))}
    </Collapse>
  )
}
