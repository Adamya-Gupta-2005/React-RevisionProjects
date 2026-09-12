import React, { useState } from 'react'

const FS = ({ explorer, handleInsertNode }) => {
    console.log(explorer)

    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder:null
    });

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();

        setExpand(true)

        setShowInput({
            visible: true,
            isFolder
        })
    } 

    const addFolder = (e) => {
        if(e.keyCode === 13 && e.target.value) { //13 stands for enter

            handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
            setShowInput({...showInput, visible: false});
        }
    }
    
    if(explorer.isFolder) {
        return (
        <div style={{ marginTop: 5 }}>
            <div className='folder' onClick={() => setExpand(!expand)}>
                <span>📁 {explorer.name}</span>
                <div>
                    <button onClick={(e) => handleNewFolder(e , true)} >Folder +</button>
                    <button onClick={(e) => handleNewFolder(e , false)} >File +</button>
                </div>
            </div>

            <div style={{display: expand?"block":"none", paddingLeft:25}}>

                {showInput.visible && (
                        <div className='inputCont'> 
                            <span>
                                {showInput.isFolder? "📁" : "📄"} 
                            </span>
                            <input
                             className='inputCont_input' 
                             autoFocus
                             onKeyDown={addFolder}
                             onBlur={() => setShowInput({...showInput, visible:false})}
                             />
                        </div>
                    )
                }

                {explorer.items.map((exp) => {
                    return (
                        <FS explorer={exp} handleInsertNode={handleInsertNode} key={exp.id}/>
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
