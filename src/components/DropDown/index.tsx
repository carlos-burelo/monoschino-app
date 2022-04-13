import { ArrowDown, ArrowUp } from '#constants/icons'
import { useState } from 'react'
import _ from './DropDown.module.scss'

interface Props {
  defaultValue?: string
  data: {
    id: string
    name: string
  }[]
}
export default function DropDown({ data }: Props) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(data[0].name)
  return (
    <div className={_.container}>
      <div className={_.selected} onClick={() => setOpen(!open)}>
        <span className={_.text}>{selected}</span>
        <span className={_.arrow}>{open ? <ArrowUp /> : <ArrowDown />}</span>
      </div>
      {open && (
        <div className={_.dropdown}>
          {data.map(({ id, name }) => (
            <div
              key={id}
              className={_.item}
              onClick={() => {
                setSelected(name)
                setOpen(false)
              }}>
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
