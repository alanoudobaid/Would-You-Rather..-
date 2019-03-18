import React from 'react'


export const Card = ({user}) => (
    <div className="card">
        <span className="medal-container" />
        <span className="medal" />
        <div className="avatar-container">
            <div className="avatar">
                <img src={user.avatarURL} alt="profile" />
            </div>
        </div>
        <div className="details">
            <h2>{user.name}</h2>
            <div>
                <h5>Answered Question</h5>
                <h5>{Object.keys(user.answers).length}</h5>
            </div>
            <div>
                <h5>Created Question</h5>
                <h5>{user.questions.length}</h5>
            </div>
        </div>
        <div className="score-container">
            <div className="table">
                <div>
                    <h4>Score</h4>
                </div>
                <div>
                    <h3 className="score">
                        {Object.keys(user.answers).length + user.questions.length}
                    </h3>
                </div>
            </div>
        </div>
    </div>
)