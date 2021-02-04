import React, {Component} from 'react'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            toggle: false
        }

        
    }

    toggle() {
        this.setState( (prevState) => {
            return {
                toggle: !prevState.toggle
            }
        })
    }

    render() {
        return(
            <header>

                <h2>Start Bootstrap</h2>
                <nav className={`nav-bar ${this.state.toggle ? "show" : ""}`}>
                    <ul>
                     <li>About</li>
                      <li>Projects</li>
                     <li>Contact</li>
                    </ul>
                </nav>
                <input onClick={() => this.toggle()} alt='menu icon' type='image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'/>

            </header>
        )
    }
}

export default Header