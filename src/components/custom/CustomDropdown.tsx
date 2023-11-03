import { Dropdown, DropdownButton } from 'react-bootstrap';
import boardApi from '../../service/board';
import { useState } from 'react';

export default function CustomDropdown({
  handlerDropdownClick,
  choiceVal,
  type
}) {
  const { data, isFetching } = boardApi.GetCtgrList();

  return (
    <div>
      {!isFetching ? (
        <DropdownButton
          id='dropdown-basic-button'
          title={choiceVal ? choiceVal : type === 'view' ? 'ALL' : 'DIARY'}
        >
          {data?.map((ctgr, i) => {
            if (type === 'view') {
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
        </DropdownButton>
      ) : null}
    </div>
  );
}
