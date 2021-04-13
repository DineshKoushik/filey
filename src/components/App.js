import { useState } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import Navbar from './Navbar';
import Home from './Home';
import SendFiles from './SendFiles';
import SendFilesSuccess from './SendFilesSuccess';
import RecieveFiles from './RecieveFiles';
import RecieveFilesSuccess from './RecieverFilesSuccess';

const App = () => {
    const [senderCode, setSenderCode] = useState(null);
    const [recieverCode, setRecieverCode] = useState('');

    return (
        <Router history={history}>
            <Navbar />
            <Switch>
                <Route path='/send-files'>
                    <SendFiles setCode={setSenderCode} />
                </Route>
                <Route path='/upload-files-success'>
                    <SendFilesSuccess code={senderCode} />
                </Route>
                <Route path='/recieve-files'>
                    <RecieveFiles
                        recieverCode={recieverCode}
                        setRecieverCode={setRecieverCode}
                    />
                </Route>
                <Route path='/recieve-files-success'>
                    <RecieveFilesSuccess
                        recieverCode={recieverCode}
                    />
                </Route>
                <Route path='/' exact component={Home} />
            </Switch>
        </Router>
    );
};

export default App;
