import Link from 'next/link'
import { TabWrapper } from './tab.style'

const Tab = ({ tablist }: any) => {
  return (
    <TabWrapper>
      <ul>
        {tablist.map((tab: string) => (
          <li>
            <Link href={`/user/${tab}`}>{tab}</Link>
          </li>
        ))}
      </ul>
    </TabWrapper>
  )
}
export default Tab
