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
      <Card>
        {!isFetching && data ? (
          <>
            <Card.Header>
              <Row>
                <Col md='9' style={{ display: 'flex', alignItems: 'center' }}>
                  <Card.Title
                    as='h4'
                    style={{ fontWeight: 600, paddingRight: '10px' }}
                  >
                    {data?.title}
                  </Card.Title>
                  <p className='card-category'>| {data?.ctgrDivCd}</p>
                </Col>
                <Col md='3'>
                  <div
                    style={{ display: 'flex', flexDirection: 'row-reverse' }}
                  >
                    <p className='card-category'>
                      {format(new Date(data.regDt), 'yyyy-MM-dd / hh:mm:dd')}
                    </p>
                  </div>

                  <div
                    style={{ display: 'flex', flexDirection: 'row-reverse' }}
                  >
                    <p className='card-category'>{data?.cstmrNm}</p>
                  </div>
                </Col>
              </Row>
            </Card.Header>

            <Card.Body>
              <Form>
                <Row>
                  <Col>
                    <div
                      style={{
                        borderBottom: '1px solid #e3e3e3',
                        marginBottom: '10px'
                      }}
                    ></div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        style={{
                          padding: '8px 12px',
                          resize: 'none',
                          outline: 'none'
                        }}
                        plaintext
                        value={data?.content}
                        onChange={e => e.preventDefault}
                        placeholder='내용'
                        readOnly
                        cols={80}
                        rows={(data.content.match(/\n/g) || []).length + 2}
                        as='textarea'
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
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
                      {isLogin?.cstmrSno === data.cstmrSno ? (
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
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </>
        ) : null}
      </Card>
    </>
  );
}
