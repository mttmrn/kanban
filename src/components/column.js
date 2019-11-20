import React, { Component } from 'react'

export default class Column extends Component {
    render() {

        const style = {
            border: '1px solid #fff',
            borderRadius: '2px',
            color: '#fff',
            width: '20rem',
            height: '20rem',
            fontSize: '2rem',
            margin: '1rem',
        }

        const p = {
            cursor: 'pointer'
        }

        return (
            <div style={style}>
                <span style={p}>+ add item</span>
            </div>
        )
    }
}
