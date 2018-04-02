import styled from 'styled-components'
import media from 'utils/media'

const Bar = styled.div`
  width: ${p => p.vertical ? '0.5px' : '100%'};
  opacity: 0.5;
  border: 1px solid ${p => p.borderColor};
  ${media.mobile`
    width: ${p => p.mobileHorizontal && '100%'};
    display: ${p => p.mobileHide && 'none'}
  `}
`

export default Bar
