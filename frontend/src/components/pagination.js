import React, { useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import { DataContext, IndexContext } from '../App.js';

export default function PaginationControlled(props) {
    const [page, setPage] = useState(1);
    const [data, setData] = useContext(DataContext);
    const [index, setIndex] = useContext(IndexContext);
    const handleChange = (event, value) => {
        // write changes to current text into data array
        const currentText = document.getElementById("editor").innerHTML;
        const newData = data.map((item, j) => {
            if (j === index){
                return {"text": currentText}
            } else {
                return item;
            }
        })
        setData(newData);
        setPage(value);
        console.log(value);
        setIndex(value - 1);
    }
    const style = {
        paddingTop: 10
    }
    
    return (
      <div style={style}>
        <Pagination count={props.pages} page={page} onChange={handleChange} />
      </div>
    );
}