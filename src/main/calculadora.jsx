import React, { Component } from 'react';
import './calculadora.css';
import Buttom from '../components/buttom/buttom';
import Display from '../components/display/display'

export default class Calculator extends Component {
    render() {
        return (
            <div className='calculator'>
                <Display value={100} />
                <Buttom label="AC" />
                <Buttom label="/" />
                <Buttom label="7" />
                <Buttom label="8" />
                <Buttom label="9" />
                <Buttom label="*" />
                <Buttom label="4" />
                <Buttom label="5" />
                <Buttom label="6" />
                <Buttom label="-" />
                <Buttom label="1" />
                <Buttom label="2" />
                <Buttom label="3" />
                <Buttom label="+" />
                <Buttom label="0" />
                <Buttom label="." />
                <Buttom label="=" />
            </div>
        )
    }
}