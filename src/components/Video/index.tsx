import React, { FC } from 'react'
import { BaseProps } from '../../models'
import VideoPlayer from 'react-video-js-player'
import './styles.css'

export interface Props extends BaseProps {
  src: string
  poster?: string
}

const Video: FC<Props>  = ({ src, poster }) => (
  <VideoPlayer
    src={src}
    poster={poster}
    className="vjs-fill vjs-fluid video-js vjs-matrix"
  />
)

Video.displayName = 'Video'

export default Video
