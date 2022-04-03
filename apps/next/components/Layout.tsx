import {
  TopAppBar,
  IconButton,
  ColorScheme,
  NavDrawer,
  NavBar,
  Button,
} from '@literal-ui/core'
import { MdCheck } from 'react-icons/md'
import { RiGithubFill } from 'react-icons/ri'

const sections = [
  {
    name: 'Section',
    items: ['Label', 'Label'],
  },
  {
    name: 'Section',
    items: ['Label', 'Label'],
  },
]

const items = [
  { Icon: MdCheck, name: 'Label' },
  { Icon: MdCheck, name: 'Label' },
  { Icon: MdCheck, name: 'Label' },
  { Icon: MdCheck, name: 'Label' },
]

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <TopAppBar
        leading={
          <TopAppBar.Leading>
            <NavDrawer.Toggler />
          </TopAppBar.Leading>
        }
        headline={<TopAppBar.Title>Turbospace</TopAppBar.Title>}
        trailing={
          <TopAppBar.Trailing>
            <Button variant="text">Log in</Button>
            <Button variant="tonal">Sign up</Button>
            <IconButton
              renderAs="a"
              href="https://github.com/pacexy/turbospace"
              Icon={RiGithubFill}
            />
            <ColorScheme />
          </TopAppBar.Trailing>
        }
      />

      <div className="flex">
        <NavDrawer>
          {sections.map(({ name, items }) => (
            <NavDrawer.Block key={name} headline={name}>
              {items.map((item) => (
                <NavDrawer.Item key={item}>
                  <a>{item}</a>
                </NavDrawer.Item>
              ))}
            </NavDrawer.Block>
          ))}
        </NavDrawer>
        <main className="mx-auto w-screen max-w-3xl flex-1 p-4">
          {children}
        </main>
      </div>

      <NavBar>
        {items.map(({ Icon, name }) => (
          <NavBar.Item key={name} Icon={Icon}>
            <a>{name}</a>
          </NavBar.Item>
        ))}
      </NavBar>
    </>
  )
}
