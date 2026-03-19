import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import SideBar from './SideBar';
import CommandCard from './CommandCard';

let apiKeys = {
    // sql: "https://dummyjson.com/c/3110-b46a-48c3-9f05",
    ddl: "https://dummyjson.com/c/24a5-b16a-4993-b60b",
    constraints: "https://dummyjson.com/c/cc8b-e839-4666-afb9",
    dml: "https://dummyjson.com/c/57cb-93eb-48d5-9ef4",
    tcl: "https://dummyjson.com/c/2f50-0602-47d4-be92",
    dql: "https://dummyjson.com/c/fe63-2e37-4569-8771",
    dcl: "https://dummyjson.com/c/fab3-7308-4164-a2ba"
}
export default function SQL() {

    let topics = [
        // { key: "sql", label: "SQL Cheatsheet" },
        { key: "ddl", label: "DDL Commands" },
        { key: "constraints", label: "Constraints Commands" },
        { key: "dml", label: "DML Commands" },
        { key: "tcl", label: "TCL Commands" },
        { key: "dql", label: "DQL Commands" },
        { key: "dcl", label: "DCL Commands" }
    ]
    let [activeIndex, setActiveIndex] = useState(0)
    let activeTopic = topics[activeIndex].key
    let { data, loading } = useFetch(apiKeys[activeTopic]);

    let goNext = () => {
        if (activeIndex < topics.length - 1) {
            setActiveIndex(activeIndex + 1)
        }
    }

    let goPrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        }
    }

    return (
        <div className="container-fluid vh-100">
            <div className="row h-100">
                <div className="col-12 col-md-12 col-lg-3 border-end p-3 position-static top-0">
                    <h5 className="mb-3"><i className="bi bi-database"></i> SQL Topics</h5>

                    <div className='overflow-y-lg-auto'>
                        <SideBar topics={topics} active={activeTopic} onSelect={(key) => setActiveIndex(topics.findIndex(t => t.key === key))} />
                    </div>
                </div>
                <div className="col-12 col-md-8 col-lg-9 p-4 hide-scrollbar" style={{ overflowY: "auto", height: "100vh" }}>
                    {loading && <p>Loading commands...</p>}

                    {data && (
                        <>
                            <h2 className="mb-2">{data.topic}</h2>
                            <p className="text-secondary mb-4">{data.description}</p>

                            {data.commands.map((cmd) => (
                                <CommandCard key={cmd.id} title={cmd.title} description={cmd.description} mysql={cmd.mysql} />
                            ))}
                            <div className="d-flex justify-content-between mt-5 pt-4 border-top">
                                <button className="btn btn-outline-success" disabled={activeIndex === 0} onClick={goPrev}> ⬅ Previous </button>

                                <span className="align-self-center text-secondary">{topics[activeIndex].label}</span>

                                <button className="btn btn-outline-success" disabled={activeIndex === topics.length - 1} onClick={goNext} > Next ➡ </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}