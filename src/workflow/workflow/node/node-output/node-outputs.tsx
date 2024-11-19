
const NodeOutputs:React.FC<{children: React.ReactNode}> = ({children}) => {

  return (
    <div className="flex flex-col divided-y gap-2">{children}</div>
  )
}

export  {NodeOutputs}