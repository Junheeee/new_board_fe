import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
  Spinner
} from 'react-bootstrap';

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

  const isLogin = JSON.parse(String(localStorage.getItem('isLogin')));

  const handlerDropdownClick = (val: string) => {
    setChoiceVal(val);
  };

  useEffect(() => {
    if (choiceVal) refetch();
  }, [choiceVal]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md='12'>
            <Card className='card-plain table-plain-bg'>
              <Card.Header
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <CustomDropdown
                  choiceVal={choiceVal}
                  handlerDropdownClick={handlerDropdownClick}
                  type='view'
                />
                <Card.Title as='h4'>뉴보드 게시판 입니다! ૮⑅ᐡ•ﻌ•ᐡა</Card.Title>
                {isLogin ? (
                  <Button
                    className='btn-primary'
                    onClick={() => navigate('/board/write/0')}
                  >
                    새 글
                  </Button>
                ) : (
                  <div></div>
                )}
              </Card.Header>
              <Card.Body className='table-full-width table-responsive px-0'>
                {!isFetching ? (
                  <Table className='table-hover'>
                    <thead>
                      <tr>
                        <th className='border-0'>번호</th>
                        <th className='border-0'>제목</th>
                        <th className='border-0'>작성자</th>
                        <th className='border-0'>작성일</th>
                        <th className='border-0'>조회수</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((board, i) => {
                        const date = format(
                          new Date(board.regDt),
                          'yyyy-MM-dd'
                        );
                        return (
                          <tr
                            key={i}
                            onClick={() => {
                              navigate(`/board/detail/${board.brdSno}`);
                            }}
                          >
                            <td>{board.brdSno}</td>
                            <td>{board.title}</td>
                            <td>{board.cstmrNm}</td>
                            <td>{date}</td>
                            <td>{board.views}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                ) : (
                  <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </Spinner>
                )}
              </Card.Body>
              <Card.Footer>
                <CustomPagination />
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
