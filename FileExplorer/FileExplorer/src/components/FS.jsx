import React, { useState } from 'react'

const FS = ({ explorer, handleInsertNode, handleRenameNode }) => {
    console.log(explorer)

    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    });

    const [isEditing, setIsEditing] = useState(false)
    const [renameValue, setRenameValue] = useState(explorer.name)

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();

        setExpand(true)

        setShowInput({
            visible: true,
            isFolder
        })
    }

    const addFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) { //13 stands for enter

            handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
            setShowInput({ ...showInput, visible: false });
        }
    }

    const handleRename = (e) => {
        e.stopPropagation();

        setIsEditing(true)
    }

    const handleSaveRename = (e) => {
        if (e.key === 'Enter' && e.target.value.trim()) {
            handleRenameNode(explorer.id, e.target.value);
            setIsEditing(false);
        }
    }

    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div className='folder' onClick={() => setExpand(!expand)}>

                    {isEditing ? (
                        <input
                            type='text'
                            value={renameValue}
                            autoFocus
                            onChange={(e) => setRenameValue(e.target.value)}
                            onKeyDown={handleSaveRename}
                            onBlur={() => setIsEditing(false)}
                            onClick={(e) => e.stopPropagation()}
                        />
                    ) :
                        <span>📁 {explorer.name}</span>
                    }


                    <div>
                        <button onClick={(e) => handleNewFolder(e, true)} >Folder +</button>
                        <button onClick={(e) => handleNewFolder(e, false)} >File +</button>
                        <button onClick={handleRename}>Rename</button>
                    </div>
                </div>

                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>

                    {showInput.visible && (
                        <div className='inputCont'>
                            <span>
                                {showInput.isFolder ? "📁" : "📄"}
                            </span>
                            <input
                                className='inputCont_input'
                                autoFocus
                                onKeyDown={addFolder}
                                onBlur={() => setShowInput({ ...showInput, visible: false })}
                            />
                        </div>
                    )
                    }

                    {explorer.items.map((exp) => {
                        return (
                            <FS explorer={exp} handleInsertNode={handleInsertNode} key={exp.id} />
                        )
                    })}
                </div>

            </div>
        );
    } else {
        return <span className='file'>📄 {explorer.name} </span>
    }
}

export default FS
