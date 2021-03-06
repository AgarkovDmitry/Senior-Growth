import Head from 'next/head'

import { Space, Typography, Collapse, Divider } from 'antd'

import Layout from 'components/Layout/Layout'

import styles from '../Topic.module.css'

const defaultOpenedSections = [
  'git-hooks',
  'pipelines',
  'environment',
]

const defaultOpenedBranchingStrategies = ['trunk', 'git-flow', 'github-flow']
const defaultOpenedReleaseStrategies = ['blue-green', 'rolling', 'canary']

export default function Git() {
  return (
    <Layout>
      <Head>
        <title>CI/CD/CD, Git</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Space direction='vertical' className={styles.rootCard}>
          <Typography.Title level={3}>CI/CD/CD, Git</Typography.Title>
          <Divider orientation='left' dashed={true}>
            CI/CD/CD
          </Divider>
          <Typography.Text>
            Continuous integration is an automatic process of ensuring proper
            quality of a developed feature before it's merged/deployed.
          </Typography.Text>
          <Typography.Text>
            Continuous delivery is the next step of CI, where after each merge
            changes can appear on some environments and at a certain timestamp
            the person will click the "Deploy" button and changes will go to the
            production environment.
          </Typography.Text>
          <Typography.Text>
            Continuous deployment is an even further step, where after each
            merge code is being deployed to production.
          </Typography.Text>

          <Collapse bordered={true} defaultActiveKey={defaultOpenedSections}>
            <Collapse.Panel header='Git Hooks' key='git-hooks'>
              <Typography.Text>
                There hooks allows us to run commands on developers' local
                environments. Common use-case is to run linter/pritier fixes on
                pre-commit hook. We also can add running typescript checks and
                running unit tests on pre-commit/pre-push hook. This is a good
                tool, but we still can use the <code>--no-verify</code> flag, so
                we still need to run the same checks on the external
                environment.
              </Typography.Text>
              <Divider orientation='left' dashed={true}>
                Ideal setup
              </Divider>
              <Typography.Text>
                Code styles auto-fixed and checks/type checks/unit tests into
                pre-commit code, as we should only be able to commit to validate
                code.
              </Typography.Text>
            </Collapse.Panel>
            <Collapse.Panel header='Pipelines' key='pipelines'>
              <Typography.Text>
                Pipeline is an important part of CI. There are a variety of
                different pipeline tools gitHub/gitLab/circleCI runners that can
                be used. Usually, we run static analyser tools first, e.g.
                code-style, typescript check, unit tests. Then we have to build
                our app/apps. Then we need to run more complex tests:
                integration/e2e.
              </Typography.Text>
              <Divider orientation='left' dashed={true}>
                Ideal setup
              </Divider>
              <Typography.Text>
                Code styles checks/type checks/unit tests/integration tests/e2e
                tests
              </Typography.Text>
            </Collapse.Panel>
            <Collapse.Panel
              header='Environment'
              key='environment'
            >
              There are few types of envs: Dev, Test, Preprod, Prod
            </Collapse.Panel>
          </Collapse>
          <Divider orientation='left' dashed={true}>
            Branching strategies
          </Divider>
          <Collapse
            bordered={true}
            defaultActiveKey={defaultOpenedBranchingStrategies}
          >
            <Collapse.Panel header='Trunk-based' key='trunk'>
              Only main, every developer works on the main branch.
            </Collapse.Panel>
            <Collapse.Panel header='Git flow' key='git-flow'>
              Main, Develop, Fix, Feature branches. Main is reserved for
              releases. Fixes can go directly into main, while features can only
              go to develop. We need to sync main and develop branches.
            </Collapse.Panel>
            <Collapse.Panel header='GitHub flow' key='github-flow'>
              Simplified version of GitFlow, without Develop and Fix branches.
            </Collapse.Panel>
          </Collapse>
          <Divider orientation='left' dashed={true}>
            Feature toggles
          </Divider>
          <Typography.Text>
            Instead of keeping big feature branch for a high amount of time and
            resolving conflicts, we can merge current progress on feature using
            feature flags. So we can hide this progress from users and still
            keep our feature accessible
          </Typography.Text>
          <Divider orientation='left' dashed={true}>
            Release strategies
          </Divider>
          <Collapse
            bordered={true}
            defaultActiveKey={defaultOpenedReleaseStrategies}
          >
            <Collapse.Panel header='Blue/Green strategy' key='blue-green'>
              We have 2 environments which change each other. While the first is
              in production, on the second we apply changes/testing and once it
              is ready we can replace the first one with the second.
            </Collapse.Panel>
            <Collapse.Panel header='Rolling strategy' key='rolling'>
              We apply changes to one node, after a certain time/condition to
              second and so on. The benefit of this strategy is that we can
              reduce the amount of not satisfied users.
            </Collapse.Panel>
            <Collapse.Panel header='Canary strategy(AB testing)' key='canary'>
              We show changes to a certain group of users. If it is successful
              we will apply it to all of them. That will allow us reduce amount
              of non-sutisfied users.
            </Collapse.Panel>
          </Collapse>
          <Divider orientation='left' dashed={true}>
            Merge vs Rebase
          </Divider>
          <Typography.Text>
            Merge is a straightforward way of gitflow, but has issues with debug
            with bisect and not clear history.
          </Typography.Text>
          <Typography.Text>
            Rebase allows us to track history, every time a branch is merged.
            Target branch history gets rewritten, therefore we have clear
            history. As a downside we will need to squash commits or resolve
            conflicts for every single commit. Also it's hard to work with, if
            force push is prohibited.
          </Typography.Text>
        </Space>
      </main>
    </Layout>
  )
}
