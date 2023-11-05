import { Button, Form } from 'react-bootstrap';
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
    <div>
      <div className='py-3'>
        <h3>회원가입</h3>
      </div>
      <div className='d-flex justify-content-between '>
        <div
          className='d-flex flex-column justify-content-center align-items-center p-5'
          style={{
            background: '#4582EC',
            border: '1px solid #000000',
            borderRadius: '5px'
          }}
        >
          <div className='py-1'>
            <span>뉴보드 ~(˘▾˘~)</span>
          </div>
          <div className='py-1'>
            <Button variant='warning' onClick={handlerSubmit}>
              가입하기
            </Button>
          </div>
        </div>

        <div>
          <Form style={{ minWidth: '400px' }}>
            <Form.Group className='mb-3'>
              <Form.Label>NAME</Form.Label>
              <Form.Control
                id='cstmrNm'
                type='text'
                placeholder='이름을 입력해주세요.'
                onChange={handlerOnChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>ID</Form.Label>
              <Form.Control
                id='loginId'
                type='text'
                placeholder='아이디를 입력해주세요.'
                onChange={handlerOnChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                id='loginPswd'
                type='password'
                placeholder='비밀번호를 입력해주세요.'
                onChange={handlerOnChange}
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}
