import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IUserJoinRq } from '../../types/user';
import { useState } from 'react';
import userApi from '../../service/user';

export default function UserJoinForm() {
  const navigate = useNavigate();
  const PostUserJoin = userApi.PostUserJoin();

  const [rq, setRq] = useState<IUserJoinRq>({
    loginId: '',
    loginPswd: '',
    cstmrNm: ''
  });

  const handlerSubmit = () => {
    const isEmpty = Object.entries(rq).some(([key, value]) => !value);
    if (isEmpty) {
      alert('빈칸 없이 입력해조잉');
    } else {
      PostUserJoin.mutate(rq, {
        onSuccess: data => {
          alert('뉴보드에 오신걸 환영합니당! ꈍꈊꈍ');
          navigate('/user/login');
        }
      });
    }
  };

  const handlerOnChange = (e: any) => {
    const { id, value } = e.target;
    handlerChangeRq(id, value);
  };

  const handlerChangeRq = (id: string, value: string) => {
    const _rq = {
      ...rq,
      [id]: value
    };
    setRq(_rq);
  };

  return (
    <>
      <Container
        fluid
        style={{
          width: '50%',
          marginTop: '50px'
        }}
      >
        <Card>
          <Card.Header>
            <Card.Title as='h4'>Join</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col md='4'>
                  <Form.Group>
                    <label style={{ paddingTop: '10px' }}>아이디</label>
                    <Form.Control
                      placeholder='아이디'
                      type='text'
                      id='loginId'
                      onChange={handlerOnChange}
                    />
                  </Form.Group>
                </Col>
                <Col md='4'>
                  <Form.Group>
                    <label style={{ paddingTop: '10px' }}>이름</label>
                    <Form.Control
                      placeholder='이름'
                      type='text'
                      id='cstmrNm'
                      onChange={handlerOnChange}
                    />
                  </Form.Group>
                </Col>
                <Col md='4'>
                  <Form.Group>
                    <label style={{ paddingTop: '10px' }}>닉네임</label>
                    <Form.Control
                      disabled
                      placeholder='닉네임'
                      type='text'
                      id='cstmrAli'
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md='8'>
                  <Form.Group>
                    <label style={{ paddingTop: '10px' }}>이메일</label>
                    <Form.Control
                      disabled
                      placeholder='이메일'
                      type='email'
                      id='email'
                    />
                  </Form.Group>
                </Col>
                <Col md='4'>
                  <Form.Group>
                    <label style={{ paddingTop: '10px' }}>성별</label>
                    <Form.Control
                      disabled
                      placeholder='라디오버튼 하기'
                      type='text'
                      id=''
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md='8'>
                  <Form.Group>
                    <div style={{ display: 'flex', paddingTop: '10px' }}>
                      <label style={{ paddingRight: '10px' }}>
                        휴대폰 번호
                      </label>
                      <label>03:00</label>
                    </div>
                    <Form.Control
                      disabled
                      placeholder='휴대폰 번호'
                      type='text'
                      id='hpno'
                    />
                  </Form.Group>
                </Col>
                <Col md='4'>
                  <Form.Group>
                    <label style={{ paddingTop: '10px' }}>인증번호</label>
                    <Form.Control
                      disabled
                      placeholder='인증번호'
                      type='text'
                      id=''
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md='6'>
                  <Form.Group>
                    <label style={{ paddingTop: '10px' }}>비밀번호</label>
                    <Form.Control
                      placeholder='비밀번호'
                      type='password'
                      id='loginPswd'
                      onChange={handlerOnChange}
                    />
                  </Form.Group>
                </Col>
                <Col md='6'>
                  <Form.Group>
                    <div style={{ display: 'flex', paddingTop: '10px' }}>
                      <label style={{ paddingRight: '10px' }}>
                        비밀번호 체크
                      </label>
                      <label
                        style={{
                          borderBottom: '1px solid #ff00ff',
                          color: '#ff00ff'
                        }}
                      >
                        확인 꾹!
                        {/* 통과! */}
                      </label>
                    </div>
                    <Form.Control
                      disabled
                      placeholder='비밀번호 체크'
                      type='password'
                      id=''
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div
                    style={{
                      margin: '15px 0px 20px 0px',
                      alignItems: 'center'
                    }}
                  >
                    <Button
                      className='btn-primary btn-fill'
                      onClick={handlerSubmit}
                    >
                      가입하기
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
