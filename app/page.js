"use client";
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    console.log(input);
    setLoading(true); 

    try {
      // Make a POST request to your Express server
      console.log(output, "out");
      
      const response = await axios.post('https://api.mistral.ai/v1/chat/completions', {
        model: "mistral-small-latest",
        messages: [
          {
            role: "user",
            content: input
          }
        ],
        temperature: 0.7,
        top_p: 1,
        max_tokens: 1000,
        stream: false,
        safe_prompt: false,
        random_seed: 1337
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer h4WfgDdHJu8zm7FpO3XpWncdYn5tY5me`
        }
      });
      setOutput(response.data.choices[0].message.content.trim());
      console.log(response.data.choices[0].message.content.trim());
      // const aaa = await axios.post('./api/saveInput', { input });
      
    } catch (error) {
      console.error('Error:', error);
      setOutput('Failed to fetch response');
    } finally {
      setLoading(false); // Set loading to false after the request is complete
    }
  };

  return (
    <Container style={{backgroundColor:"#212121"}} >
      <br></br>
      <h1 style={{color:"white"}}>My GPT</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group  className="mb-3 text-white" controlId="exampleForm.ControlInput1">
          <Form.Label style={{ backgroundColor: '#2f2f2f'}} className='w-100 p-2 rounded-top m-0'>Ask anything</Form.Label>
          <Form.Control className='rounded-botttom'
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ backgroundColor: '#0d0d0d',color:'white' ,border:"0",padding:"15px"}}
          /><br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>

        <Form.Group className="mb-3 text-white" controlId="exampleForm.ControlTextarea1">
          <Form.Label  style={{ backgroundColor: '#2f2f2f'}} className='w-100 p-2 rounded-top m-0'>Here is your output!</Form.Label>
          <Form.Control className="text-white" as="textarea" style={{ backgroundColor: '#0d0d0d',borderWidth:"0" }} rows={10} value={loading ? 'Loading...' : output} readOnly />
          
        </Form.Group>
      </Form>
      <p className='text-end text-white'>&#169; Kailash B</p>
    </Container>
  );
}
