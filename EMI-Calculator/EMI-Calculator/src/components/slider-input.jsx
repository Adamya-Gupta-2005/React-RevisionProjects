function SliderInput({ title, state, min, max, onChange, labelMin, labelMax, totalTitle }) {
    return (
        <>
            <span className='title'>{title}</span>
            {totalTitle && (
                <span>
                    {totalTitle}
                </span>
            )}
            <div>
                <input
                    type="range"
                    min={min}
                    max={max}
                    className='slider'
                    value={state}
                    onChange={onChange}
                />

                <div className='labels'>
                    <label>{labelMin ?? min}</label>
                    <b>{state}</b>
                    <label>{labelMax ?? max}</label>
                </div>
            </div>
        </>
    )
}

export default SliderInput;