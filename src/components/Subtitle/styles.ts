import styled from 'styled-components'
import { Props } from '.'

export const H3 = styled.h3<Props>`
  width: 100%;
  margin: 0;
  margin-bottom: 20px;
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.5em;
  color: ${({ theme, color = 'black' }) => theme.colors[color]};
  word-wrap: break-word;

  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`

export const H4 = styled.h4<Props>`
	font-size: 1.3rem;
	font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme, color = 'black' }) => theme.colors[color]};

  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`
