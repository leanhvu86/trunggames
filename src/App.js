import React, {Component} from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {connect} from 'react-redux';
import {ActionTypes} from './constants/actionTypes';
import 'react-slideshow-image/dist/styles.css'
import Banner from "./components/Banner";
import TopMenu from "./components/TopMenu";
import { Translation } from "react-i18next";
import configData from "./config.json";
import NavBar from "./components/NavBar";

const mapStateToProps = state => {
    return {...state}
};

const mapDispatchToProps = dispatch => ({
    onQuizLoad: payload => dispatch({type: ActionTypes.QuizLoad, payload}),
    onSubmit: payload => dispatch({type: ActionTypes.QuizSubmit, payload}),
    onPagerUpdate: payload => dispatch({type: ActionTypes.PagerUpdate, payload})
});

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const fadeImages = [
    {
        url: configData.SERVER_URL+'/file/1bcd9b96-07e7-45e3-8820-b26cc475ac88-banner.jpg',
        caption: 'First Slide'
    },
    {
        url: configData.SERVER_URL+'/file/c50eb9b4-b9f6-4bfe-8f86-262a241ea344-banner2.jpg',
        caption: 'Second Slide'
    },
    {
        url: configData.SERVER_URL+'/file/859d34a3-5182-4dee-83bf-64c5dfd5080e-banner3.png',
        caption: 'Third Slide'
    },
];

class App extends React.Component {


    state = {
        quizes: [
            // { id: 'data/javascript.json', name: 'Javascript' },
            // { id: 'data/pmone.json', name: 'PM one' },
            {id: 'data/lich-su.json', name: 'Lịch sử'},
            {id: 'data/khtn.json', name: 'Khoa học tự nhiên'},
            {id: 'data/de-dia.json', name: 'Địa lý'},
            {id: 'data/tin-hoc.json', name: 'Tin học'},
            {id: 'data/cong-nghe.json', name: 'Công nghệ'}
        ],
        quizId: 'data/lich-su.json',
        time: {},
        seconds: 1800,
        stop: false,
        banner: this.props.banner
    };

    pager = {
        index: 0,
        size: 1,
        count: 1
    }

    componentDidMount() {
        // this.load(this.state.quizId);
        // let timeLeftVar = this.secondsToTime(this.state.seconds);
        // this.setState({time: timeLeftVar});
        // this.startTimer();
        // this.timer = 0;
        // this.startTimer = this.startTimer.bind(this);
        // this.countDown = this.countDown.bind(this);
        // this.startTimer();
    }

    // secondsToTime(secs) {
    //     let hours = Math.floor(secs / (60 * 60));
    //
    //     let divisor_for_minutes = secs % (60 * 60);
    //     let minutes = Math.floor(divisor_for_minutes / 60);
    //
    //     let divisor_for_seconds = divisor_for_minutes % 60;
    //     let seconds = Math.ceil(divisor_for_seconds);
    //
    //     let obj = {
    //         "h": hours,
    //         "m": minutes,
    //         "s": seconds
    //     };
    //     return obj;
    // }
    //
    // startTimer() {
    //     if (this.timer === 0 && this.state.seconds > 0) {
    //         this.timer = setInterval(this.countDown, 1000);
    //     }
    // }
    //
    // countDown() {
    //     // Remove one second, set state so a re-render happens.
    //     let seconds = this.state.seconds - 1;
    //     this.setState({
    //         time: this.secondsToTime(seconds),
    //         seconds: seconds,
    //     });
    //
    //     // Check if we're at zero.
    //     if (seconds === 0) {
    //         clearInterval(this.timer);
    //         this.props.onSubmit();
    //         alert('Đã hết thời gian');
    //     }
    // }
    //
    // load(quizId) {
    //     let url = quizId || this.props.quizId;
    //     fetch(`../${url}`).then(res => res.json()).then(res => {
    //         let quiz = res;
    //         quiz.questions = shuffle(quiz.questions);
    //         let count = 0;
    //         let questArray = [];
    //         quiz.questions.forEach(q => {
    //             count++;
    //             if (count < 21) {
    //                 q.options.forEach(o => o.selected = false);
    //                 questArray.push(q);
    //             }
    //         });
    //         quiz.questions = questArray;
    //         quiz.config = Object.assign(this.props.quiz.config || {}, quiz.config);
    //         this.pager.count = quiz.questions.length / this.pager.size;
    //         this.props.onQuizLoad(quiz);
    //         this.props.onPagerUpdate(this.pager);
    //     });
    // }
    //
    // onChange = (e) => {
    //     this.setState({quizId: e.target.value, seconds: 1800});
    //     this.load(e.target.value);
    //     this.startTimer();
    // }

    render() {
        const style = {
            background: '#1e1327',
            height:'100%'
        }

        return (

            <div style={style}>
                <Translation>{t => <TopMenu t={t} />}</Translation>
                <NavBar/>
                <Banner banner={fadeImages}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

