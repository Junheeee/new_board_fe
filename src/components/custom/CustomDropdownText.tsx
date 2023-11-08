import { Dropdown, Nav } from 'react-bootstrap';
import boardApi from '../../service/board';

export default function CustomDropdownText({
  handlerDropdownClick,
  choiceVal,
  type
}) {
  const { data, isFetching } = boardApi.GetCtgrList();
  return (
    <>
      {!isFetching ? (
        <Dropdown as={Nav.Item}>
          <Dropdown.Toggle
            aria-expanded={false}
            aria-haspopup={true}
            as={Nav.Link}
            data-toggle='dropdown'
            id='navbarDropdownMenuLink'
            variant='default'
            className='m-0'
            style={{ color: '#888888' }}
          >
            <span className='no-icon' style={{ color: '#888888' }}>
              {choiceVal ? choiceVal : type === 'view' ? 'ALL' : 'DIARY'}
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu aria-labelledby='navbarDropdownMenuLink'>
            {data?.map((ctgr, i) => {
              if (type === 'view') {
                return (
                  <Dropdown.Item
                    key={i}
                    onClick={handlerDropdownClick(ctgr.ctgrDivCd)}
                  >
                    {ctgr.ctgrNm}
                  </Dropdown.Item>
                );
              } else {
                if (ctgr.ctgrDivCd !== 'ALL') {
                  return (
                    <Dropdown.Item
                      key={i}
                      onClick={() => {
                        handlerDropdownClick(ctgr.ctgrDivCd);
                      }}
                    >
                      {ctgr.ctgrNm}
                    </Dropdown.Item>
                  );
                }
              }
            })}
          </Dropdown.Menu>
        </Dropdown>
      ) : null}
    </>
  );
}
