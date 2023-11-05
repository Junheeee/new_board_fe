import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function UserLoginForm() {
  const navigate = useNavigate();

  const handlerJoin = () => {
    navigate('/user/join');
  };
  return (
    <div>
      <div className='py-3'>
        <h3>로그인</h3>
      </div>
      <div className='d-flex justify-content-between '>
        <div>
          <Form style={{ minWidth: '400px' }}>
            <Form.Group className='mb-3'>
              <Form.Label>ID</Form.Label>
              <Form.Control type='text' placeholder='아이디를 입력해주세요.' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                type='password'
                placeholder='비밀번호를 입력해주세요.'
              />
            </Form.Group>
          </Form>
        </div>

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
            <Button variant='warning'>로그인 꾸욱</Button>
          </div>
        </div>
      </div>
      <div className='mt-3 p-2 text-center' style={{ fontSize: '13px' }}>
        <span
          className='p-2'
          style={{ background: '#ff00ff', cursor: 'pointer' }}
          onClick={handlerJoin}
        >
          회원가입 하고 싶어요 ˃̵ࡇ˂̵
        </span>
      </div>
    </div>
  );
}
