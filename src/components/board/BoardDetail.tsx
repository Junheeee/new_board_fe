import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
  Form,
  Spinner,
  InputGroup
} from 'react-bootstrap';
import boardApi from '../../service/board';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

export default function BoardDetail({ detailNo }) {
  const navigate = useNavigate();
  const { data, isFetching } = boardApi.GetBoardDetail(detailNo);
  const isLogin = JSON.parse(String(localStorage.getItem('isLogin')));

  const GetBoardDelete = boardApi.GetBoardDelete();
  const PostBoardUpdateViews = boardApi.PostBoardViews();

  useEffect(() => {
    if (!isFetching && data) {
      PostBoardUpdateViews.mutate(data?.brdSno);
    }
  }, [isFetching]);

  const handlerDelete = () => {
    GetBoardDelete.mutate(Number(detailNo), {
      onSuccess: data => {
        handlerBack();
      }
    });
  };

  const handlerBack = () => {
    navigate('/');
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              {!isFetching && data ? (
                <>
                  <Card.Header>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Card.Title
                          as='h4'
                          style={{ fontWeight: 600, paddingRight: '10px' }}
                        >
                          {data?.title}
                        </Card.Title>
                        <p className='card-category'>| {data?.ctgrDivCd}</p>
                      </div>
                      <p className='card-category'>
                        {format(new Date(data.regDt), 'yyyy-MM-dd / hh:mm:dd')}
                      </p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                      }}
                    >
                      <p className='card-category'>{data?.cstmrNm}</p>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Group>
                        <Form.Control
                          cols={80}
                          value={data?.content}
                          onChange={e => e.preventDefault}
                          placeholder='내용'
                          rows={15}
                          as='textarea'
                          readOnly
                        ></Form.Control>
                      </Form.Group>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          margin: '10px'
                        }}
                      >
                        <Button
                          className='btn-primary btn-fill'
                          style={{ marginRight: '10px' }}
                          onClick={handlerBack}
                        >
                          목록
                        </Button>
                        {isLogin.cstmrSno === data.cstmrSno ? (
                          <>
                            <Button
                              className='btn-primary btn-fill'
                              style={{ marginRight: '10px' }}
                              onClick={() => {
                                navigate(`/board/write/${detailNo}`);
                              }}
                            >
                              수정
                            </Button>
                            <Button
                              className='btn-danger btn-fill'
                              onClick={handlerDelete}
                            >
                              삭제
                            </Button>
                          </>
                        ) : null}
                      </div>
                    </Form>
                  </Card.Body>
                </>
              ) : null}
            </Card>
          </Col>
        </Row>
      </Container>
      {/* </> */}
    </>
  );
}
