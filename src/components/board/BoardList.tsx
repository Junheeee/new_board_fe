import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { useNavigate } from 'react-router-dom';
import CustomPagination from '../custom/CustomPagination';
import boardApi from '../../service/board';
import { format } from 'date-fns';
import CustomDropdown from '../custom/CustomDropdown';
import { useEffect, useState } from 'react';

export default function BoardList() {
  const navigate = useNavigate();
  const [choiceVal, setChoiceVal] = useState<string>();
  const { data, isFetching, refetch } = boardApi.GetBoardList(
    choiceVal ? choiceVal : 'ALL'
  );

  const handlerDropdownClick = (val: string) => {
    setChoiceVal(val);
  };

  useEffect(() => {
    if (choiceVal) refetch();
  }, [choiceVal]);

  return (
    <div>
      <div className='py-2 mb-1 d-flex justify-content-between align-items-center'>
        <CustomDropdown
          choiceVal={choiceVal}
          handlerDropdownClick={handlerDropdownClick}
          type='view'
        />
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
                  <tr
                    key={i}
                    onClick={() => {
                      navigate(`/board/detail/${board.boardSno}`);
                    }}
                  >
                    <td>{board.boardSno}</td>
                    <td>{board.title}</td>
                    <td>{board.cstmrNm}</td>
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
