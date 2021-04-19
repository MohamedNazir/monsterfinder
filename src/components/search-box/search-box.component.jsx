/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import './search-box.styles.css'



export const SearchBox = ({placeholder, handleChange}) => {
  return (
    <div>
          <TextField className='search-box'
            label={placeholder}
            margin="normal"
            variant="outlined"
            InputProps={{ placeholder: placeholder, onChange:handleChange, type: 'search' }}
          />
           </div>
        )
}


