import React from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
// class component
class TutorRegisterComponent extends React.Component {
    // console.log('TUTOR REGISTER: ', props.socket);
    constructor(props){
        super(props)
        this.state = {
            socket: this.props.socket,
            school: '',
            SubjectOptions: [],
            GradeOptions: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.onChangeSubject = this.onChangeSubject.bind(this)
        this.onChangeGrade = this.onChangeGrade.bind(this)
        this.handleChangeSchool = this.handleChangeSchool.bind(this)
    }

    handleClick(){
        console.log('inside tut reg', this.state.SubjectOptions, this.state.GradeOptions)
        axios.post('/api/initialize', {
                role: "TUTOR",
                school: this.state.school,
                preferences: {grade: this.state.GradeOptions, subject: this.state.SubjectOptions}

        })
        .then((response) => {
            console.log('tutor post', response)
        })
        .catch((err) => {
            console.log('tutor post err', err)
        })
    }

    onChangeSubject(e) {
        // current array of options
        const options = this.state.SubjectOptions
        let index

        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the numerical value of the checkbox to options array
            options.push(e.target.value)
        } else {
            // or remove the value from the unchecked checkbox from the array
            index = options.indexOf(e.target.value)
            options.splice(index, 1)
        }

        // update the state with the new array of options
        this.setState({ SubjectOptions: options })
    }

    onChangeGrade(e) {
        // current array of options
        const options = this.state.GradeOptions
        let index

        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the numerical value of the checkbox to options array
            options.push(e.target.value)
        } else {
            // or remove the value from the unchecked checkbox from the array
            index = options.indexOf(e.target.value)
            options.splice(index, 1)
        }

        // update the state with the new array of options
        this.setState({ GradeOptions: options })
    }

    handleChangeSchool(e){
        this.setState({school: e.target.value})
        // console.log('grade', this.state.grade, 'subject', this.state.subject)
    }
    render(){
        return (
            <div className={'flexboxcol'}>
                <div style={{flex:1}}>
                    School: <input type="text" placeholder="what school do you go to" onChange={this.handleChangeSchool}/>
                </div>
                <div style={{flex:1}}>
                    Major: <input type="text" placeholder="what do you study"/>
                </div>
                <div style={{flex:1}}>
                    Year: <input type="text" placeholder="what year are you in"/>
                </div>


                <div style={{flex:1}} className={'flexbox'}>
                    <div style={{flex:1}}>
                        <input type="checkbox" value="4" onChange={this.onChangeGrade}/> <span>Grade 4</span>
                        <input type="checkbox" value="5" onChange={this.onChangeGrade}/> <span>Grade 5</span>
                        <input type="checkbox" value="6" onChange={this.onChangeGrade}/> <span>Grade 6</span>
                    </div>
                    <div style={{flex:1}}>
                        <input type="checkbox" value="math" onChange={this.onChangeSubject}/> <span>Math</span>
                        <input type="checkbox" value="physics" onChange={this.onChangeSubject}/> <span>Physics</span>
                        <input type="checkbox" value="chemistry" onChange={this.onChangeSubject}/> <span>Chemistry</span>
                    </div>

                </div>
                <button style={{flex:1}} type="submit">
                    <Link to="/tutor/home" onClick={() => this.handleClick()}>Sign me up</Link>
                </button>
            </div>
        );
    }
};


export default TutorRegisterComponent;
