import React,{PropTypes} from 'react';
import {connect} from 'react-redux'; 
import * as courseAction from '../../actions/courseAction';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        console.log('running constructor on coursepage');

        this.state ={
            course: {title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course:course});
    }

    onClickSave(){
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index){
        return(
            <div key={index}>{course.title}</div>
        );
    }

    render() {
        console.log('rendering da CoursePage' + JSON.stringify(this.props.coursesProp));
        return (
            <div style={{
                color:'#E5E5E5'
            }}>
                <h1>OTC Page</h1>
                {this.props.coursesProp.map(this.courseRow)}
                <h2>Add customer</h2>
                <input 
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}/>
                <input 
                    className="btn btn-primary btn-lg"
                    bgColor="#232a2f"
                    type="submit"
                    value="Save"
                    margin="30px"
                    onClick={this.onClickSave}/>
                
            </div>
        );
    }
}

CoursesPage.propTypes = {
    coursesProp: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    console.log('calling mapstatetoProps in CoursePage:   ' + state);
    return {
        coursesProp: state.coursesReducer
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(courseAction,dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);