import { TabWrapper } from './tab.style'

const Tab = ({ tablist, onClick }: any) => {
  return (
    <TabWrapper>
      <ul>
        {tablist.map((tab: string) => (
          <li key={tab} onClick={() => onClick(tab)}>
            <div>{tab}</div>
          </li>
        ))}
      </ul>
    </TabWrapper>
  )
}
export default Tab
