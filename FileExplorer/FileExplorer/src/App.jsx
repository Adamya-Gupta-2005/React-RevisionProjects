import React, { useState } from 'react'
import {explorer} from './data/folderData.js'
import FS from './components/FS.jsx'
import './App.css'

import useTraverseTree from './Hooks/use-traverse-tree.js'

const App = () => {

  const [explorerData, setExplorerData] = useState(explorer)

  const {insertNode, renameNode} = useTraverseTree();
  
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder)
    
    setExplorerData(finalTree);
  }

  const handleRenameNode = (nodeId, newName) => {
    const finalTree = renameNode(explorer, nodeId, newName)
  }

  return (
    <div>
      <FS explorer={explorerData} handleInsertNode={handleInsertNode} handleRenameNode={handleRenameNode} />
    </div>
  )
}

export default App
