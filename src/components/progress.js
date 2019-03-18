import React from 'react'

export const Progress = ({progress, style}) => (
    <div className="progress" style={{ width: '100%', height: 25, backgroundColor: '#eee', ...style}}>
        <div style={{ width: `${progress}%` }}>
            {progress ? <span>{Number.parseFloat(progress).toFixed(1)}%</span> : null}
        </div>
    </div>
)