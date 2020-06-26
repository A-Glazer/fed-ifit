import React from 'react'

class EquipmentForm extends React.Component {

    state = {
        equipTitle = "",
        input2 = ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value

        })
    }

    // handleOnSubmit = event => {
    //     event.preventDefault()
    //     this.setState({
    //         equipTitle: '',
    //         input2: ''
    //     })
    // }

    render() {
        return (
            <div className="formEquip">
                <form onSubmit={this.handleOnSubmit} >
                    <label>Title  </label>
                    <input type="text" placeholder=" Title" value={this.state.equipTitle} name="equipTitle" onChange={this.handleOnChange} />
                    <br /><br />
                    <label>Equipment Box 1 Text  </label>
                    <input type="text" placeholder=" Text Here" value={this.state.equipBox1text} name="equipBox1text" onChange={this.handleOnChange} />
                    <br /><br />
                    <label>Equipment Box 2 Text  </label>
                    <input type="text" placeholder=" Text Here" value={this.state.equipBox2text} name="equipBox2text" onChange={this.handleOnChange} />
                    <br /><br />
                    <label>Equipment Box 3 Text  </label>
                    <input type="text" placeholder=" Text Here" value={this.state.equipBox3text} name="equipBox3text" onChange={this.handleOnChange} />
                    <br /><br />
                    <label>Equipment Box 4 Text  </label>
                    <input type="text" placeholder=" Text Here" value={this.state.equipBox4text} name="equipBox4text" onChange={this.handleOnChange} />
                    <br /><br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}