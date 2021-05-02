import { HeaderInner } from './commonlayout'

const Header = () => {
  return (
    <HeaderInner>
      <div className='global-menu'>
        <h2>Phovis</h2>
      </div>
      <div className='sub-menu'>
        <div>searchbar here</div>
        <div>login</div>
      </div>
    </HeaderInner>
  )
}
export default Header
