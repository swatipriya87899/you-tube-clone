import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Body from './Component/Body';
import CommentList from './Component/CommentList';
import {CommentsData} from './utils/CommentsData'

function App() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <CommentList comments={CommentsData}/>
    </div>
  );
}

export default App;
