import './App.css';
import React , {useState, useEffect} from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Typography, Select, MenuItem, InputLabel } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';
import { CSSTransition } from 'react-transition-group';



function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [product, setProduct] = useState("")

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const styles = {
    root: {
      color: 'white',
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
      },
    },
  };
  
  const MySelect = withStyles(styles)(Select);
  const MyInputLabel = withStyles(styles)(InputLabel);

 

  return (
    <>
      <div className='head'>
        <h1>Amazon's Best Seller Electronic Products</h1>
      </div>
      <div className='container'>

        <Tabs value={selectedTab} onChange={handleTabChange} className='tab-root'>
          <Tab label="Analysis" />
          <Tab label="Application" />

        </Tabs>
        <div role="tabpanel" hidden={selectedTab !== 0}>
          {selectedTab === 0 && (
            <div>
              <p>
                <h1>
                  Overall Analysis
                </h1>
                <p>
                  Show data analysis brand wise
                </p>
              </p>
              <div class="line-container">
                <hr className='line'></hr>
              </div>
              <div>

              </div>
            </div>
          )}
        </div>
        <div role="tabpanel" hidden={selectedTab !== 1}>
  {selectedTab === 1 && (
    <div>
            <MyInputLabel fullwidth className='dropdown'>Select Product</MyInputLabel>
            <MySelect 
            
            className='dropdown'
            label='Product'
            placeholder='Product'
            fullwidth
            value={product}
            onChange = {(e) => setProduct(e.target.value)}>
              <MenuItem>Apple Airpods Pro</MenuItem>
              <MenuItem>Amazon Fire Stick 4K</MenuItem>
            </MySelect>
          </div>
        )}
        </div>

      </div>
    </>
        
  );
}


export default App;
