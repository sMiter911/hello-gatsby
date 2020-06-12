import React from 'react'
import { Link } from 'gatsby'

const LinkList = props => (
    <li style={{ display: `inline-block`, marginRight: `1em`}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({children}) {
    return (
        <div style={{margin: `3em auto`, maxWidth: 650, padding: `0 1rem`}}>
            <header style={{marginBottom: `1.5em`}}>
                <Link to="/" style={{textShadow: `none`, backgroundImage: `none`}}>
                    <h3 style={{display: `inline`}}>MySweetSite</h3>
                </Link>
                <ul style={{listStyle: `none`, float: 'right'}}>
                    <LinkList to="/">Home</LinkList>
                    <LinkList to="/about/">About</LinkList>
                    <LinkList to="/contact/">Contact</LinkList>
                </ul>
            </header>
            {children}
        </div>
    )
}