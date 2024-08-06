import Navbar from '../components/Navbar'
import Footer from '../components/authenticatedbar/footer'
import { useNavigate } from 'react-router-dom'
import { authCheck } from '../utils/authCheckUtils';
import { useEffect } from 'react';
// import About from '../components/pages/About'

function UnAuthenticatedLayout({ children }) {

  const navigate = useNavigate();

  useEffect(() => {
    checkLoginStatus()
  }, [])

  async function checkLoginStatus() {
    try {
      const res = await authCheck();
      if (res) {
        navigate('/home')
      }
    }
    catch (error) {
      console.error("Error checking auth status:", error);
    }
  }

  return (
    <div>
      <Navbar />
      {/* <About /> */}
      <div className='mt-16 min-h-[91vh]'>{children}</div>
      <Footer />
    </div>
  )
}

export default UnAuthenticatedLayout