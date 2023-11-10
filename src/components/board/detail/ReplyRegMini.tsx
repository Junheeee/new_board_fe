import { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { IReplyCreateRq } from '../../../types/reply';
import { useParams } from 'react-router-dom';

interface Props {
  trgRplySno: number;
  handlerSubmit: (rq: IReplyCreateRq, setter: any) => void;
}

export default function ReplyRegMini({ trgRplySno, handlerSubmit }: Props) {
  const { no } = useParams();

  const isLogin = JSON.parse(String(localStorage.getItem('isLogin')));
  const [reReplyEnterCnt, setReReplyEnterCnt] = useState<number>(0);
  const [replyRq, setReplyRq] = useState<IReplyCreateRq>({
    brdSno: Number(no),
    trgRplySno: 0,
    reply: '',
    cstmrSno: isLogin ? isLogin.cstmrSno : 0
  });

  const handlerOnChange = (e, trgRplySno) => {
    const _rq = {
      ...replyRq,
      reply: e.target.value,
      trgRplySno: trgRplySno
    };
    setReplyRq(_rq);
  };

  return (
    <div id='register' style={{ display: 'flex', marginBottom: '20px' }}>
      <div style={{ margin: '10px' }}>
        <div className='font-icon-detail'>
          <i className='nc-icon nc-stre-down'></i>
        </div>
      </div>

      <div style={{ width: '100%', marginLeft: '5px' }}>
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
            value={replyRq.reply}
            onChange={e => {
              const cnt = (e.target.value.match(/\n/g) || []).length + 1;
              setReReplyEnterCnt(cnt);

              handlerOnChange(e, trgRplySno);
            }}
          />
        </Form.Group>
        <Button
          className='btn-success btn-fill btn-sm'
          style={{ width: '100%' }}
          onClick={() => {
            if (replyRq.reply === '') {
              alert('작성한 댓글이 없어요!');
            } else {
              console.log(replyRq, 'reply');
              handlerSubmit(replyRq, setReplyRq);
            }
          }}
        >
          등록
        </Button>
      </div>
    </div>
  );
}
