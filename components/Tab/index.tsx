import { TabWrapper } from './tab.style'

const Tab = ({ tablist, onClick, selectedTab }: any) => {
  return (
    <TabWrapper>
      <ul>
        {tablist &&
          tablist.length > 0 &&
          tablist.map((tab: string) => {
            const isActive = tab === selectedTab ? true : false
            return (
              <li
                {...(isActive && { className: 'active' })}
                key={tab}
                onClick={() => onClick(tab)}>
                <div>{tab}</div>
              </li>
            )
          })}
        {/* {tablist.map((tab: string) => (
          <li key={tab} onClick={() => onClick(tab)}>
            <div>{tab}</div>
          </li>
        ))} */}
      </ul>
    </TabWrapper>
  )
}
export default Tab
