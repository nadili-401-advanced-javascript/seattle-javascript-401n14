import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text } from 'react-native';
import Task from './Task';
import TaskEdit from './TaskEdit';
import TaskAdd from './TaskAdd';
import {
    toggleTaskComplete,
    editTask,
    deleteTask,
    addTask,
} from './store/taskReducer';

function TaskList(props) {
    console.log('TaskList props', props);
    let [edit, setEdit] = useState(null);
    let taskObjects = [];

    const launchEditTask = data => {
        setEdit(
            <TaskEdit
                close={() => {
                    setEdit('');
                }}
                edit={data => {
                    props.dispatch(editTask(data));
                }}
                task={data}
            />,
        );
    };

    for (let i = 0; i < props.tasks.length; i++) {
        taskObjects.push(
            <Task
                key={i}
                id={props.tasks[i]._id}
                name={props.tasks[i].name}
                description={props.tasks[i].description}
                priority={props.tasks[i].priority}
                date={props.tasks[i].dateDue}
                isComplete={props.tasks[i].isCompleted}
                edit={launchEditTask}
                toggle={(id, current) => {
                    props.dispatch(toggleTaskComplete(id, current));
                }}
                delete={id => {
                    props.dispatch(deleteTask(id));
                }}
            />,
        );
    }

    return (
        <ScrollView>
            <View>
                <Text>Hello World</Text>
                <View>{taskObjects}</View>
                <View>{edit}</View>
                <TaskAdd
                    add={data => {
                        props.dispatch(addTask(data));
                    }}
                />
            </View>
        </ScrollView>
    );
}

const mSTP = state => ({
    tasks: state.task.tasks,
});

export default connect(mSTP)(TaskList);
