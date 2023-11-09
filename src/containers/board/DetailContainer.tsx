import BoardDetail from '../../components/board/BoardDetail';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import BoardReply from '../../components/board/BoardReply';
import { useState } from 'react';

export default function DetailContainer() {
  const { no } = useParams();
  const [replyEnterCnt, setReplyEnterCnt] = useState<number>(0);

  return (
    <>
      <Container fluid>
        <BoardDetail detailNo={no} />

        <>
          <div style={{ marginBottom: '30px' }}>
            <Row>
              <Col>
                <div style={{ paddingLeft: '10px' }}>
                  <span style={{ color: '#000000' }}>댓글 39</span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md='10'>
                <Form.Group>
                  <Form.Control
                    // style={{
                    //   padding: '8px 12px',
                    //   border: '1px solid #e3e3e3',
                    //   borderRadius: '4px'
                    // }}
                    // plaintext
                    style={{
                      resize: 'none',
                      outline: 'none'
                    }}
                    cols={80}
                    placeholder='댓글 입력해조잉!'
                    as='textarea'
                    rows={replyEnterCnt < 4 ? 3 : replyEnterCnt}
                    onChange={e => {
                      const cnt =
                        (e.target.value.match(/\n/g) || []).length + 2;
                      setReplyEnterCnt(cnt);
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md='2'>
                <Button
                  className='btn-primary btn-fill'
                  style={{ width: '100%', height: '100%' }}
                >
                  등록
                </Button>
              </Col>
            </Row>
          </div>
        </>
        <BoardReply />
      </Container>
    </>
  );
}
