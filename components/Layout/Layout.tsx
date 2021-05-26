import Link from 'next/link'
import { useRouter } from 'next/router'

import { Layout, Menu, Card } from 'antd'

import { topics } from 'data/topics'

import styles from './Layout.module.css'

const { Header, Content, Sider } = Layout

interface Props {
  children: React.ReactNode
}

function ProjectLayout({ children }: Props) {
  const { route } = useRouter()

  return (
    <Layout className={styles.layout}>
      <Sider>
        <div className={styles.logo} />
        <Menu theme='dark' defaultSelectedKeys={[route]}>
          {topics.map((topic, index) => (
            <Menu.Item key={topic.id}>
              <Link href={`/topics/${topic.id}`}>
                <a>
                  {index + 1}. {topic.name}
                </a>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header>My senior growth blog</Header>
        <Content className={styles.content}>
          <Card>{children}</Card>
        </Content>
      </Layout>
    </Layout>
  )
}

export default ProjectLayout
