import React from 'react'
import { Accordion } from 'react-bootstrap';


function ProcedureQuestions() {
  return (
    <div>								<div className="head-text mb-30">
    <h4 className="title mb-10">Popular Questions</h4>
    <p className="mb-0">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
</div>
<Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
    <Accordion.Item eventKey="0">
        <Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
        <Accordion.Body>
            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
        <Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
        <Accordion.Body>
            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
        <Accordion.Header>Understand Doctor Before You Regret?</Accordion.Header>
        <Accordion.Body>
            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
        <Accordion.Header>What types of systems do you support?</Accordion.Header>
        <Accordion.Body>
            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="4">
        <Accordion.Header>We Teach You How To Feel Better?</Accordion.Header>
        <Accordion.Body>
            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="5">
        <Accordion.Header>How Can I Contact You?</Accordion.Header>
        <Accordion.Body>
            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Accordion.Body>
    </Accordion.Item>
</Accordion></div>
  )
}

export default ProcedureQuestions