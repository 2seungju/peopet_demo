import styled from 'styled-components'
import UnstyledLink from 'next/link'

export const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`

export const InlineLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener'
})`
  text-decoration: underline;
  cursor: pointer;
`

const Link = ({
  children,
  className,
  inline,
  unstyled,
  dropbar,
  color,
  content,
  activeDogId,
  mobile,
  pc,
  dogId,
  handleClick = () => {},
  position,
  ...rest,
}) => {
  let Child = StyledLink
  if (inline) {
    Child = InlineLink
  } else if (unstyled) {
    Child = 'a'
  }

  return (
    <UnstyledLink {...rest}>
      <Child
        href={rest.href}
        className={className}
        dropbar={dropbar}
        color={color}
        mobile={mobile}
        pc={pc}
        position={position}
        activeDogId={activeDogId}
        dogId={dogId}
      >
        <span onClick={handleClick}>
          {children}
        </span>
      </Child>
    </UnstyledLink>
  )
}

export default Link

