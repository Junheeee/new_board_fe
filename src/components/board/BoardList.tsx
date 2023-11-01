import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { useNavigate } from 'react-router-dom';
import CustomPagination from '../custom/CustomPagination';
import boardApi from '../../service/board';
import { format } from 'date-fns';

export default function BoardList() {
  const navigate = useNavigate();
  const { data, isFetching } = boardApi.GetBoardList();

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

      {!isFetching ? (
        <>
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
              {data.map((board, i) => {
                const date = format(new Date(board.regDate), 'yyyy-MM-dd');
                return (
                  <tr key={i}>
                    <td>{board.boardSno}</td>
                    <td>{board.title}</td>
                    <td>{board.regUser}</td>
                    <td>{date}</td>
                    <td>{board.views}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <CustomPagination />
        </>
      ) : (
        <>로딩중</>
      )}
    </div>
  );
}
