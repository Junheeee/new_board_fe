import {
  Button,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function BoardForm() {
  const navigate = useNavigate();

  return (
    <div>
      <InputGroup className='mb-3'>
        <div className='d-flex me-md-3'>
          <div>
            <DropdownButton id='dropdown-basic-button' title='카테고리'>
              <Dropdown.Item href='#/action-1'>구분1</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>구분2</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>구분3</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <InputGroup.Text>제목</InputGroup.Text>
        <Form.Control placeholder='제목을 입력해주세요.' />
      </InputGroup>
      <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon1'>내용</InputGroup.Text>
        <Form.Control
          as='textarea'
          rows={10}
          placeholder='내용을 입력해주세요.'
        />
      </InputGroup>
      <div className='d-flex gap-2 justify-content-center'>
        <Button
          variant='secondary'
          onClick={() => {
            navigate('/');
          }}
        >
          취소
        </Button>
        <Button variant='primary'>확인</Button>
      </div>
    </div>
  );
}
