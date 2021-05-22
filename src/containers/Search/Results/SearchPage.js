import React, { Component } from 'react';
import { useSelector} from 'react-redux';
import { createSelector} from 'reselect';
import { makeSelectType } from '../selectors';
import Search from '../Search';

const stateSelector = createSelector(makeSelectType, (type) => ({
    type
}))

export default function SearchPage(props){
  const {type} = useSelector(stateSelector);
  return (
    <>
    <Search/>
  <div> lol </div>
  </>
  )
}