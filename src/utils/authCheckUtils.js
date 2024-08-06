export async function authCheck(){
    try {
        let userData = localStorage?.getItem('userData');
        if(userData){
          userData = JSON.parse(userData);
          if(userData?.token){
           const res = await fetch('http://localhost:3000/api/users/check-login-status',
            {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userData.token}`
                }
            }
           );
           if(res.status === 200){
            return true;
           }else{
            return false;
           }
          }else{
            return false;
          }
        }else{
         return false
        }
    } catch (error) {
        return false
    }
}