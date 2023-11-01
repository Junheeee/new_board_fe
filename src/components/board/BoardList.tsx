import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { useNavigate } from 'react-router-dom';

export default function BoardList() {
  const navigate = useNavigate();

  return (
    <div>
      <div className='py-2 mb-1 d-flex justify-content-between align-items-center'>
        <div>
          <DropdownButton id='dropdown-basic-button' title='카테고리'>
            <Dropdown.Item href='#/action-1'>구분1</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>구분2</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>구분3</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          <Button
            type='submit'
            onClick={() => {
              navigate('/board/create');
            }}
          >
            새 글
          </Button>
        </div>
      </div>

      <Table className='text-center' striped bordered hover size='sm'>
        <thead>
          <tr className=''>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>오늘 날씨가 좋지 않네요</td>
            <td>주니</td>
            <td>23-11-01</td>
            <td>199</td>
          </tr>
          <tr>
            <td>2</td>
            <td>오늘 날씨가 좋지 않네요</td>
            <td>주니</td>
            <td>23-11-01</td>
            <td>199</td>
          </tr>
          <tr>
            <td>3</td>
            <td>오늘 날씨가 좋지 않네요</td>
            <td>주니</td>
            <td>23-11-01</td>
            <td>199</td>
          </tr>
        </tbody>
      </Table>

      <div className='d-flex justify-content-center my-2'>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
}
