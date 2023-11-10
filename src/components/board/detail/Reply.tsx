import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import ReplyRegMini from './ReplyRegMini';
import { IReplyCreateRq, IReplyList, IReplyListRs } from '../../../types/reply';
import { useLocation, useParams } from 'react-router-dom';
import replyApi from '../../../service/reply';

interface Props {
  openBtnRplySno: number;
  handlerOpenBtn: (rplySno: number) => void;
  handlerSubmit: (rq: IReplyCreateRq, setter: any) => void;
  reply: IReplyList | null;
  type: string;
}

export default function Reply({
  openBtnRplySno,
  handlerOpenBtn,
  handlerSubmit,
  reply,
  type
}: Props) {
  const isLogin = JSON.parse(String(localStorage.getItem('isLogin')));

  const [isOpenBtn, setIsOpenBtn] = useState<boolean>(false);

  useEffect(() => {
    if (openBtnRplySno === reply?.rplySno) {
      setIsOpenBtn(true);
    } else {
      setIsOpenBtn(false);
    }
  }, [openBtnRplySno, reply]);

  return (
    <>
      {reply ? (
        <div id='replyOne'>
          <div
            style={{
              padding: '10px 5px 10px 5px',
              borderBottom:
                type === 'last' ? '0px solid #000000' : '1px solid #e3e3e3',
              marginBottom: type === 'last' ? '0px' : '10px'
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
              <span style={{ color: '#3472F7' }}>{reply.cstmrNm}</span>
              <span style={{ margin: '0px 10px', color: '#e3e3e3' }}>|</span>
              <span style={{ fontSize: '13px', color: '#999999' }}>
                {format(new Date(reply.regDt), 'yyyy-MM-dd / hh:mm:ss')}
              </span>
            </div>

            <div id='content' style={{ paddingBottom: '5px' }}>
              <span style={{ color: '#666666' }}>{reply.reply}</span>
            </div>

            {isLogin ? (
              <div
                id='rereplyBtn'
                onClick={() => {
                  isOpenBtn ? handlerOpenBtn(0) : handlerOpenBtn(reply.rplySno);
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
                    color: isOpenBtn ? '#ff0000' : '#000000',
                    border: '1px solid #e3e3e3',
                    padding: '2px'
                  }}
                >
                  {isOpenBtn ? '취소' : '답글'}
                </span>
              </div>
            ) : null}
          </div>

          {reply.childRplyList
            ? reply.childRplyList.map((chdReply, i) => {
                const type = i === 0 ? 'first' : 'mid';
                return (
                  <div id='rerePly' key={i} style={{ display: 'flex' }}>
                    <div style={{ margin: '10px' }}>
                      <div className='font-icon-detail'>
                        <i className='nc-icon nc-stre-down'></i>
                      </div>
                    </div>

                    <div style={{ width: '100%' }}>
                      <Reply
                        openBtnRplySno={openBtnRplySno}
                        handlerOpenBtn={handlerOpenBtn}
                        handlerSubmit={handlerSubmit}
                        reply={chdReply}
                        type={type}
                      />
                    </div>
                  </div>
                );
              })
            : null}

          {isOpenBtn ? (
            <ReplyRegMini
              trgRplySno={reply.rplySno}
              handlerSubmit={handlerSubmit}
            />
          ) : null}
        </div>
      ) : null}
    </>
  );
}
