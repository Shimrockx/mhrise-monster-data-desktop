import React, {
  ReactNode,
  InputHTMLAttributes,
  useLayoutEffect,
  useEffect,
} from 'react'

import { GlobalStyle, Input, Thumb, Track, TrackInner } from './styles'

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>

export function Slider(props: InputProps) {
  const [trackInner, setTrackInner] = React.useState<any>({
    width: `${props.value}%`,
  })
  const [thumb, setThumb] = React.useState<any>({
    left: `${props.value}%`,
    transform: `translate(-${props.value}%, -50%)`,
  })

  function onChange(event: any) {
    let value = event.target.value
    setTheme(value)
  }

  function setTheme(value: any) {
    setTrackInner({
      width: `${value}%`,
    })
    setThumb({
      left: `${value}%`,
      transform: `translate(-${value}%, -50%)`,
    })
  }

  useEffect(() => {
    onChange({
      target: {
        value: props.value,
      },
    })
  }, [props.value])

  return (
    <>
      <GlobalStyle />
      <div>
        <Input type="range" onChangeCapture={onChange} {...props} />
        <Track>
          <TrackInner theme={trackInner}></TrackInner>
        </Track>
        <Thumb theme={thumb} />
      </div>
    </>
  )
}
