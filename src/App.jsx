import { ToastContainer } from 'react-toastify'
import { ListRepo } from './components/ListRepo'
import { GlobalSyles } from './GlobalStyles'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <>
      <ListRepo/>
      <GlobalSyles/>
      <ToastContainer/>
    </>
  )
}

export default App