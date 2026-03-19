import React from 'react'

export default function SideBar({ topics, active, onSelect }) {
    return (
        <div className="list-group">
            {topics.map((topic) => (
                <button key={topic.key} className={`list-group-item list-group-item-action ${active === topic.key ? "active" : "" }`} onClick={() => onSelect(topic.key)}>{topic.label}</button>
            ))}
        </div>
    )
}
