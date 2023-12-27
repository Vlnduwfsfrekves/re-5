import Statistics from './components/Statistics'
import FriendList from './components/FriendList';
import friends from './components/json/friends.json'
import data from './components/json/data.json'
function App() {
  return (
    <div>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  )
}
export default App;