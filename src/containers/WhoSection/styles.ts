import styled from 'styled-components'
import Container from '../../components/Container'
import Paragraph from '../../components/Paragraph'
import ImageRoot from '../../components/Image'


export const OuterContainer = styled(Container)`
  position: relative;
  width: 100%;
  max-height: 600px;
`

export const InnerContainer = styled(Container)`
  width: 100%;
	padding: 10% 13% 10% 23%;
  font-size: 1rem;
  line-height: 1.59rem;

  @media ${({ theme }) => theme.breakpoints.sl} {
    padding: 10% 8% 10% 15%;
	}

  background-image: url('/images/playing_kids.webp');
  background-size: cover;
  background-position: center;
  filter: brightness(90%);
`

export const BorderedBox = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.darkRed};
	border-radius: 10px;
	padding: 30px 40px;
	margin: 20px 0;
`

export const DataContainer = styled(Container)`
  justify-content: space-between;
  margin-bottom: 30px;

	@media ${({ theme }) => theme.breakpoints.m} {
		justify-content: space-around;
	}
`

export const DataParagraph = styled(Paragraph)`
	@media ${({ theme }) => theme.breakpoints.sl} {
    width: 100%;
	}
`

export const Image = styled(ImageRoot)`
  float: right;
  width: 55%;
  padding: 0 0 40px 40px;

	@media ${({ theme }) => theme.breakpoints.sl} {
    min-width: 0;
    width: 100%;
		padding: 0;
    margin-bottom: 30px;
	}
`
