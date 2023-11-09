import { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function Register() {
  const [reReplyEnterCnt, setReReplyEnterCnt] = useState<number>(0);
  return (
    <div id='register'>
      <Form.Group>
        <Form.Control
          style={{
            margin: '8px 0px',
            border: '1px solid #e3e3e3',
            borderRadius: '4px',
            padding: '5px 10px',
            outline: 'none',
            resize: 'none'
          }}
          plaintext
          cols={80}
          placeholder='대댓글 입력해조잉!'
          as='textarea'
          rows={reReplyEnterCnt < 2 ? 1 : reReplyEnterCnt}
          onChange={e => {
            const cnt = (e.target.value.match(/\n/g) || []).length + 1;
            setReReplyEnterCnt(cnt);
          }}
        />
      </Form.Group>
      <Button className='btn-success btn-fill btn-sm' style={{ width: '100%' }}>
        등록
      </Button>
    </div>
  );
}
