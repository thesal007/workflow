
const NodeInputs:React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="flex flex-col divide-y gap-2">{children}</div>
  )
}

export{ NodeInputs}