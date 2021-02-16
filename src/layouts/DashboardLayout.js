/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Nav } from 'react-bootstrap'

const DashboardLayout = ({children}) => {
  return (
  <React.Fragment>
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/">List</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/add">Add</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/auth">Login</Nav.Link>
      </Nav.Item>
    </Nav>
    {children}
  </React.Fragment>
  )
}
export default DashboardLayout;