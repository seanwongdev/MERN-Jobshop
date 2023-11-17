
import Dark from "./Dark"
import SideToolBar from "./SideToolBar"

function Header({user}) {
  return (
    <div className="flex justify-between">
      <SideToolBar  />

      <h1>Dashboard</h1>

      <div>
      <p>{user}</p>
      <Dark />
      </div>
    </div>
  )
}

export default Header
