// import React, { useState } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
import { getFilter } from 'redux/selectors';
import { Find } from './Filter.styled';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const Filter = () => {
  const filterDefault = useSelector(getFilter);
  // const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    const val = e.target.value;
    // setFilter(val);
    dispatch(setStatusFilter(val));
  };

  return (
    <Find>
      <FormControl variant="outlined" sx={{ minWidth: 200 }}>
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          id="filter-select"
          value={filterDefault}
          // value={filter || filterDefault}
          onChange={handleChange}
          label="Filter"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="follow">Follow</MenuItem>
          <MenuItem value="followings">Followings</MenuItem>
        </Select>
      </FormControl>
    </Find>
  );
};

export default Filter;
