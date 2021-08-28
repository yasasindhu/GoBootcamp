import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch, useSelector } from "react-redux";
import {addInterval} from '../../../redux/CryptoActions';
function SelectCompoment({allSelectItems,defaultSelect}){
 // const allSelectItems = [
    //     {id:1,name:"Tradable assets"},
    //     {id:2,name:"watchlist"},
    //     {id:3,name:"All assets"},
    //     {id:4,name:"Top gainers"},
    //     {id:5,name:"Top losers"},

    // ]
    // const defaultSelect = 'Top losers'
    
    
    const [selectedItem, setSelectedItem] = React.useState(defaultSelect);
    const dispatch = useDispatch();
    const selectedInterval=useSelector(state=>state.interval);
    console.log("selected indxe tab is",selectedInterval);

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
    console.log('this is drop-down selected',event.target.value);
    dispatch(addInterval(event.target.value));
  };
    return(
   
        <FormControl variant="outlined" >
       
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectedItem}
          onChange={handleChange}
          
        >
         {allSelectItems.map(item =>{
             return(
                <MenuItem  key={item.id} value={item.name}>{item.name}</MenuItem>

             );
         }
         )
        }
       
         
        </Select>
      </FormControl>
     
  
      
    );
}
export default SelectCompoment;
