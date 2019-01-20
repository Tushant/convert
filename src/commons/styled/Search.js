import styled from 'styled-components';

export const SearchWrapper = styled.div `
  border: 1px solid #dedede;
  border-radius: 2px;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 9px;
  width: 190px;
`,
  Input = styled.input `
    flex: 1;
    :: placeholder {
      color: #888;
    }
  `,
  SearchImage = styled.img `
    height: 15px;
    width: 15px;
    margin-right: 10px;
  `,
  ClearImage = styled.img `
    height: 8px;
    width: 8px;
  `,
  NoItemContainer = styled.div `
   padding: 20px 0;
   font-style: italic;
  `
;
