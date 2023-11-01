import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function C_Dropdown({ categoryArr }) {
  return (
    <div>
      <DropdownButton id='dropdown-basic-button' title='카테고리'>
        {categoryArr.map(ctgr => {
          return <Dropdown.Item href={ctgr.href}>{ctgr.name}</Dropdown.Item>;
        })}
        {/* <Dropdown.Item href='#/action-1'>구분1</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>구분2</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>구분3</Dropdown.Item> */}
      </DropdownButton>
    </div>
  );
}
