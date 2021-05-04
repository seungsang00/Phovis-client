interface PWconfirm {
  handlePasswordConfirm: () => void
}
export const PasswordConfirm = ({ handlePasswordConfirm }: PWconfirm) => {
  return (
    <div>
      <label htmlFor='password-confirm'>현재 패스워드</label>
      <input id='password-confirm' type='password' placeholder='password' />
      <button onClick={handlePasswordConfirm}>비밀번호 확인</button>
    </div>
  )
}
