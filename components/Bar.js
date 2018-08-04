// 수직, 수평의 Bar 컴포넌트

import styled from 'styled-components'
import media from 'utils/media'

const Bar = styled.div`
  width: ${p => (p.vertical ? '0.2px' : '90%')};
  margin: ${p => (p.margin ? p.margin : 'auto')};
  opacity: 0.3;
  border: 0.5px solid ${p => p.borderColor};
  ${media.mobile`
    width: ${p => p.mobileHorizontal && '100%'};
    display: ${p => p.mobileHide && 'none'};
    margin: ${p => p.mobilemargin};
  `};
`

export default Bar
