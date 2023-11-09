import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function Test() {
  const [reReplyEnterCnt, setReReplyEnterCnt] = useState<number>(0);
  return (
    <div
      id='reply'
      style={{
        padding: '10px 5px 5px 5px',
        borderBottom: '1px solid #e3e3e3',
        marginBottom: '10px'
      }}
    >
      <div
        id='user'
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingBottom: '5px'
        }}
      >
        <span style={{ color: '#3472F7' }}>닉네임</span>
        <span style={{ margin: '0px 10px', color: '#e3e3e3' }}>|</span>
        <span style={{ fontSize: '13px', color: '#999999' }}>시간</span>
      </div>

      <div id='content' style={{ paddingBottom: '5px' }}>
        <span style={{ color: '#666666' }}>
          댓글입니다 댓글입니다 댓글입니다
        </span>
        <div style={{ marginTop: '5px' }}>
          <span
            style={{
              fontSize: '13px',
              border: '1px solid #e3e3e3',
              padding: '2px'
            }}
          >
            답글
          </span>
          {/* 답글 다는 영역 */}
          <div>
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
                placeholder='댓글 입력해조잉!'
                as='textarea'
                rows={reReplyEnterCnt < 2 ? 1 : reReplyEnterCnt}
                onChange={e => {
                  const cnt = (e.target.value.match(/\n/g) || []).length + 1;
                  setReReplyEnterCnt(cnt);
                }}
              />
            </Form.Group>
            <Button className='btn-success btn-fill' style={{ width: '100%' }}>
              등록
            </Button>
          </div>
          {/* -------- */}
          {/* 달린 답글들 */}
          <div style={{ display: 'flex' }}>
            <div style={{ paddingTop: '18px', marginLeft: '20px' }}>
              <div className='font-icon-detail'>
                <i className='nc-icon nc-stre-down'></i>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <div style={{ marginLeft: '0px' }}>
                <div style={{ padding: '8px 12px 0px 12px' }}>
                  <div
                    id='user'
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: '10px 5px'
                    }}
                  >
                    <span style={{ color: '#3472F7' }}>닉네임</span>
                    <span style={{ margin: '0px 10px', color: '#e3e3e3' }}>
                      |
                    </span>
                    <span style={{ fontSize: '13px', color: '#999999' }}>
                      시간
                    </span>
                  </div>

                  <div id='reply' style={{ paddingLeft: '15px' }}>
                    <span style={{ color: '#666666' }}>
                      답답글 답답글 답답글 답답글 답답글 답답글 답답글 답답글
                      답답글 답답글 답답글 답답글 답답글 답답글
                    </span>
                    <div style={{ marginTop: '5px' }}>
                      <span
                        style={{
                          fontSize: '13px',
                          border: '1px solid #e3e3e3',
                          padding: '2px'
                        }}
                      >
                        답글
                      </span>
                    </div>
                  </div>

                  <div id='br' style={{ padding: '10px 10px 0px 10px' }}>
                    <div style={{ borderBottom: '1px solid #e3e3e3' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --------------- */}
        </div>
      </div>

      <div id='br' style={{ padding: '10px' }}>
        <div style={{ borderBottom: '1px solid #e3e3e3' }}></div>
      </div>
    </div>
  );
}
