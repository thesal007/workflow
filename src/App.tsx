import { DnDProvider } from './workflow/context/dnd'
import DnDFlow from './workflow'
import { ReactFlowProvider } from '@xyflow/react'

function App() {
  return (
    <div className='dndflow'>
      <ReactFlowProvider>
      <DnDProvider>
        <DnDFlow/>
      </DnDProvider>
      </ReactFlowProvider>
    </div>
  )
}

export default App