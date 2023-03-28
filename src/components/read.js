import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:3000/posts`).then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const getData = (e) => {
        axios.get(`http://localhost:3000/posts?q=${e}`).then((getData) => {
                setAPIData(getData.data);
            });
    };

    const onDelete = (id) => {
        axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
            getData();
        })
    }

    const like = (data) => {
        data.like += 1;
        axios.put(` http://localhost:3000/posts/${data.id}`, data)
    }
    
    const dislike = (data) => {
            data.dislike += 1;
            axios.put(` http://localhost:3000/posts/${data.id}`, data)
    }
        
    const jadore = (data) => {
            data.jadore += 1;
            axios.put(` http://localhost:3000/posts/${data.id}`, data)
    }
    

    return (
    
        <div>
            <input
            type="text"
            placeholder="Search"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button type="sublimt" onSelect={getData(searchTxt)}>
          <i class="fa-solid fa-magnifying-glass"></i>
          </button>

            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checkbox Value</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                        <Table.HeaderCell>Like  /  Dislike  /  jadore</Table.HeaderCell>
                        

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}><i class="fa-solid fa-pen"></i></Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}><i class="fa-solid fa-trash"></i></Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => like(data)}> <i class="fa-solid fa-thumbs-up"></i> {data.like}</Button>
                                    <Button onClick={() => dislike(data)}> <i class="fa-solid fa-thumbs-down"></i> {data.dislike}</Button>
                                    <Button onClick={() => jadore(data)}> <i class="fa-solid fa-heart"></i> {data.jadore}</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
