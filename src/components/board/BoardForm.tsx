import { ChangeEvent, useState } from 'react';
import {
  Button,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import boardApi from '../../service/board';
import { IBoardCreateRq } from '../../types/board';
import CustomDropdown from '../custom/CustomDropdown';

export default function BoardForm() {
  const navigate = useNavigate();

  const PostBoardCreate = boardApi.PostBoardCreate();

  const [choiceVal, setChoiceVal] = useState<string>('DIARY');

  const [rq, setRq] = useState<IBoardCreateRq>({
    title: '',
    content: '',
    ctgrDivCd: choiceVal,
    cstmrSno: 1
  });

  const handlerOnChange = (e: any) => {
    const { id, value } = e.target;
    handlerChangeRq(id, value);
  };

  const handlerSubmit = () => {
    PostBoardCreate.mutate(rq, {
      onSuccess: data => {
        handlerBack();
      }
    });
  };

  const handlerChangeRq = (id: string, value: string) => {
    const _rq = {
      ...rq,
      [id]: value
    };
    setRq(_rq);
  };

  const handlerBack = () => {
    navigate('/');
  };

  const handlerDropdownClick = (val: string) => {
    setChoiceVal(val);
    handlerChangeRq('ctgrDivCd', val);
  };

  return (
    <div>
      <InputGroup className='mb-3'>
        <div className='d-flex me-md-3'>
          <CustomDropdown
            choiceVal={choiceVal}
            handlerDropdownClick={handlerDropdownClick}
            type='create'
          />
        </div>
        <InputGroup.Text>제목</InputGroup.Text>
        <Form.Control
          id='title'
          placeholder='제목을 입력해주세요.'
          onChange={handlerOnChange}
        />
      </InputGroup>
      <InputGroup className='mb-3'>
        <InputGroup.Text>내용</InputGroup.Text>
        <Form.Control
          id='content'
          as='textarea'
          rows={10}
          placeholder='내용을 입력해주세요.'
          onChange={handlerOnChange}
        />
      </InputGroup>
      <div className='d-flex gap-2 justify-content-center'>
        <Button variant='secondary' onClick={handlerBack}>
          취소
        </Button>
        <Button variant='primary' onClick={handlerSubmit}>
          확인
        </Button>
      </div>
    </div>
  );
}
