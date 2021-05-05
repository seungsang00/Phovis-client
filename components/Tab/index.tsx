import { SideTab } from './tab.style'

const Tab = ({ tablist, onClick, selectedTab }: any) => {
  return (
    <SideTab>
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
      </ul>
    </SideTab>
  )
}
export default Tab
