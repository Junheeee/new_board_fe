import Register from './Register';

export default function Reply({ type }) {
  return (
    <div
      id='reply'
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
        <span style={{ color: '#3472F7' }}>닉네임</span>
        <span style={{ margin: '0px 10px', color: '#e3e3e3' }}>|</span>
        <span style={{ fontSize: '13px', color: '#999999' }}>시간</span>
      </div>

      <div id='content' style={{ paddingBottom: '5px' }}>
        <span style={{ color: '#666666' }}>
          댓글입니다 댓글입니다 댓글입니다
        </span>
      </div>

      <div id='rereplyBtn'>
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

      {type === 'rere' ? (
        <>
          <Register />
          <div id='rerePly' style={{ display: 'flex' }}>
            <div style={{ margin: '10px' }}>
              <div className='font-icon-detail'>
                <i className='nc-icon nc-stre-down'></i>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <Reply type='dfsdf' />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
