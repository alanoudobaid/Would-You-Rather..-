import React from 'react';

export const QTemplate = ({avatar, name, children}) => (
    <div className="box">
        <header className="header"> 
            <h3>{name} asks:</h3>
        </header>
        <div style={{padding: 12,display: 'flex', flexDirection: 'row'}}>
            <div className="avatar-container" style={{flex: .3, padding: 0,paddingRight: 12}}>
                <img src={avatar} alt="profile" />
            </div>
            <div style={{flex: 0.7, paddingLeft: 12, borderLeft: '2px solid #eee', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                {children}
            </div>
        </div>
    </div>
)
