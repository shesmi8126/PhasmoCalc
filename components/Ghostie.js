import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import styles from '../styles/Ghosties.module.scss'

export default class Ghostie extends Component {
    renderEvidence = (evidenceKey, text) => {
        let isRequired = this.props.requiredEvidence.includes(evidenceKey);
        let isFound = this.props.foundEvidence.includes(evidenceKey);
        let classes = !isRequired || isFound ? "d-none" : "";
        return (<Col key={text} className={classes} xs="3">{text}</Col>);
    }

    render() {
        let evidences = [
            {key: 'emf', text: 'EMF 5'},
            {key: 'orbs', text: 'Ghost Orbs'},
            {key: 'writing', text: 'Ghost Writing'},
            {key: 'temps', text: 'Freezing Temps'},
            {key: 'box', text: 'Spirit Box'},
            {key: 'prints', text: 'Finger Prints'}
        ];

        let canBeFound = this.props.foundEvidence.every(evidence => this.props.requiredEvidence.includes(evidence));
        if (!canBeFound){
            return (<></>);
        }
        return (
            <Row className={styles.ghostRow}>
                <Col xs={{ span: 2, offset: 1 }}><b>{this.props.name}</b></Col>
                {evidences.map(evidence => this.renderEvidence(evidence.key, evidence.text))}
            </Row>
        )
    }
}
