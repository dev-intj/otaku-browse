import React, { Component } from 'react';
import { createBrowserHistory } from "history";

//import tabs
import OverviewTab from './Tabs/OverviewTab';
import WatchTab from './Tabs/WatchTab';
import CharactersTab from './Tabs/CharactersTab';
import StaffTab from './Tabs/StaffTab';
import ReviewsTab from './Tabs/ReviewsTab';
import SocialTab from './Tabs/SocialTab';

export default class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            mode: "overview"
        }
    }


    async componentDidUpdate() {
        //passing whole json object into state (I will clean it later)
        if (this.props.data != this.state.data) {
            this.setState({ data: this.props.data});
        }
        //passing props into state everytime the parent component updates
        if (this.props.mode != this.state.mode) {
            this.setState({ mode: this.props.mode});
        }
    }


    render() {

        const SwitchMainContent = () => {
            const mode = this.state.mode;
            const rdata = this.state.data;
            switch (mode) {
                case 'overview':
                    return <OverviewTab array={rdata}/>
                case 'watch':
                    return <WatchTab />
                case 'characters':
                    return <CharactersTab />
                case 'staff':
                    return <StaffTab />
                case 'reviews':
                    return <ReviewsTab />
                case 'social':
                    return <SocialTab />
                default:
                    return 'I am not stated';
            }
        }


        return (
            <>
                <SwitchMainContent />
            </>
        )
    }
}
