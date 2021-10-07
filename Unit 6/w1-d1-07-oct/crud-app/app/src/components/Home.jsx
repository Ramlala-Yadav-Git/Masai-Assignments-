import axios from 'axios'
import { useEffect, useState } from 'react'
import Styled from "styled-components"
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from "react-redux"
import { getData } from '../redux/actions'
import { Link } from "react-router-dom"
import { PostUser } from './postUser'

export const Home = ({ id }) => {
    const state = useSelector(state => state.users.data)

    const [page, setPage] = useState(null)
    const [age, setAge] = useState("all")
    const [gender, setGender] = useState("all")
    const [city, setCity] = useState("all")
    const [sort, setSort] = useState("asce")
    const dispatch = useDispatch()




    const history = useHistory()



    useEffect(() => {
        dispatch(getData({ page, age, gender, city, sort }));
        findData()
        // console.log(page, age, city, gender,)
    }, [dispatch, page, age, gender, city, sort]);
    const findData = () => {
        const queryParams = new URLSearchParams(window.location.search);
        const p = queryParams.get('page');
        const a = queryParams.get('age');
        const g = queryParams.get('gender');
        const c = queryParams.get('city');
        const s = queryParams.get('sort');
        let st
        if (p == null && page == null) {
            setPage(1)
            st = `page=${1}`;
        }

        else if (p && page == null) {
            setPage(p)
            st = `page=${p}`;
        }
        else {

            st = `page=${page}`;
        }


        if (age) {
            if (a !== "all") {
                setAge(Number(a))
                st += `&age=${Number(a)}`;

            }
            else {

                st += `&age=${age}`;
            }
        }
        if (gender) {
            if (g !== "all") {
                setGender(g)
                st += `&gender=${g}`;
            }
            else {

                st += `&gender=${gender}`;
            }
        }
        if (city) {
            if (c !== "all") {
                setCity(c)
                st += `&city=${c}`

            }
            else {

                st += `&city=${city}`
            }
        }
        if (sort) {
            if (s !== "asce") {
                setSort(s)
                st += `&sort=${s}`

            }
            else {

                st += `&sort=${sort}`
            }
        }
        history.push({
            pathname: '/',
            search: `${st}`
        })



    }


    const handlePage = (p) => {

        setPage(Number(page) + p)
        // console.log(page)
        findData()


    }
    const handleDelete = (id) => {

        axios.delete(`http://localhost:2345/users/${id}`).then((res) => {
            if (res.data) {
                alert("Deleted succesfully")
            }
            dispatch(getData({ page, age, gender, city, sort }));
        })
    }
    const handlePost = (payload) => {
        axios.post(`http://localhost:2345/users/`, payload).then((res) => {
            if (res.data) {
                alert("data posted succefully")
            }
            else {
                alert("something went wrong")
            }
        })
        dispatch(getData({ page, age, gender, city }));

    }


    return <HomeWrapper>

        <div>
            <UserWrapper>
                <ul>

                    {
                        state && state.map((el) => {
                            return <li key={el._id}>
                                <h5>  Name : {el.name}</h5>
                                <p>{el.age}</p>
                                <p>{el.gender}</p>
                                <p>{el.city}</p>
                                <Link to={`/${el._id}`}>
                                    <button >Edit</button>
                                </Link>
                                <button onClick={() => handleDelete(el._id)}>Delete</button>
                            </li>
                        })
                    }
                </ul>
            </UserWrapper>


            <PageWrapper>
                {page === 0 ?
                    <button disabled>
                        prev
                    </button> :

                    <button onClick={() => handlePage(-1)}>prev</button>
                }
                <button onClick={() => handlePage(+1)}>next</button>
            </PageWrapper>
        </div>

        <SortingWrapper>


            <FilterWrapper>
                <h5>Filters</h5>
                <div>
                    <div>

                        <label >gender :  </label>
                        <select name="gender" onChange={(e) => setGender(e.target.value)} >
                            <option value="all">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>

                        <label >age :  </label>
                        <select name="age" onChange={(e) => setAge(e.target.value)} >
                            <option value="all">select age</option>
                            <option value="10">greater than 10</option>
                            <option value="20">greater than 20</option>
                            <option value="30">greater than 30</option>
                            <option value="40">greater than 40</option>
                            <option value="50">greater than 50</option>
                            <option value="60">greater than 60</option>
                            <option value="70">greater than 70</option>
                            <option value="80">greater than 80</option>
                        </select>
                    </div>
                    <div>

                        <label >city :  </label>
                        <select name="city" onChange={(e) => setCity(e.target.value)} value={city}>
                            <option value="all">select city</option>
                            <option value="valsad">valsad</option>
                            <option value="Phlapphla Chai">Phlapphla Chai</option>

                        </select>
                    </div>
                </div>

            </FilterWrapper>
            <FilterWrapper>
                <h5>Sort</h5>
                <select name="asce" onChange={(e) => setSort(e.target.value)} value={sort}>
                    <option value="asce">ascending</option>
                    <option value="desc">descending</option>

                </select>
            </FilterWrapper>

            <FilterWrapper>
                <h5>Post User</h5>
                <PostUser handlePost={handlePost} />

            </FilterWrapper>
        </SortingWrapper>
    </HomeWrapper >


}


const HomeWrapper = Styled.div`
display:flex;
justify-content:space-between;
padding:10px;
margin:0 70px;

`
const UserWrapper = Styled.div`
/* border:1px solid black; */

& > ul{
    list-style:none;
    padding:10px;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:10px;
}
& > ul > li{
    border:1px solid blue;
   border-radius:5px;
    margin-bottom:10px;
    list-style:none;
    padding:10px
}
& > ul > li button{
    border:1px solid gray;
    margin-right:10px;
    border-radius:5px;
    cursor:pointer;
    color:blue;
}

`
const PageWrapper = Styled.div`
display:flex;
/* border:1px solid black; */
align-items:center;
justify-content:center;
gap:10px;

& > button{
    border:1px solid gray;
    color:blue;
   padding:10px;
   cursor:pointer;
   border-radius:5px;


`
const FilterWrapper = Styled.div`
border:1px solid blue;
max-height:250px;
border-radius:5px;
padding:10px;
 & > div{
     display:flex;
     flex-direction:column;
     gap:10px;
     justify-content:center;
 }
`

const SortingWrapper = Styled.div`
/* display:1px solid blue; */
/* margin:10px; */
position:sticky;
top:0px;
&>div{
    margin:10px;
}
`