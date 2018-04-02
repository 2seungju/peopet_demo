import styled from 'styled-components'

const Svg = styled.svg`
  svg {
    display: inline-block;

    path {
      fill: currentColor;
    }
  }
`

export const CloseIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>close</title>
    <use fill="#FFF" xlinkHref="#close" transform="translate(1 1)" />
    <g>
      <path id="close" d="M-.7.7l13 13 1.4-1.4-13-13L-.7.7zm13-1.4l-13 13 1.4 1.4 13-13-1.4-1.4z" />
    </g>
  </Svg>
)

// export const FoldIcon = () => (
//   <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" xmlnsXlink="http://www.w3.org/1999/xlink">
//     <title>fold</title>
//     <use fill="#FFF" xlinkHref="#fold" transform="translate(0 1)" />
//     <defs>
//       <path id="fold" d="M0 1h17v-2H0v2zm17 4H0v2h17V5zM0 13h17v-2H0v2z" />
//     </defs>
//   </Svg>
// )

// export const ArrowIcon = () => (
//   <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" xmlnsXlink="http://www.w3.org/1999/xlink">
//     <title>arrow down</title>
//     <use fill="#FFF" xlinkHref="#menuArrow" transform="translate(1 1)" />
//     <defs>
//       <path id="menuArrow" d="M5 5l-.7.7.7.7.7-.7L5 5zM9.3-.7l-5 5 1.4 1.4 5-5L9.3-.7zm-3.6 5l-5-5L-.7.7l5 5 1.4-1.4z" />
//     </defs>
//   </Svg>
// )

export const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 294.843 294.843" space="preserve" width="50px" height="80px">
    <title>arrow down</title>
    <g>
      <path d="M147.421,0C66.133,0,0,66.133,0,147.421c0,40.968,17.259,80.425,47.351,108.255c2.433,2.25,6.229,2.101,8.479-0.331   c2.25-2.434,2.102-6.229-0.332-8.479C27.854,221.3,12,185.054,12,147.421C12,72.75,72.75,12,147.421,12   s135.421,60.75,135.421,135.421s-60.75,135.421-135.421,135.421c-3.313,0-6,2.687-6,6s2.687,6,6,6   c81.289,0,147.421-66.133,147.421-147.421S228.71,0,147.421,0z" fill="#91DC5A" />
      <path d="M84.185,90.185h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,90.185,84.185,90.185z" fill="#91DC5A" />
      <path d="M84.185,153.421h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,153.421,84.185,153.421z" fill="#91DC5A" />
      <path d="M216.658,210.658c0-3.313-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6s2.687,6,6,6h126.473   C213.971,216.658,216.658,213.971,216.658,210.658z" fill="#91DC5A" />
    </g>
  </svg>
)

export const FoldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 294.843 294.843" space="preserve" width="50px" height="80px">
    <g>
      <path d="M147.421,0C66.133,0,0,66.133,0,147.421c0,40.968,17.259,80.425,47.351,108.255c2.433,2.25,6.229,2.101,8.479-0.331   c2.25-2.434,2.102-6.229-0.332-8.479C27.854,221.3,12,185.054,12,147.421C12,72.75,72.75,12,147.421,12   s135.421,60.75,135.421,135.421s-60.75,135.421-135.421,135.421c-3.313,0-6,2.687-6,6s2.687,6,6,6   c81.289,0,147.421-66.133,147.421-147.421S228.71,0,147.421,0z" />
      <path d="M84.185,90.185h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,90.185,84.185,90.185z" />
      <path d="M84.185,153.421h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,153.421,84.185,153.421z" />
      <path d="M216.658,210.658c0-3.313-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6s2.687,6,6,6h126.473   C213.971,216.658,216.658,213.971,216.658,210.658z" />
    </g>
  </svg>
)