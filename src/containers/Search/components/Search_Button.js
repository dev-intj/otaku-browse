import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import {withRouter} from 'react-router-dom';

// import react redux functionality
import { connect } from 'react-redux';
import { setSearch } from '../actions';

class Search_Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
          search: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({search: event.target.value});
    }

    render() {

        return (
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                        {/* ICON */}
                        <Search />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder={this.state.search || 'Search'}
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    value={this.state.search}
                    onChange={this.handleChange}
                    />
            </InputGroup>
        )
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.search!=prevState.search){
            if(this.props.location.pathname === '/'){
                this.props.searchAction(this.state.search);
                this.props.history.push('/search')
            }else{
                this.props.searchAction(this.state.search);
            }
        }
    }

    async componentDidMount() {
        this.setState({search:this.props.SearchReducer.search});
    }
}
 

const mapStateToProps = (state) => ({
    ...state
});
const mapDispatchToProps = (dispatch) => ({
    searchAction: (payload) => dispatch(setSearch(payload)),
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps)
const ConnectedComponent = connectToStore(Search_Button)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search_Button));