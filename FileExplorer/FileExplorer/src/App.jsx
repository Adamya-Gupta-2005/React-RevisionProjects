import React, { useState } from 'react'
import {explorer} from './data/folderData.js'
import FS from './components/FS.jsx'
import './App.css'

import useTraverseTree from './Hooks/use-traverse-tree.js'

const App = () => {

  const [explorerData, setExplorerData] = useState(explorer)

  const {insertNode} = useTraverseTree();
  
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder)
    
    setExplorerData(finalTree);
  }

  return (
    <div>
      <FS explorer={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  )
}

export default App
