import React from 'react'
import {combineReducers} from 'redux';
import {news, getFeed} from './news';
import google from './google';

export default combineReducers({news,getFeed,google})