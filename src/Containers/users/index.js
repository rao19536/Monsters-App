import React,{useEffect, useState} from 'react'
import './style.css'
import {Search} from '../../Components/search/user'
import Card from '../../Components/users/userList'
import { getUsers } from '../../redux/actions/users/userAction'
import { connect } from 'react-redux'

const Users = (props) => {
    const [name, setName] = useState('')
    const {
        getUsers,
        data
    } = props

    useEffect(()=>{
        getUsers()
    }, [])

    const searcHandler = (e) => {
        setName(e.target.value)
    }
    const filteredUsers = data && data.users.filter((single)=>{
        return single.firstName.toLowerCase().includes(name)
    })

    return (
        <div style={{backgroundColor: '#d9d9d9'}}>
            <h1 className='text-center pt-4 pb-3'>Search Monsters {console.log(data)}</h1>
            <Search className='center' handleSearch={searcHandler} />
            <Card users={filteredUsers}/>
        </div>
    );
}
const mapStateToDispatch = (dispatch) =>{
    return{
        getUsers: () => dispatch(getUsers()),
    }
}

const mapStateToProps= (state) => {
    return{
        data: state.users
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Users)
