import Layout from '../templates/layout'
import Header from  '../molecules/header'
import AddTask from '../molecules/add-task'
import TaskGroup from '../organisms/task-group'

function App () {
  return (
    <Layout >
      <Header />
      <AddTask />
      <TaskGroup/>
    </Layout>
  );
}

export default App;