import React from "react"

function TextInput({Title, state, setState}) {
    return (
        <>
            <span className='title'>{Title}</span>
            <input
                type="number"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
        </>
    )
}

export default TextInput