import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {Theme} from '@material-ui/core';

const useStyles = makeStyles((theme:Theme)=>({
    mb:{marginBottom:'15px'},
    carousel:{
        height:'75vh',
        backgroundColor:'#ED165F'
    },
    heroText:{width:'70%', margin:'50px auto'}

}));

export default useStyles;