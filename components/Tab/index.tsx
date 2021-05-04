import Link from 'next/link'
import { TabWrapper } from './tab.style'

const Tab = ({ tablist, onClick }: any) => {
  return (
    <TabWrapper>
      <ul>
        {tablist.map((tab: string) => (
          <li onClick={() => onClick(tab)}>
            <div>{tab}</div>
            {/* <Link href={`/user/${tab}`}>{tab}</Link> */}
          </li>
        ))}
      </ul>
    </TabWrapper>
  )
}
export default Tab
