import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import Reply from './Reply';
import replyApi from '../../../service/reply';
import { IReplyCreateRq } from '../../../types/reply';

export default function BoardReplys({ detailNo, isLogin }) {
  const { data, isFetching, refetch } = replyApi.GetReplyList(detailNo);
  const PostReplyCreate = replyApi.PostReplyCreate();

  const [replyRq, setReplyRq] = useState<IReplyCreateRq>({
    brdSno: Number(detailNo),
    trgRplySno: 0,
    reply: '',
    cstmrSno: isLogin ? isLogin.cstmrSno : 0
  });

  const [replyEnterCnt, setReplyEnterCnt] = useState<number>(0);

  const [openBtnRplySno, setOpenBtnRplySno] = useState<number>(0);

  const handlerOpenBtn = (rplySno: number) => {
    setOpenBtnRplySno(rplySno);
  };

  const handlerOnChange = (e, trgRplySno) => {
    const _rq = {
      ...replyRq,
      reply: e.target.value,
      trgRplySno: trgRplySno
    };
    setReplyRq(_rq);
  };

  const handlerSubmit = (rq: IReplyCreateRq, setter) => {
    PostReplyCreate.mutate(rq, {
      onSuccess: data => {
        refetch();
        setter(prev => ({
          ...prev,
          reply: ''
        }));
      }
    });
  };

  return (
    <>
      <div id='replyBtn' style={{ marginBottom: '30px' }}>
        <Row>
          <Col>
            <div style={{ paddingLeft: '10px' }}>
              <span style={{ color: '#000000' }}>댓글 {data?.cnt}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md='10'>
            <Form.Group>
              <Form.Control
                id='reply'
                style={{
                  resize: 'none',
                  outline: 'none'
                }}
                cols={80}
                placeholder='댓글 입력해조잉!'
                as='textarea'
                rows={replyEnterCnt < 4 ? 3 : replyEnterCnt}
                value={replyRq.reply}
                onChange={e => {
                  const cnt = (e.target.value.match(/\n/g) || []).length + 2;
                  setReplyEnterCnt(cnt);

                  handlerOnChange(e, 0);
                }}
              />
            </Form.Group>
          </Col>
          <Col md='2'>
            <Button
              className='btn-primary btn-fill'
              style={{ width: '100%', height: '100%' }}
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
          </Col>
        </Row>
      </div>

      <div id='replys'>
        <Row>
          <Col>
            <Card>
              <div style={{ padding: '10px 20px' }}>
                {data?.replyList.map((reply, i) => {
                  const type =
                    i === 0
                      ? 'first'
                      : i === data.replyList.length - 1
                      ? 'last'
                      : 'mid';
                  return (
                    <div key={i}>
                      <Reply
                        openBtnRplySno={openBtnRplySno}
                        handlerOpenBtn={handlerOpenBtn}
                        handlerSubmit={handlerSubmit}
                        reply={reply}
                        type={type}
                      />
                    </div>
                  );
                })}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
