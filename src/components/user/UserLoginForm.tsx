import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IUserLoginRq } from '../../types/user';
import { useEffect, useState } from 'react';
import userApi from '../../service/user';
// import loginImage from '../../assets/img/sidebar-1.jpg';
import loginImage from '../../assets/img/photo-1431578500526-4d9613015464.jpeg';

export default function UserLoginForm() {
  const navigate = useNavigate();
  const PostUserLogin = userApi.PostUserLogin();

  const [rq, setRq] = useState<IUserLoginRq>({
    loginId: '',
    loginPswd: ''
  });

  // useEffect(() => {
  //   syncDivHeights();
  //   window.addEventListener('resize', syncDivHeights);
  // }, []);

  const syncDivHeights = () => {
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');

    if (div1 && div2) {
      const maxHeight = Math.max(div1.offsetHeight, div2.offsetHeight);
      div2.style.height = maxHeight + 'px';
    }
  };

  const handlerJoin = () => {
    navigate('/user/join');
  };

  const handlerOnChange = (e: any) => {
    const { id, value } = e.target;
    handlerChangeRq(id, value);
  };

  const handlerSubmit = () => {
    const isBlank = Object.entries(rq).some(([key, value]) => value === '');
    if (isBlank) {
      // alert('모두 입력해주세용');
      // console.log(
      //   document.getElementById('loginInput')?.offsetHeight,
      //   '----height'
      // );
      const height = document.getElementById('loginInput')?.offsetHeight;
      if (height) console.log(height - 30, height, '----height');
    } else {
      PostUserLogin.mutate(rq, {
        onSuccess: data => {
          if (data) {
            localStorage.setItem('isLogin', JSON.stringify(data));
            alert('로그인 하신걸 환영해용!!! (๑•᎑•๑)');
            navigate('/');
          } else {
            alert('실패하셨네요.. ㅠ.ㅠ');
            setRq({
              loginId: '',
              loginPswd: ''
            });
          }
        }
      });
    }
  };

  const handlerChangeRq = (id: string, value: string) => {
    const _rq = {
      ...rq,
      [id]: value
    };
    setRq(_rq);
  };

  const handlerOnKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handlerSubmit();
      // if (!isDisabled) {
      //   handlerButtonClick();
      // }
    }
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
            <Card.Title as='h4'>Login</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Group>
                    <label style={{ paddingTop: '10px' }}>ID</label>
                    <Form.Control
                      placeholder='아이디를 입력해주세요.'
                      type='text'
                      id='loginId'
                      onChange={handlerOnChange}
                      value={rq?.loginId}
                      // onKeyDown={handlerOnKeyPress}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <label style={{ paddingTop: '10px' }}>PASSWORD</label>
                    <Form.Control
                      placeholder='비밀번호를 입력해주세요.'
                      type='password'
                      id='loginPswd'
                      onChange={handlerOnChange}
                      value={rq?.loginPswd}
                      onKeyDown={handlerOnKeyPress}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: '15px 0px 20px 0px',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Button
                      className='btn-primary btn-fill'
                      onClick={handlerSubmit}
                    >
                      로그인
                    </Button>
                    <p
                      className='card-category'
                      style={{
                        marginLeft: '20px',
                        borderBottom: '1px solid #ff00ff',
                        borderTop: '1px solid #00ff00',
                        cursor: 'pointer'
                      }}
                      onClick={handlerJoin}
                    >
                      회원가입 하고 싶어용 ˃̵ࡇ˂̵
                    </p>
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
