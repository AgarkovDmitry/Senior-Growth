import Link from 'next/link'
import { useRouter } from 'next/router'

import { Layout, Menu, Card, Progress } from 'antd'

import { topics } from 'data/topics'

import styles from './Layout.module.css'

const { Content, Sider } = Layout

interface Props {
  children: React.ReactNode
}

const percent = Number(
  ((100 * topics.filter((t) => t.percent === 100).length) / topics.length).toFixed(0)
)

function ProjectLayout({ children }: Props) {
  const { route, isReady } = useRouter()

  if (!isReady) {
    return null
  }

  return (
    <Layout className={styles.layout}>
      <Sider>
        <div className={styles.progress}>
          <Progress percent={percent} />
        </div>
        <Menu theme='dark' defaultSelectedKeys={[route]}>
          {topics.map(
            (topic, index) =>
              topic.percent && (
                <Menu.Item key={`/topics/${topic.id}`}>
                  <Link href={`/topics/${topic.id}`}>
                    <a>
                      {index + 1}. {topic.name}
                    </a>
                  </Link>
                </Menu.Item>
              )
          )}
        </Menu>
      </Sider>
      <Layout>
        <Content className={styles.content}>
          <Card>{children}</Card>
        </Content>
      </Layout>
    </Layout>
  )
}

export default ProjectLayout
