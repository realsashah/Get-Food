import React,{useState} from 'react'
import {Form,FormGroup,Label,Input,Button,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom';


const SignUp = (props) => {

    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        let data = `Username ${username}\n
                Email ${email}\n
                Password ${password}\n
                Name ${name}`;
        setName('');
        setEmail('');
        setPassword('');
        setUsername('');
        alert(data);
    }

    return ( 
        <div className='container'>
        <div className='row'>
           <Breadcrumb>
                <BreadcrumbItem><Link to ='/menu'>Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>Sign Up</BreadcrumbItem>
            </Breadcrumb>
            <div className='col-12'>
                <h3>Sign Up</h3>
                <hr />
            </div>
        </div>
        <div className='row'>  
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input type='text' id='name' name='name' value={name} onChange={(e)=>setName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type='username' id='username' name='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input type='email' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type='password' id='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Sign Up</Button>
                    </Form>    
            </div>
        </div>
     );
}
 
export default SignUp;