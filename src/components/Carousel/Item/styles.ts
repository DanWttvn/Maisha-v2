import styled from 'styled-components'
import { Props } from '.'

export default styled.div<Props>`
  display: flex;
  transition: all 0.9s cubic-bezier(0.2, 0, 0.2, 1);
  width: 90vw;
  height: 100%;
  background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
  background-image: ${({ src, hasOverlay }) => hasOverlay ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${src})` : `url(${src})`};

  ${({ styles }) => ({ ...styles })}
`
