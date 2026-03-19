import React from 'react'

export default function CommandCard({ title, description, mysql }) {
    let copyCode = () => {
        navigator.clipboard.writeText(mysql)
        alert("Command copied!")
    }

    return (
        <div className="card bg-dark text-light mb-4">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-secondary">{description}</p>

                <div className="d-flex justify-content-between align-items-start bg-black rounded-4 p-2">
                    <pre className="text-warning mb-0 mt-1">
                        <code>{mysql}</code>
                    </pre>
                    <button className="btn btn-outline-light border-0 me-3" onClick={copyCode}><i className="bi bi-clipboard"></i></button>
                </div>
            </div>
        </div>
    )
}